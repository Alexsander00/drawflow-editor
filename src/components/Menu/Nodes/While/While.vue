<template>
	<Button text="While" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import Button from '../Button.vue'

import WhileNode from './WhileNode.vue'

export default {
	name: 'While',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('While', WhileNode))

		const onClick = () => {
			editor.value.addNode('While', 1, 1, 150, 300, '', {}, 'While', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
