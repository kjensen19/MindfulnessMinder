CREATE TABLE "Users" (
	"id" serial NOT NULL,
	"Username" varchar(255) NOT NULL,
	"Password" varchar(255) NOT NULL,
	"Admin" BOOLEAN NOT NULL DEFAULT 'False',
	"Inserted_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
	"Updated_at" TIMESTAMPTZ NOT NULL DEFAULT now(),
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"phone" varchar(255) NOT NULL,
	"ok_to_contact" varchar(5) NOT NULL,
	CONSTRAINT "Users_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Exercise" (
	"id" serial NOT NULL,
	"Type" varchar(255) NOT NULL,
	"Duration" varchar(255) NOT NULL,
	"Description" varchar(255) NOT NULL,
	CONSTRAINT "Exercise_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Daily" (
	"id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"Exercise_id" integer NOT NULL,
	"time_of_day" varchar(255) NOT NULL,
	"Day" DATE NOT NULL default now(),
	"Complete" BOOLEAN default false,
	CONSTRAINT "Daily_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "DailyAssesment" (
	"id" serial NOT NULL,
	"users_id" integer NOT NULL,
	"area_one" integer NOT NULL DEFAULT '0',
	"area_two" integer NOT NULL DEFAULT '0',
	"area_three" integer NOT NULL DEFAULT '0',
	"area_four" integer NOT NULL DEFAULT '0',
	"date" DATE default now(),
	CONSTRAINT "DailyAssesment_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);





ALTER TABLE "Daily" ADD CONSTRAINT "Daily_fk0" FOREIGN KEY ("user_id") REFERENCES "Users"("id");
ALTER TABLE "Daily" ADD CONSTRAINT "Daily_fk1" FOREIGN KEY ("Exercise_id") REFERENCES "Exercise"("id");

ALTER TABLE "DailyAssesment" ADD CONSTRAINT "DailyAssesment_fk0" FOREIGN KEY ("users_id") REFERENCES "Users"("id");

INSERT into "Exercise"("Type", "Duration", "Description")
  VALUES ('Physical', 'Short', 'Take a walk around the block.'),
  	('Emotional', 'Short', 'Close your eyes and list three things you are grateful for.'),
  	('Mental', 'Short', 'Box breathing for one minute.'),
  	('Psychosocial', 'Short', 'Think about one thing you can see, touch, smell.');
  	

CREATE TABLE "Test"(
"id" serial not null primary key,
"server_date" TIMESTAMPTZ,
"SQL_date" TIMESTAMPTZ(3) default cast(now() as date)
);

INSERT into "Test"("server_date")
  VALUES (cast(now() as TIMESTAMPTZ));
  
SELECT * from "DailyAssesment"
	WHERE "users_id"='4'
    AND "date"=cast(now() as date);
    
INSERT into "DailyAssesment"(
"users_id", "area_one", "area_two", "area_three", "area_four", "date")
VALUES(3, 5, 5, 5, 5, '2022-10-16');