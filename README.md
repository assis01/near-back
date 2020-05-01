

Criação de banco:



CREATE EXTENSION pgcrypto;

CREATE TABLE IF NOT EXISTS "cliente" (
  "id"  UUID  DEFAULT gen_random_uuid(),
  "nome" VARCHAR(255),
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL,
  PRIMARY KEY ("id")
);
