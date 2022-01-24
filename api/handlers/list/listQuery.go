package list

import (
	"context"
	"drawflow/infrastructure"
	"encoding/json"
	"log"
)

func ListHandler() (ListOutput, error) {
	client, close := infrastructure.CreateClient()
	defer close()

	const query = `
	{
		All(func: has(Name)){
		  uid
		  Name
		  CreationDate
		}
	}`	

	res, err := client.NewTxn().Query(context.Background(), query)

	var output = ListOutput{};
	if err := json.Unmarshal(res.Json, &output); err != nil {
		log.Fatal(err)
	}

	return output, err
}