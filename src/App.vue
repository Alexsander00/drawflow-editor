<template>
	<Menu />
	<div id="drawflow" />
	<CodeMirror />
	<SaveModalForm />
	<ListModalForm />
</template>

<script>
import { h, getCurrentInstance, render } from 'vue'

import { ref, shallowRef } from '@vue/reactivity'
import { onMounted, provide } from '@vue/runtime-core'

import Drawflow from 'drawflow'

import { useStore } from 'vuex'

import CodeMirror from './components/CodeMirror.vue'

import Menu from './components/Menu/Menu.vue'

import SaveModalForm from './components/Menu/Options/Save/SaveForm.vue'
import ListModalForm from './components/Menu/Options/List/ListForm.vue'

import 'drawflow/dist/drawflow.min.css'

import 'normalize.css'

export default {
	name: 'App',
	components: { Menu, CodeMirror, SaveModalForm, ListModalForm },
	setup() {
		const editor = shallowRef({})
		const store = useStore()

		provide('showSaveModal', ref(false))
		provide('showListModal', ref(false))

		onMounted(() => {
			const Vue = { version: 3, h, render }
			const context = getCurrentInstance().appContext.app._context

			editor.value = new Drawflow(
				document.getElementById('drawflow'),
				Vue,
				context,
			)

			editor.value.start()
			store.commit('setEditor', editor)
		})
	},
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
* {
	font-family: 'Roboto', sans-serif;
}

#app {
	display: grid;
	height: 100vh;
	grid-template: 'menu drawflow' 2fr 'menu codemirror' auto / 20% 1fr;
}

#drawflow {
	grid-area: drawflow;
}

.drawflow .drawflow-node {
	width: auto;
	min-width: 100px;
}

.startNode {
	border-radius: 100px !important;
}

input {
	border-radius: 20px;
	max-width: 120px;
	margin: 5px;
	height: 16px;
}
</style>
