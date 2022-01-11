<template>
	<Button text="End For" @click="onClick" />
</template>

<script>
import Button from '../Button.vue'

import EndForNode from './EndForNode.vue'
import useEditor from '../../../../hooks/useEditor'

export default {
	name: 'EndFor',
	components: {
		Button,
	},
	setup() {
		const { addNode, registerNode } = useEditor()
		registerNode('EndFor', EndForNode)

		const onClick = () => addNode('EndFor', 1, 1, 150, 300, {}, 'EndFor', 'vue')

		return {
			onClick,
		}
	},
}
</script>
