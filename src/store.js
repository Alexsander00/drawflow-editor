import { createStore } from 'vuex'

import { Graph } from './utils/graph'

export const store = createStore({
	state: {
		editor: {},
		codeMirror: {},
		nodes: new Graph(),
	},
	mutations: {
		setEditor: (state, payload) => (state.editor = payload),
		setCodeMirror: (state, payload) => (state.codeMirror = payload),
	},
})
