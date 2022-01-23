package save

import "io"

type SaveInput struct {
	Body io.ReadCloser
}