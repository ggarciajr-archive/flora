create table projects (
  id serial primary key,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp,
  accessed_at timestamp not null default current_timestamp,
  primary_project boolean,
  name varchar(140) not null,
  user_id int4 not null references users (id) on delete cascade
);

create index projects_user_id_idx on projects (user_id);
