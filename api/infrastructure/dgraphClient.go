package infrastructure

import (
	"log"

	"github.com/dgraph-io/dgo/v200"
	"github.com/dgraph-io/dgo/v200/protos/api"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func CreateClient() (*dgo.Dgraph, func()) {
	conn, err := grpc.Dial("localhost:9080", grpc.WithTransportCredentials(insecure.NewCredentials()))

	if err != nil {
		log.Fatal(err)
	}

	return dgo.NewDgraphClient(api.NewDgraphClient(conn)), func ()  {
		conn.Close()
	}
}