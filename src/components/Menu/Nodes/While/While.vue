<template>
	<Button text="While" @click="onClick" />
</template>

<script>
import Button from '../Button.vue'

import WhileNode from './WhileNode.vue'

import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'While',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('While', WhileNode)

		const onClick = () => addNode('While', 1, 1, 150, 300, {}, 'While', 'vue')

		return {
			onClick,
		}
	},
}
</script>
