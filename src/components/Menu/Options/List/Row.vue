<template>
	<li>
		<div>{{ item.uid }}</div>
		<div>{{ item.Name }}</div>
		<div>{{ item.CreationDate }}</div>
		<div>
			<button class="load" @click="loadClick">
				<font-awesome-icon :icon="['far', 'check-square']" />
			</button>
			<button class="delete">
				<font-awesome-icon :icon="['fas', 'trash-alt']" />
			</button>
		</div>
	</li>
</template>

<script>
import axios from 'axios'
import useEditor from '../../../../hooks/useEditor'
export default {
	name: 'Row',
	props: {
		item: Object,
	},
	setup(props) {
		const { importData } = useEditor()

		const loadClick = async () => {
			try {
				const res = await axios.get(
					`http://localhost:3000/flowchart/${props.item.uid}`,
				)

				importData(res.data.Data)
				alert('flowchart loaded')
			} catch (error) {
				alert('an error ocurred while fetching data')
				console.log(error)
			}
		}

		return {
			loadClick,
		}
	},
}
</script>

<style scoped>
button {
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 1.25rem;
}

.load:hover {
	color: hsl(207, 86%, 57%);
}

.delete:hover {
	color: hsl(0, 100%, 35%);
}
</style>
