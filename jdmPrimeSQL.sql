CREATE TABLE "cars" (
  "car_id" integer PRIMARY KEY,
  "owned_by" integer,
  "model" varchar,
  "trim" varchar,
  "year" integer,
  "price" float,
  "mileage" integer,
  "transmission" varchar,
  "color" varchar,
  "fuel" varchar,
  "deliver" varchar,
  "new_arrival" bool,
  "created_at" timestamp
);

CREATE TABLE "users" (
  "id" integer PRIMARY KEY,
  "username" varchar,
  "role" varchar,
  "location" varchar,
  "created_at" timestamp
);


CREATE TABLE "car_posts" (
  "id" integer PRIMARY KEY,
  "title" varchar,
  "body" text,
  "user_id" integer,
  "status" varchar,
  "created_at" timestamp,
  "car_id" integer,
  FOREIGN KEY ("user_id") REFERENCES "users" ("id"),
  FOREIGN KEY ("car_id") REFERENCES "cars" ("car_id")
);

CREATE TABLE "credentials" (
  "user_id" integer,
  "password_hash" text,
  "password_salt" text
);

CREATE TABLE "bids" (
  "bid_id" integer PRIMARY KEY,
  "post_id" integer,
  "user_id" integer,
  "amount" float,
  "bid_time" timestamp,
  FOREIGN KEY ("post_id") REFERENCES "car_posts" ("id"),
  FOREIGN KEY ("user_id") REFERENCES "users" ("id")
);
CREATE TABLE "deposits" (
  "id" integer PRIMARY KEY,
  "user_id" integer,
  "car_id" integer,
  "amount" float,
  "received" bool
);

COMMENT ON COLUMN "car_posts"."body" IS 'Content of the post';

ALTER TABLE "users" ADD FOREIGN KEY ("id") REFERENCES "deposits" ("user_id");

ALTER TABLE "deposits" ADD FOREIGN KEY ("car_id") REFERENCES "cars" ("car_id");

ALTER TABLE "car_posts" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "credentials" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "cars" ADD FOREIGN KEY ("owned_by") REFERENCES "users" ("id");
