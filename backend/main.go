package main

import (
	"todo_gin/config"
	"todo_gin/middleware"
	"todo_gin/todo"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.New()
	db := config.GetDatabaseConnection()
	r.Use(
		cors.Default(),
		gin.Logger(),
		gin.Recovery(),
		middleware.UseDatabase(db))
	todo.RegisterRoutes(r)
	r.Run("127.0.0.1:8081")
}
