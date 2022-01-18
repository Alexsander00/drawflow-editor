<template>
	<button>
		<font-awesome-icon :icon="['far', 'save']" @click="onClick" />
	</button>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
	name: 'Save',
	setup() {
		const showSaveModal = inject('showSaveModal')

		const onClick = () => (showSaveModal.value = true)

		return {
			onClick,
		}
	},
}
</script>
