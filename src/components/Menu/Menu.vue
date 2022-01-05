<template>
	<div class="container">
		<Options />
		<Nodes />
	</div>
</template>

<script>
import Nodes from './Nodes/Nodes.vue'
import Options from './Options/Options.vue'

export default {
	name: 'Menu',
	components: {
		Nodes,
		Options,
	},
}
</script>

<style scoped>
.container {
	display: flex;
	grid-area: menu;
}
</style>
