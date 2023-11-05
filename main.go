package main

import (
	"todo_gin/todo"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	todo.RegisterRoutes(r)
	r.Run("127.0.0.1:8081")
}
