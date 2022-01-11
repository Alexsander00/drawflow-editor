<template>
	<Button text="Assign" @click="onClick" />
</template>

<script>
import AssignNode from './AssignNode.vue'
import Button from '../Button.vue'

import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'Assign',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('Assign', AssignNode)

		const onClick = () => addNode('Assign', 1, 1, 150, 300, {}, 'Assign', 'vue')

		return {
			onClick,
		}
	},
}
</script>
