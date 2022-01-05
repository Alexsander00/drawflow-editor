<template>
	<Button text="End For" @click="onClick" />
</template>

<script>
import { computed } from '@vue/reactivity'
import { watch } from '@vue/runtime-core'

import { useStore } from 'vuex'

import Button from '../Button.vue'

import EndForNode from './EndForNode.vue'

export default {
	name: 'EndFor',
	components: {
		Button,
	},
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		watch(editor, () => editor.value.registerNode('EndFor', EndForNode))

		const onClick = () => {
			editor.value.addNode('EndFor', 1, 1, 150, 300, '', {}, 'EndFor', 'vue')
		}

		return {
			onClick,
		}
	},
}
</script>
