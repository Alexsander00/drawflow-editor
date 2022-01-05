import { createStore } from 'vuex'

export const store = createStore({
	state: {
		editor: {},
	},
	mutations: {
		setEditor: (state, payload) => {
			state.editor = payload
			state.editor.start()
		},
	},
})
