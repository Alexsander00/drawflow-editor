<template>
	<li>
		<div>{{ item.uid }}</div>
		<div>{{ item.Name }}</div>
		<div>{{ item.CreationDate }}</div>
		<div>
			<button class="load">
				<font-awesome-icon :icon="['far', 'check-square']" />
			</button>
			<button class="delete">
				<font-awesome-icon :icon="['fas', 'trash-alt']" />
			</button>
		</div>
	</li>
</template>

<script>
export default {
	name: 'Row',
	props: {
		item: Object,
	},
}
</script>

<style scoped>
button {
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 1.25rem;
}
</style>
