<template>
	<div class="container" v-if="showListModal">
		<div class="content">
			<Grid :items="items" />
		</div>
	</div>
</template>

<script>
import { inject, ref, watch } from '@vue/runtime-core'

import Grid from './Grid.vue'
import axios from 'axios'

export default {
	components: {
		Grid,
	},
	setup() {
		const showListModal = inject('showListModal')
		const items = ref([])

		watch(showListModal, async () => {
			try {
				if (showListModal.value) {
					const res = await axios.get('http://localhost:3000/flowchart')
					items.value = res.data.All
				}
			} catch (error) {
				alert('an error ocurred while fetching data')
			}
		})

		return {
			showListModal,
			items,
		}
	},
}
</script>

<style scoped>
.container {
	align-items: center;
	background-color: hsla(0, 0%, 20%, 0.5);
	display: flex;
	height: 100%;
	justify-content: center;
	position: fixed;
	width: 100%;
	z-index: 10;
}

.content {
	background-color: white;
	border-radius: 5px;
	height: 80%;
	width: 50%;
	display: flex;
	flex-flow: column nowrap;
}
</style>
