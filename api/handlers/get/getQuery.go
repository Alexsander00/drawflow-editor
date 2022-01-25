package get

import (
	"context"
	"drawflow/infrastructure"
	"encoding/json"
	"fmt"
	"log"

	"github.com/creasty/defaults"
)

func GetHandler(input GetInput) (*GetOutput, error) {
	client, close := infrastructure.CreateClient()
	defer close()

	query := fmt.Sprintf(`
	{
		Data(func: uid(%s)){
			Data {
				id
				name
				data {        
					name
					value
				}
				class
				html
				inputs {
					input_1 {
						connections {
							node
							input
						}
					}
				}
				outputs {
					output_1 {
						connections {
							node
							output
						}
					}
					output_2 {
						connections {
							node
							output
						}
					}
				}
				pos_x
				pos_y
			}
		}
	}`, input.Uid)

	res, err := client.NewTxn().Query(context.Background(), query)

	output := &GetOutput{};
	if err := json.Unmarshal(res.Json, &output); err != nil {
		log.Fatal(err)
	}
	
	if err := defaults.Set(output); err != nil {
		panic(err)
	}

	return output, err
}