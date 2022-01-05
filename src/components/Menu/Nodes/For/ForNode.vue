<template>
	<div class="container">
		<div>
			<label for="start">From</label>
			<input name="start" placeholder="start" df-start />

			<label for="end">To</label>
			<input name="end" type="text" placeholder="end" df-end />
		</div>
	</div>
</template>

<script>
export default {
	name: 'ForNode',
}
</script>

<style scoped>
.container {
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;
}

label {
	font-weight: bold;
}
</style>
