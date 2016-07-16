create table users (
  id serial primary key unique,
  created_at timestamp not null default current_timestamp,
  last_access timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp
);
