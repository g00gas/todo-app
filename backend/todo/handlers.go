package todo

import (
	"fmt"
	"net/http"
	"time"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func GetTodoHelloHandler(ctx *gin.Context) {
	newTodo := Todo{
		CreationDate: time.Now(),
		Content:      "hello, this is a test.",
		Author:       "michal",
	}
	ctx.JSON(200, newTodo)
}

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
