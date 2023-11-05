package todo

import (
	"time"

	"github.com/gin-gonic/gin"
)

func GetTodoHelloHandler(ctx *gin.Context) {
	newTodo := Todo{
		CreationDate: time.Now(),
		Content:      "hello, this is a test.",
		Author:       "michal",
	}
	ctx.JSON(200, newTodo)
}
