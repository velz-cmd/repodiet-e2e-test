-- Protected migration fixture. RepoDiet must never auto-delete migrations.
CREATE TABLE IF NOT EXISTS repodiet_fixture (
  id INTEGER PRIMARY KEY,
  label TEXT NOT NULL
);
