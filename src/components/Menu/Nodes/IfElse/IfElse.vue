<template>
	<Button text="If-Else" @click="onClick" />
</template>

<script>
import IfElseNode from './IfElseNode.vue'

import Button from '../Button.vue'

import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'IfElse',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('IfElse', IfElseNode)

		const onClick = () => addNode('IfElse', 1, 2, 150, 300, {}, 'IfElse', 'vue')

		return {
			onClick,
		}
	},
}
</script>
