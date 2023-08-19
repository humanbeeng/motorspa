create table vehicles(id int not null AUTO_INCREMENT, 
  brand varchar(60) not null,
  model varchar(60) not null, 
  date_of_purchase datetime not null, 
  kms_run int not null, 
  quoted_price int not null,
  owner_name varchar(60) not null, 
  owner_contact_number int not null, 
  created_at timestamp default now() not null, 
  updated_at timestamp default now() not null, 
  primary key(id)
);
