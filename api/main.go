package main

import (
	"drawflow/handlers/get"
	"drawflow/handlers/list"
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

	r.Route("/flowchart", func (r chi.Router)  {
		r.Get("/", func (w http.ResponseWriter, r *http.Request)  {
			w.Header().Set("Content-Type", "application/json")
	
			res, err := list.ListHandler()
	
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
			}
	
			w.WriteHeader(http.StatusOK)
			json.NewEncoder(w).Encode(res)
		})

		r.Get("/{id}", func (w http.ResponseWriter, r *http.Request)  {
			w.Header().Set("Content-Type", "application/json")

			res, err := get.GetHandler(get.GetInput{
				Uid: chi.URLParam(r, "id"),
			})
	
			if err != nil {
				w.WriteHeader(http.StatusBadRequest)
			}

			w.WriteHeader(http.StatusOK)
			if len(res.Data) == 0 {
				json.NewEncoder(w).Encode(res)
				return
			}
			
			json.NewEncoder(w).Encode(res.Data[0])
		})

		r.Post("/", func (w http.ResponseWriter, r *http.Request)  {
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
	})
	
	http.ListenAndServe(":3000", r)
}