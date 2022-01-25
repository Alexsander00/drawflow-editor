package get

type GetOutput struct {
	Data []struct {
		Data []struct {
			Id   int    `json:"id"`
			Name string `json:"name"`
			Data struct {
				Name  string `json:"name,omitempty"`
				Value string `json:"value"`
			} `json:"data"`
			Class  string `json:"class"`
			Html   string `json:"html"`
			Inputs struct {
				Input_1 struct {
					Connections []struct {
						Node  string `json:"node,omitempty"`
						Input string `json:"input,omitempty"`
					} `json:"connections" default:"[]"`
				} `json:"input_1"`
			} `json:"inputs"`
			Outputs struct {
				Output_1 struct {
					Connections []struct {
						Node   string `json:"node,omitempty"`
						Output string `json:"output,omitempty"`
					} `json:"connections" default:"[]"`
				} `json:"output_1"`

				Output_2 *struct {
					Connections []struct {
						Node   string `json:"node"`
						Output string `json:"output"`
					} `json:"connections"`
				} `json:"output_2,omitempty"`
			} `json:"outputs"`

			Pos_x int `json:"pos_x"`
			Pos_y int `json:"pos_y"`
		}
	}
}