-- name: ListVehicles :many
select * from vehicles;

-- name: InsertVehicle :execresult
insert into vehicles (
  brand, model, date_of_purchase, kms_run, quoted_price, owner_name, owner_contact_number
) values (
?, ?, ?, ?, ?, ?, ?
);
