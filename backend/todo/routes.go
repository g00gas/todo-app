package todo

import "github.com/gin-gonic/gin"

func RegisterRoutes(r *gin.Engine) {
	r.GET("/api/helloTodo", GetTodoHelloHandler)
	r.POST("/api/todo", PostTodo)
}
