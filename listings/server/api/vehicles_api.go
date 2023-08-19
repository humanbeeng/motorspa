package api

import (
	"fmt"
	"log"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/google/uuid"
)

type VehicleController struct{}

func NewVehicleController() *VehicleController {
	return &VehicleController{}
}

func AddVehicleRoutes(router fiber.Router, cont *VehicleController) {
	router.Post("/vehicle", cont.AddNewVehicle)
	router.Get("/vehicle", cont.GetAllVehicles)
	router.Get("/vehicle/:id", cont.GetVehicle)
	router.Post("/vehicle/picture", cont.UploadVehiclePicture)
}

func (vc *VehicleController) AddNewVehicle(c *fiber.Ctx) error {
	return nil
}

func (vc *VehicleController) GetAllVehicles(c *fiber.Ctx) error {
	return c.JSON("Hello")
}

func (vc *VehicleController) GetVehicle(c *fiber.Ctx) error {
	return c.JSON("Hello")
}

func (vc *VehicleController) UploadVehiclePicture(c *fiber.Ctx) error {
	// parse incomming image file

	file, err := c.FormFile("image")
	if err != nil {
		log.Println("image upload error --> ", err)
		return c.JSON(fiber.Map{"status": 500, "message": "Server error", "data": nil})

	}

	// generate new uuid for image name
	uniqueId := uuid.New()

	// remove "- from imageName"

	filename := strings.Replace(uniqueId.String(), "-", "", -1)

	// extract image extension from original file filename

	fileExt := strings.Split(file.Filename, ".")[1]

	// generate image from filename and extension
	image := fmt.Sprintf("%s.%s", filename, fileExt)

	// save image to ./images dir
	err = c.SaveFile(file, fmt.Sprintf("./images/%s", image))

	if err != nil {
		log.Println("image save error --> ", err)
		return c.JSON(fiber.Map{"status": 500, "message": "Server error", "data": nil})
	}

	// generate image url to serve to client using CDN

	imageUrl := fmt.Sprintf("http://localhost:3000/images/%s", image)

	// create meta data and send to client

	data := map[string]interface{}{
		"imageName": image,
		"imageUrl":  imageUrl,
		"header":    file.Header,
		"size":      file.Size,
	}

	return c.JSON(fiber.Map{"status": 201, "message": "Image uploaded successfully", "data": data})
}
