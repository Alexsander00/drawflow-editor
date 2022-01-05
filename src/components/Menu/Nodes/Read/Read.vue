<template>
	<Button text="Read" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import ReadNode from './ReadNode.vue'

import Button from '../Button.vue'

export default {
	name: 'Read',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('Read', ReadNode))

		const onClick = () => {
			editor.value.addNode('Read', 1, 1, 150, 300, '', {}, 'Read', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
