<template>
	<div class="container">
		<Read />
		<Assign />
		<IfElse />
		<For />
		<EndFor />
		<While />
		<Print />
	</div>
</template>

<script>
import Assign from './Assign/Assign.vue'
import IfElse from './IfElse/IfElse.vue'
import For from './For/For.vue'
import EndFor from './EndFor/EndFor.vue'
import While from './While/While.vue'
import Print from './Print/Print.vue'
import Read from './Read/Read.vue'

export default {
	name: 'Nodes',
	components: {
		Assign,
		IfElse,
		For,
		EndFor,
		While,
		Print,
		Read,
	},
}
</script>

<style scoped>
.container {
	display: flex;
	flex-flow: column nowrap;
	flex-grow: 1;
	background-color: hsl(240, 1%, 15%);
}
</style>
