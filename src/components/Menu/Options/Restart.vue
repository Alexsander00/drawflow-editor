<template>
	<button @click="onClick">
		<font-awesome-icon :icon="['fas', 'undo']" />
	</button>
</template>

<script>
import useEditor from '../../../hooks/useEditor'
import useCodeMirror from '../../../hooks/useCodeMirror'

export default {
	name: 'Restart',
	setup() {
		const { clearNodes } = useEditor()
		const { clearContent } = useCodeMirror()

		const onClick = () => {
			clearNodes(), clearContent()
		}

		return {
			onClick,
		}
	},
}
</script>
