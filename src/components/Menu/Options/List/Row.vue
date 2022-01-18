<template>
	<button class="close">
		<font-awesome-icon :icon="['fas', 'times-circle']" @click="close" />
	</button>

	<ul>
		<li class="row">
			<div class="item">ID</div>
			<div class="item">Name</div>
			<div class="item">Actions</div>
		</li>

		<li class="row" :key="item.id" v-for="item in items">
			<div class="item">{{ item.id }}</div>
			<div class="item">{{ item.name }}</div>
			<div class="item">
				<button class="load">
					<font-awesome-icon :icon="['far', 'check-square']" />
				</button>
				<button class="delete">
					<font-awesome-icon :icon="['fas', 'trash-alt']" />
				</button>
			</div>
		</li>
	</ul>
</template>

<script>
import { inject } from '@vue/runtime-core'

export default {
	name: 'Row',
	props: {
		items: Object,
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
ul {
	margin: 0px;
	padding: 0px;
}

.row {
	align-items: center;
	display: flex;
	justify-content: center;
	padding: 0 1em;
}

.row > div {
	flex-grow: 1;
}

.item {
	display: flex;
	justify-content: center;
	margin: 5px 0;
}

.row:nth-child(1) {
	font-size: 1.25rem;
	font-weight: bold;
	padding: 1em;
}
.row:nth-child(1) > div {
	border: 1px solid lightgray;
}

button {
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 1.15rem;
}

.close {
	align-self: flex-end;
	color: hsl(0, 100%, 50%);
	font-size: 1.5rem;
	margin: 15px 5px 0;
	cursor: pointer;
}

.close:hover {
	color: hsl(0, 100%, 35%);
}
</style>
