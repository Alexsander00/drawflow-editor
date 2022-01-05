<template>
	<button @click="onClick">
		<font-awesome-icon :icon="['fas', 'undo']" />
	</button>
</template>

<script>
import { computed } from '@vue/reactivity'
import { useStore } from 'vuex'
export default {
	name: 'Restart',
	setup() {
		const store = useStore()
		const editor = computed(() => store.state.editor)

		const onClick = () => editor.value.clear()

		return {
			onClick,
		}
	},
}
</script>
