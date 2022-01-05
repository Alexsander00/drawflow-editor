<template>
	<div class="container">
		<input type="text" placeholder="input name" df-value />

		<div>
			<label for="type">type</label>
			<select name="type" df-type>
				<option selected value="string">string</option>
				<option value="number">number</option>
			</select>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ReadNode',
}
</script>

<style scoped>
.container {
	display: flex;
	flex-flow: column nowrap;
	align-items: center;
	justify-content: center;
}

label {
	font-weight: bold;
}

select {
	margin: 5px;
}
</style>
