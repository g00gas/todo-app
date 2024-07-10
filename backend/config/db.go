package config

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func GetDatabaseConnection() *gorm.DB {
	dsn := "host=postgres user=postgres password=postgres dbname=postgres port=5432 sslmode=disable TimeZone=Europe/Warsaw"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(fmt.Sprintf("Cannot connect to DB: %s", err))
	}
	return db
}
