<template>
	<div class="container">
		<Save />
		<List />
		<Exec />
		<Restart />
	</div>
</template>

<script>
import Exec from './Exec.vue'
import List from './List/List.vue'
import Save from './Save/Save.vue'
import Restart from './Restart.vue'

export default {
	name: 'Options',
	components: {
		Exec,
		List,
		Save,
		Restart,
	},
}
</script>

<style scoped>
.container {
	display: flex;
	flex-flow: column nowrap;
	font-size: 2rem;
	background-color: hsl(0, 0%, 20%);
}

button {
	color: hsl(0, 0%, 50%);
	background-color: transparent;
	border: 0;
	cursor: pointer;
	margin: 10px;
}

button:hover {
	color: whitesmoke;
}
</style>
