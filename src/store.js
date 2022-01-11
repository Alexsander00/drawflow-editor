import { createStore } from 'vuex'

export const store = createStore({
	state: {
		editor: {},
		codeMirror: {},
	},
	mutations: {
		setEditor: (state, payload) => (state.editor = payload),
		setCodeMirror: (state, payload) => (state.codeMirror = payload),
	},
})
