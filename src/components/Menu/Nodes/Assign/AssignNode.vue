<template>
	<div class="container">
		<input class="name" type="text" placeholder="name" df-name /> =
		<input class="value" type="text" placeholder="value" df-value />
	</div>
</template>

<script>
export default {
	name: 'AssignNode',
}
</script>

<style scoped>
.container {
	display: flex;
	justify-content: center;
	align-items: center;
}

.name {
	width: 25%;
}
</style>
