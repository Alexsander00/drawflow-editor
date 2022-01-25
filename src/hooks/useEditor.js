import { computed, watch } from 'vue'
import { useStore } from 'vuex'

export default function () {
	const store = useStore()
	const editor = computed(() => store.state.editor)

	const addNode = (name, inputs, outputs, posx, posy, data, component) =>
		editor.value.addNode(
			name,
			inputs,
			outputs,
			posx,
			posy,
			'',
			data,
			component,
			'vue',
		)

	const registerNode = (name, component) =>
		watch(editor, () => editor.value.registerNode(name, component))

	const getNodeFromID = id => editor.value.getNodeFromId(id)

	const clearNodes = () => editor.value.clear()

	const importData = nodes => {
		const data = {}
		for (let index = 1; index <= nodes.length; index++) {
			data[index] = nodes[index - 1]
		}

		editor.value.import({
			drawflow: {
				Home: {
					data,
				},
			},
		})
	}

	const exportData = () => editor.value.export().drawflow.Home.data

	return {
		editor,
		addNode,
		registerNode,
		getNodeFromID,
		clearNodes,
		importData,
		exportData,
	}
}
