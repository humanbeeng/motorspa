package main

import (
	"database/sql"
	"fmt"
	"log"
	"os"

	_ "github.com/go-sql-driver/mysql"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/joho/godotenv"

	"github.com/humanbeeng/motorspa/listings/server/api"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		panic(err)
	}
	dsn := os.Getenv("DSN")
	fmt.Println(dsn)

	db, err := sql.Open("mysql", dsn)
	if err != nil {
		log.Fatalf("failed to connect: %v", err)
	}
	defer db.Close()

	log.Println("Successfully connected to PlanetScale!")
	app := fiber.New()
	app.Use(logger.New())

	v1 := app.Group("/v1")

	vc := api.NewVehicleController()
	api.AddVehicleRoutes(v1, vc)
	app.Listen(":3000")
}
