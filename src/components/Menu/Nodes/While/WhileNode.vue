<template>
	<div class="container">
		<label for="condition">While</label>
		<input name="condition" placeholder="condition" df-value />
	</div>
</template>

<script>
export default {
	name: 'WhileNode',
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
