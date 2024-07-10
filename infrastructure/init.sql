CREATE TABLE IF NOT EXISTS todo (
    id SERIAL PRIMARY KEY,
    author VARCHAR(45) NOT NULL,
    content TEXT,
    creation_date TIMESTAMPTZ NOT NULL,
    title VARCHAR(255),
    completed BOOLEAN NOT NULL
);

INSERT INTO todo (author, content, creation_date, title, completed)
VALUES (
    'michal',
    'Hello World!',
    NOW(),
    'first todos',
    FALSE
);
