<template>
	<div class="container" v-if="showSaveModal">
		<div class="content">
			<p class="tittle">Save Flowchart</p>
			<button class="close">
				<font-awesome-icon :icon="['fas', 'times-circle']" @click="close" />
			</button>

			<div class="form">
				<div class="form-name">
					<label for="name">Name </label>
					<input name="name" type="text" v-model="name" />
				</div>
				<button class="save" @click="save">Save</button>
			</div>
		</div>
	</div>
</template>

<script>
import { inject, ref } from '@vue/runtime-core'
import axios from 'axios'
import useEditor from '../../../../hooks/useEditor'

export default {
	setup() {
		const showSaveModal = inject('showSaveModal')
		const { exportData } = useEditor()
		const name = ref('')

		const close = () => {
			name.value = ''
			showSaveModal.value = false
		}

		const save = async () => {
			const data = exportData()
			const keys = Object.keys(data)

			let arrData = []

			for (let index = 0; index < keys.length; index++) {
				arrData.push(data[keys[index]])
			}

			const date = new Date()
			const month =
				date.getMonth() + 1 < 10
					? '0'.concat(date.getMonth() + 1)
					: (date.getMonth() + 1).toString()

			try {
				await axios.post('http://localhost:3000/flowchart', {
					Name: name.value,
					Data: arrData,
					CreationDate: `${date.getDate()} / ${month} / ${date.getFullYear()}`,
				})

				alert('flowchart saved successfully')
				close()
			} catch (error) {
				alert('an error ocurred while saving')
			}
		}

		return {
			name,
			showSaveModal,
			save,
			close,
		}
	},
}
</script>

<style scoped>
.container {
	align-items: flex-start;
	background-color: hsla(0, 0%, 20%, 0.5);
	display: flex;
	height: 100%;
	justify-content: center;
	position: fixed;
	width: 100%;
	z-index: 1;
}

.content {
	background-color: white;
	border-radius: 5px;
	display: grid;
	grid-template: 'tittle close' 1fr 'form form' 125px / 1fr auto;
	justify-items: center;
	align-items: center;
	width: 35%;
}

.tittle {
	font-size: 1.5rem;
	font-weight: bold;
	grid-area: tittle;
	justify-self: flex-start;
	margin: 0 25px;
}

.close {
	align-self: flex-start;
	background-color: transparent;
	border: 0;
	color: hsl(0, 100%, 50%);
	font-size: 1.5rem;
	grid-area: close;
	margin: 15px 5px;
	cursor: pointer;
}

.close:hover {
	color: hsl(0, 100%, 35%);
}

.form {
	align-self: flex-start;
	display: flex;
	flex-flow: column nowrap;
	grid-area: form;
}

.form-name {
	align-items: center;
	display: flex;
}

.form-name > label {
	font-size: 1.25rem;
	margin: 0 1.15em;
}

.form-name > input {
	border-radius: 0px;
	border: 2.5px solid lightgray;
	max-width: 20em;
}

.save {
	align-self: flex-end;
	background-color: hsl(120, 36%, 52%);
	border-radius: 20px;
	border: 0;
	color: white;
	cursor: pointer;
	font-size: 1.25rem;
	margin: 1em 0;
	padding: 0.5em 2em;
}

.save:hover {
	background-color: hsl(120, 36%, 40%);
}
</style>
