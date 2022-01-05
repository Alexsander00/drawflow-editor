<template>
	<div id="drawflow" />
</template>

<script>
import { h, getCurrentInstance, render } from 'vue'

import { shallowRef } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'

import Drawflow from 'drawflow'
import { useStore } from 'vuex'

import 'drawflow/dist/drawflow.min.css'

export default {
	name: 'App',
	components: {},
	setup() {
		const editor = shallowRef({})
		const store = useStore()

		onMounted(() => {
			const Vue = { version: 3, h, render }
			const context = getCurrentInstance().appContext.app._context

			editor.value = new Drawflow(
				document.getElementById('drawflow'),
				Vue,
				context,
			)

			store.commit('setEditor', editor)
		})
	},
}
</script>

<style>
#app {
	display: grid;
	grid-template: 'menu drawflow' 1fr / 20% 1fr;
}

#drawflow {
	grid-area: drawflow;
}
</style>
