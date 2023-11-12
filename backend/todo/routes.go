package todo

import "github.com/gin-gonic/gin"

func RegisterRoutes(r *gin.Engine) {
	r.POST("/api/todo", PostTodo)
	r.GET("/api/todo/:id", GetTodo)
}
