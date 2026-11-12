-- ============================================================
-- STC Metro CDMX | Esquema inicial de reportes compartidos
-- Ejecutar completo en Supabase > SQL Editor > New query.
-- ============================================================

create extension if not exists pgcrypto;

create table if not exists public.reports (
    id uuid primary key default gen_random_uuid(),
    line text not null check (line in ('1','2','3','4','5','6','7','8','9','A','B','12')),
    station text not null check (char_length(trim(station)) between 1 and 100),
    type text not null check (type in ('accidente','falla','mantenimiento','obstruccion','otro')),
    description text not null check (char_length(trim(description)) between 3 and 1000),
    status text not null default 'activo' check (status in ('activo','resuelto')),
    created_at timestamptz not null default now(),
    resolved_at timestamptz,
    constraint resolved_date_consistency check (
        (status = 'activo' and resolved_at is null) or
        (status = 'resuelto' and resolved_at is not null)
    )
);

create index if not exists reports_created_at_idx on public.reports (created_at desc);
create index if not exists reports_station_idx on public.reports (line, station);
create index if not exists reports_status_idx on public.reports (status);

alter table public.reports enable row level security;

-- Cualquier visitante puede consultar los reportes.
drop policy if exists "Public can read reports" on public.reports;
create policy "Public can read reports"
on public.reports for select
to anon, authenticated
using (true);

-- Cualquier visitante puede registrar un reporte; los CHECK de la tabla validan los datos.
drop policy if exists "Public can submit reports" on public.reports;
create policy "Public can submit reports"
on public.reports for insert
to anon, authenticated
with check (
    status = 'activo'
    and resolved_at is null
    and char_length(trim(description)) between 3 and 1000
);

-- No se habilitan UPDATE ni DELETE públicos para evitar que cualquier visitante
-- pueda alterar o borrar reportes de otras personas. La administración se hace
-- desde Supabase Dashboard. Más adelante se puede agregar login de moderadores.

grant usage on schema public to anon, authenticated;
grant select, insert on public.reports to anon, authenticated;
