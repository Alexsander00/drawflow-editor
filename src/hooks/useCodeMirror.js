import { computed, ref } from 'vue'
import { useStore } from 'vuex'

export default function () {
	const store = useStore()
	const codeMirror = computed(() => store.state.codeMirror)

	const content = ref('Hello world!')
	const currentTheme = ref('ayu-dark')
	const currentLang = ref('python')

	const changeTheme = () =>
		codeMirror.value.setOption('theme', currentTheme.value)

	const changeLang = () => codeMirror.value.setOption('mode', currentLang.value)

	const clearContent = () => codeMirror.value.doc.setValue('Hello world!')

	const updateContent = newContent => codeMirror.value.doc.setValue(newContent)

	return {
		codeMirror,
		content,
		currentTheme,
		currentLang,
		clearContent,
		updateContent,
		changeTheme,
		changeLang,
	}
}
