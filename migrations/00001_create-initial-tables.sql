CREATE TABLE users (
  id serial PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL
);

INSERT INTO users(name, email) VALUES ('John Snow', 'john@stark.com');