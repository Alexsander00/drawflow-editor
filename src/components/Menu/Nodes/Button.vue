<template>
	<button>{{ text }}</button>
</template>

<script>
export default {
	name: 'Button',
	props: {
		text: {
			required: true,
			type: String,
		},
	},
}
</script>

<style scoped>
button {
	background-color: transparent;
	border: 0;
	color: aliceblue;
	padding: 10px;
	margin: 5px;
}

button:hover {
	background-color: hsl(240, 5%, 23%);
}
</style>
