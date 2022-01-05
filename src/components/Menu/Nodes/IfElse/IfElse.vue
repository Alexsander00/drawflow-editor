<template>
	<Button text="If-Else" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import IfElse from './IfElseNode.vue'

import Button from '../Button.vue'

export default {
	name: 'IfElse',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('IfElse', IfElse))

		const onClick = () => {
			editor.value.addNode('IfElse', 1, 2, 150, 300, '', {}, 'IfElse', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
