<template>
	<button class="close">
		<font-awesome-icon :icon="['fas', 'times-circle']" @click="close" />
	</button>

	<ul class="container">
		<li class="row">
			<div>ID</div>
			<div>Name</div>
			<div>Date</div>
			<div>Actions</div>
		</li>

		<Row class="row" :item="item" :key="item.id" v-for="item in items" />
	</ul>
</template>

<script>
import { inject } from '@vue/runtime-core'
import Row from './Row.vue'

export default {
	name: 'Grid',
	components: {
		Row,
	},
	props: {
		items: Array,
	},
	setup() {
		const showListModal = inject('showListModal')

		const close = () => (showListModal.value = false)

		return {
			close,
		}
	},
}
</script>

<style scoped>
.container {
	align-items: center;
	display: flex;
	flex-flow: column nowrap;
	margin: 0px;
	overflow-x: hidden;
	overflow-y: auto;
	padding: 0px;
}

.row {
	display: grid;
	grid-template: auto / repeat(4, 1fr);
	justify-content: center;
	justify-items: center;
	width: 100%;
	margin: 10px 0;
}

.row:nth-child(1) {
	border-bottom: 3px solid lightgray;
	font-size: 1.25rem;
	font-weight: bold;
	margin: 1em;
	padding: 0 0 0.5em;
}

button {
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 1.25rem;
}

.close {
	align-self: flex-end;
	color: hsl(0, 100%, 50%);
	cursor: pointer;
	font-size: 1.65rem;
	margin: 1em 0.5em 0.25em;
}

.close:hover {
	color: hsl(0, 100%, 35%);
}
</style>
