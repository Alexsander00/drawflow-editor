<template>
	<Button text="For" @click="onClick" />
</template>

<script>
import ForNode from './ForNode.vue'

import Button from '../Button.vue'

import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'For',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('For', ForNode)

		const onClick = () => addNode('For', 1, 1, 250, 300, {}, 'For', 'vue')

		return {
			onClick,
		}
	},
}
</script>
