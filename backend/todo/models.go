package todo

import "time"

type Todo struct {
	CreationDate time.Time `json:"creationDate"`
	Content      string    `json:"content"`
	Author       string    `json:"author"`
}
