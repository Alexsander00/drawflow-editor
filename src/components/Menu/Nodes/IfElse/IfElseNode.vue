<template>
	<div class="container">
		<div class="if">
			<label for="condition">If</label>
			<input name="condition" type="text" placeholder="condition" df-value />
		</div>
		<p>Else</p>
	</div>
</template>

<script>
export default {
	name: 'IfElseNode',
}
</script>

<style scoped>
.container {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
}

.if {
	display: flex;
	justify-content: center;
	align-items: center;
}

label,
p {
	font-weight: bold;
}
</style>
