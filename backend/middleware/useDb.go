package middleware

import (
	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

func UseDatabase(db *gorm.DB) gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.Set("DB", db)
		ctx.Next()
	}
}
