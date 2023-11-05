CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    username VARCHAR(45) NOT NULL,
    content TEXT,
    creation_date TIMESTAMPTZ NOT NULL
);

INSERT INTO todo (username, content, creation_date)
VALUES (
    'michal',
    'Hello World!',
    NOW()
);
