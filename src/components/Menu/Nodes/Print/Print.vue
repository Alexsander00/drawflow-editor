<template>
	<Button text="Print" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import PrintNode from './PrintNode.vue'

import Button from '../Button.vue'

export default {
	name: 'Print',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('Print', PrintNode))

		const onClick = () => {
			editor.value.addNode('Print', 1, 1, 150, 300, '', {}, 'Print', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
