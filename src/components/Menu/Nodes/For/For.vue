<template>
	<Button text="For" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import Button from '../Button.vue'

import ForNode from './ForNode.vue'

export default {
	name: 'For',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('For', ForNode))

		const onClick = () => {
			editor.value.addNode('For', 1, 1, 150, 300, '', {}, 'For', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
