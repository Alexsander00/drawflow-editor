<template>
	<div>
		<div class="options">
			<label for="theme">Theme</label>
			<select name="theme" v-model="currentTheme" @change="changeTheme">
				<option value="ayu-dark">ayu-dark</option>
				<option value="3024-night">3024-night</option>
				<option value="ambiance">ambiance</option>
				<option value="colorforth">colorforth</option>
			</select>

			<label for="theme">Language</label>
			<select name="language" v-model="currentLang" @change="changeLang">
				<option value="python">python</option>
				<option value="javascript">javascript</option>
			</select>
		</div>
		<textarea id="editor" />
	</div>
</template>

<script>
import { onMounted, shallowRef } from '@vue/runtime-core'

import { useStore } from 'vuex'
import * as CodeMirror from 'codemirror'

import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/python/python'

import 'codemirror/lib/codemirror.css'

import 'codemirror/theme/ayu-dark.css'
import 'codemirror/theme/3024-night.css'
import 'codemirror/theme/ambiance.css'
import 'codemirror/theme/colorforth.css'

import useCodeMirror from '../hooks/useCodeMirror'

export default {
	name: 'CodeMirror',
	setup() {
		const store = useStore()

		const cmEditor = shallowRef({})
		const {
			content,
			currentTheme,
			currentLang,
			changeTheme,
			changeLang,
			setupNodesListeners,
		} = useCodeMirror()

		onMounted(() => {
			cmEditor.value = CodeMirror.fromTextArea(document.getElementById('editor'), {
				mode: 'python',
				theme: 'ayu-dark',
				lineNumber: true,
				smartIndent: true,
				matchBrackets: true,
			})

			store.commit('setCodeMirror', cmEditor)
			setupNodesListeners()
		})

		return {
			content,
			currentTheme,
			currentLang,
			changeTheme,
			changeLang,
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
