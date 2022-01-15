<template>
	<Button text="Read" @click="onClick" />
</template>

<script>
import ReadNode from './ReadNode.vue'

import Button from '../Button.vue'

import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'Read',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('Read', ReadNode)

		const onClick = () =>
			addNode('Read', 1, 1, 150, 300, { type: 'string' }, 'Read', 'vue')

		return {
			onClick,
		}
	},
}
</script>
