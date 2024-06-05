package todo

import "time"

type Todo struct {
	ID           *int      `json:"id,omitempty" gorm:"primaryKey;autoIncrement"`
	CreationDate time.Time `json:"creationDate"`
	Content      string    `json:"content"`
	Author       string    `json:"author"`
	Completed    *bool     `json:"completed"`
	Title        string    `json:"title"`
}

func (Todo) TableName() string {
	return "todo"
}
