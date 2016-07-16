# Flora

Flora is an open source time tracker written in Haskell.

**Build status**

[![Circle CI](https://circleci.com/gh/ggarciajr/flora.svg?style=svg)](https://circleci.com/gh/ggarciajr/flora)

## DB

Flora runs on [PostgreSQL](http://postgresql.org/).

You need to create a new database and then inform the user, password and
database name to run the migrations.


## Migrations

To run the DB migrations, you'll need [flyway](http://flywaydb.org/)

Run the following command from the project root folder:

```
  flyway -user=<db_user>
         -password=<db_pass>
         -url=jdbc:postgresql://localhost:5432/<db_name>
         -locations=filesystem:migrations
         migrate
```

## Env variables

These are the environment variables you'll need to set:

```
# Database names
PGDATABASE

# Database password
PGPASS

# Database user
PGUSER

# Database host
PGHOST

# Database port
PGPORT
```
