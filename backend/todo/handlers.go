package todo

import (
	"errors"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func PostTodo(ctx *gin.Context) {
	var todo Todo
	ctx.BindJSON(&todo)
	db := ctx.MustGet("DB").(*gorm.DB)
	result := db.Create(&todo)
	if result.Error != nil {
		fmt.Errorf("Couldn't create a resource: %w", result.Error)
	}
	ctx.JSON(http.StatusCreated, todo)
}

func GetTodo(ctx *gin.Context) {
	var todo Todo
	id := ctx.Param("id")
	db := ctx.MustGet("DB").(*gorm.DB)
	result := db.First(&todo, id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		ctx.JSON(http.StatusNotFound, gin.H{"message": "Resource not found"})
	} else {
		ctx.JSON(http.StatusOK, todo)
	}
}
