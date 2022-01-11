<template>
	<Button text="Print" @click="onClick" />
</template>

<script>
import PrintNode from './PrintNode.vue'

import Button from '../Button.vue'

import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'Print',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('Print', PrintNode)

		const onClick = () => addNode('Print', 1, 1, 150, 300, {}, 'Print', 'vue')

		return {
			onClick,
		}
	},
}
</script>
