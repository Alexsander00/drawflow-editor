<template>
	<button @click="clearNodes">
		<font-awesome-icon :icon="['fas', 'undo']" />
	</button>
</template>

<script>
import useEditor from '../../../hooks/useEditor'

export default {
	name: 'Restart',
	setup() {
		const { clearNodes } = useEditor()

		return {
			clearNodes,
		}
	},
}
</script>
