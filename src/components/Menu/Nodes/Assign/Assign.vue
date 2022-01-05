<template>
	<Button text="Assign" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import AssignNode from './AssignNode.vue'
import Button from '../Button.vue'

export default {
	name: 'Assign',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('Assign', AssignNode))

		const onClick = () => {
			editor.value.addNode('Assign', 1, 1, 150, 300, '', {}, 'Assign', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
