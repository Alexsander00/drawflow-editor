export function generateCodeLine(node, lang) {
	switch (lang) {
		case 'python': {
			return getPythonLine(node)
		}

		case 'javascript': {
			return getJavaScriptLine(node)
		}

		default:
			break
	}
}

function getPythonLine(node) {
	const { name, data } = node

	switch (name) {
		case 'Read': {
			if (data.type === 'string')
				return `${data.value} = input("enter value for ${data.value}")`

			return `${data.value} = int(input("enter value for ${data.value}"))`
		}

		case 'Assign':
			return `${data.name} = ${data.value}`
		case 'IfElse':
			return `if (${data.value}):`
		case 'For':
			return `for i in range(${data.start}, ${data.end}):`
		case 'EndFor':
			return ''
		case 'While':
			return `while(${data.value}):`
		case 'Print':
			return `print(${data.value})`
		default:
			break
	}
}

function getJavaScriptLine(node) {
	const { name, data } = node

	switch (name) {
		case 'Read': {
			if (data.type === 'string')
				return `const ${data.value} = prompt("enter value for ${data.value}")`

			return `const ${data.value} = parseInt(prompt("enter value for ${data.value}"))`
		}

		case 'Assign':
			return `let ${data.name} = ${data.value}`
		case 'IfElse':
			return `if (${data.value}) {`
		case 'For':
			return `for (var i = ${data.start}; i < ${data.end}; i++) {`
		case 'EndFor':
			return '}'
		case 'While':
			return `while(${data.value}) {`
		case 'Print':
			return `alert(${data.value})`
		default:
			break
	}
}
