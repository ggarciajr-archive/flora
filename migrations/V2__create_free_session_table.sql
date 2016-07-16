create table free_sessions (
  id serial primary key,
  ident varchar(6) not null,
  user_id int4 not null references users (id) on delete cascade,
  created_at timestamp not null default current_timestamp,
  unique (ident),
  unique (user_id)
);

create index free_sessions_user_id_unique_idx on free_sessions (user_id);
create index free_sessions_ident_unique_idx on free_sessions (ident);
