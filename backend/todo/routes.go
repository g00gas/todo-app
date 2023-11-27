package todo

import "github.com/gin-gonic/gin"

func RegisterRoutes(r *gin.Engine) {
	r.POST("/api/todo", PostTodo)
	r.GET("/api/todo/:id", GetTodoById)
	r.GET("/api/todo", GetTodos)
	r.DELETE("/api/todo/:id", DeleteTodo)
	r.PATCH("/api/todo/:id", UpdateTodo)
}
