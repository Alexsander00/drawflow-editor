<template>
	<div>
		<div class="options">
			<label for="theme">Theme</label>
			<select name="theme" v-model="selectedTheme" @change="onThemeChange">
				<option value="ayu-dark">ayu-dark</option>
				<option value="3024-night">3024-night</option>
				<option value="ambiance">ambiance</option>
				<option value="colorforth">colorforth</option>
			</select>

			<label for="theme">Language</label>
			<select name="language" v-model="selectedLang" @change="onLangChange">
				<option value="python">python</option>
				<option value="javascript">javascript</option>
			</select>
		</div>
		<textarea id="editor" v-model="content" />
	</div>
</template>

<script>
import { onMounted, ref, shallowRef } from '@vue/runtime-core'

import * as CodeMirror from 'codemirror'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'

import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/colorforth.css'

export default {
	name: 'CodeMirror',
	setup() {
		const editor = shallowRef({})
		const content = ref('Hello world!')

		const selectedTheme = ref('ayu-dark')
		const selectedLang = ref('python')

		const onThemeChange = () => {
			editor.value.setOption('theme', selectedTheme.value)
		}

		const onLangChange = () => {
			editor.value.setOption('mode', selectedLang.value)
		}

		onMounted(() => {
			editor.value = CodeMirror.fromTextArea(document.getElementById('editor'), {
				mode: 'python',
				theme: 'ayu-dark',
				lineNumber: true,
				smartIndent: true,
				matchBrackets: true,
			})
		})

		return {
			selectedTheme,
			selectedLang,
			content,
			onThemeChange,
			onLangChange,
		}
	},
}
</script>

<style scoped>
#editor {
	grid-area: codemirror;
}

.options {
	background-color: whitesmoke;
	display: flex;
	align-items: center;
	padding: 10px;
}

label {
	margin: 0 10px;
}
</style>
