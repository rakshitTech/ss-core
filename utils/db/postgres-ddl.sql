CREATE TABLE categories (
	id serial PRIMARY KEY,
	category varchar(50),
	created_at timestamp default current_timestamp
);
ALTER TABLE categories ADD COLUMN parent_category int DEFAULT NULL REFERENCES categories;

CREATE TABLE products 
(
	id serial PRIMARY KEY,
	name varchar(50),
	description text,
	max_price int,
	selling_price int,
	star_rating float DEFAULT NULL,
	created_at timestamp default current_timestamp,
	updated_at timestamp default current_timestamp
);

CREATE TABLE product_category_mapping (
	id serial PRIMARY KEY,
	product_id int REFERENCES products,
	category_id int REFERENCES categories,
	created_at timestamp default current_timestamp
);

CREATE TYPE media_roles AS ENUM ('product_image_1', 'product_image_2', 'product_image_3', 'product_image_4', 'product_image_5');

CREATE TABLE product_media_mapping (
	id serial PRIMARY KEY,
	product_id int REFERENCES products,
	media_id int REFERENCES media,
	media_role media_roles,
	created_at timestamp default current_timestamp
);
