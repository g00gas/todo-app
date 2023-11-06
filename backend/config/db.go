package config

import (
	"fmt"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func getDatabaseConnection() *gorm.DB {
	dsn := "host=localhost user=postgress password=pass dbname=todo port=5433 sslmode=disable TimeZone=Europe/Warsaw"
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic(fmt.Sprintf("Cannot connect to DB: %s", err))
	}
	return db
}
