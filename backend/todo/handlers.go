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

	if err := ctx.ShouldBindJSON(&todo); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": "Invalid input"})
		return
	}

	db := ctx.MustGet("DB").(*gorm.DB)

	if result := db.Create(&todo); result.Error != nil {
		fmt.Printf("Couldn't create a resource: %v\n", result.Error)
		ctx.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to create resource"})
		return
	}

	ctx.JSON(http.StatusCreated, todo)
}

func GetTodoById(ctx *gin.Context) {
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

func GetTodos(ctx *gin.Context) {
	var todos []Todo
	db := ctx.MustGet("DB").(*gorm.DB)
	result := db.Find(&todos)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		ctx.JSON(http.StatusNotFound, gin.H{"message": "Resource not found"})
	} else {
		ctx.JSON(http.StatusOK, todos)
	}
}

func DeleteTodo(ctx *gin.Context) {
	var todo Todo
	db := ctx.MustGet("DB").(*gorm.DB)
	id := ctx.Param("id")
	result := db.Delete(&todo, id)
	if errors.Is(result.Error, gorm.ErrRecordNotFound) {
		ctx.JSON(http.StatusNotFound, gin.H{"message": "Resource not found"})
	} else {
		ctx.Status(http.StatusNoContent)
	}

}

func UpdateTodo(ctx *gin.Context) {
	var todo Todo
	db := ctx.MustGet("DB").(*gorm.DB)
	id := ctx.Param("id")

	if err := ctx.ShouldBindJSON(&todo); err != nil {
		ctx.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	res := db.Model(&todo).Where("id = ?", id).Updates(&todo)
	if res.Error != nil {
		switch {
		case errors.Is(res.Error, gorm.ErrRecordNotFound):
			ctx.JSON(http.StatusNotFound, gin.H{"message": "Resource not found."})
		default:
			ctx.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to update todo."})
		}
		return
	}

	if res.RowsAffected == 0 {
		ctx.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to update todo."})
		return
	}
	db.First(&todo, id)

	ctx.JSON(http.StatusOK, todo)
}
