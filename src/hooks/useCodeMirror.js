import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'

export default function () {
	const store = useStore()
	const codeMirror = computed(() => store.state.codeMirror)
	const nodes = computed(() => store.state.nodes)
	const editor = computed(() => store.state.editor)

	const content = ref('Hello world!')
	const currentTheme = ref('ayu-dark')
	const currentLang = ref('python')

	const updateCode = () => {
		const code = nodes.value.generateCode(currentLang.value)
		codeMirror.value.doc.setValue(code)
	}

	const changeTheme = () =>
		codeMirror.value.setOption('theme', currentTheme.value)

	const changeLang = () => {
		codeMirror.value.setOption('mode', currentLang.value)
		updateCode()
	}

	const clearContent = () => {
		codeMirror.value.doc.setValue('Hello world!')
		nodes.value.clear()
	}

	const setupNodesListeners = () =>
		watch(editor, () => {
			editor.value.on('nodeCreated', id => {
				const createdNode = editor.value.getNodeFromId(id)

				nodes.value.addNode(createdNode)
				updateCode()
			})

			editor.value.on('nodeRemoved', id => {
				nodes.value.removeNode(parseInt(id))
				updateCode()
			})

			editor.value.on('nodeDataChanged', id => {
				const updatedNode = editor.value.getNodeFromId(id)

				nodes.value.updateNodeData(updatedNode)
				updateCode()
			})

			editor.value.on(
				'connectionCreated',
				({ output_id, input_id, output_class }) => {
					nodes.value.addEdge(parseInt(output_id), parseInt(input_id), output_class)
					updateCode()
				},
			)

			editor.value.on('connectionRemoved', ({ output_id, input_id }) => {
				nodes.value.removeEdge(parseInt(output_id), parseInt(input_id))
				updateCode()
			})
		})

	return {
		codeMirror,
		content,
		currentTheme,
		currentLang,
		clearContent,
		changeTheme,
		changeLang,
		setupNodesListeners,
	}
}
