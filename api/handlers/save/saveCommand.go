package save

import (
	"context"
	"drawflow/infrastructure"
	"io/ioutil"
	"log"

	"github.com/dgraph-io/dgo/v200/protos/api"
)

func SaveHandler(input SaveInput) (SaveOutput, error) {
	client, close := infrastructure.CreateClient()
	defer close()

	json, err := ioutil.ReadAll(input.Body)
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.NewTxn().Mutate(context.Background(), &api.Mutation{
		SetJson:   json,
		CommitNow: true,
	})

	keys := make([]string, 0, len(res.Uids))
	for k := range res.Uids {
		keys = append(keys, k)
	}

	return SaveOutput{
		Uid: res.Uids[keys[0]],
	}, err
}