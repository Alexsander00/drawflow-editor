<template>
	<button>
		<font-awesome-icon :icon="['fas', 'list']" @click="onClick" />
	</button>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
	name: 'List',
	setup() {
		const showListModal = inject('showListModal')

		const onClick = () => (showListModal.value = true)

		return {
			onClick,
		}
	},
}
</script>
