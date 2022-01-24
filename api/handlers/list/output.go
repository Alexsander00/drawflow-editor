package list

type ListOutput struct {
	All []struct {
		Uid          string `json:"uid"`
		Name         string `json:"Name"`
		CreationDate string `json:"CreationDate"`
	}
}