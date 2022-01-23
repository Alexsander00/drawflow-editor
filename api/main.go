package main

import (
	"drawflow/handlers/save"
	"encoding/json"
	"net/http"

	"github.com/go-chi/chi"
	"github.com/go-chi/cors"
)

func main() {
	r := chi.NewRouter()
	r.Use(cors.Handler(cors.Options{
		AllowedOrigins: []string{"http://localhost:8081"},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
	}))

	r.Post("/flowchart", func (w http.ResponseWriter, r *http.Request)  {
		w.Header().Set("Content-Type", "application/json")

		res, err :=  save.SaveHandler(save.SaveInput{
			Body: r.Body,
		})

		if err != nil {
			w.WriteHeader(http.StatusBadRequest)
		}

		w.WriteHeader(http.StatusCreated)
		json.NewEncoder(w).Encode(res)
	})
	
	http.ListenAndServe(":3000", r)
}