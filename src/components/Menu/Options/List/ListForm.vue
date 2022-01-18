<template>
	<div class="container" v-if="showListModal">
		<div class="content">
			<Row :items="items" />
		</div>
	</div>
</template>

<script>
import { inject } from '@vue/runtime-core'

import Row from './Row.vue'

export default {
	components: {
		Row,
	},
	setup() {
		const showListModal = inject('showListModal')
		const items = [
			{
				id: 1,
				name: 'sumar',
			},
			{
				id: 2,
				name: 'restar',
			},
		]

		return {
			showListModal,
			items,
		}
	},
}
</script>

<style scoped>
.container {
	align-items: center;
	background-color: hsla(0, 0%, 20%, 0.5);
	display: flex;
	height: 100%;
	justify-content: center;
	position: fixed;
	width: 100%;
	z-index: 1;
}

.content {
	background-color: white;
	border-radius: 5px;
	height: 80%;
	width: 50%;
	display: flex;
	flex-flow: column nowrap;
}
</style>
