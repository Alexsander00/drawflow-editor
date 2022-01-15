import { generateCodeLine } from './codeGenerator'

export class Graph {
	constructor() {
		this.nodes = new Map()
		this.addHistory = []
	}

	getNode(nodeID) {
		return this.nodes.get(nodeID)
	}

	hasNode(nodeID) {
		return this.nodes.has(nodeID)
	}

	clear() {
		this.nodes = new Map()
		this.addHistory = []
	}

	addNode({ id, name, data }) {
		this.nodes.set(id, {
			name,
			data,
			inputs: [],
			outputs: [],
			outputPosition: null,
		})

		this.addHistory.push(id)
	}

	updateNodeData({ id, data }) {
		if (!this.hasNode(id)) return

		const node = this.nodes.get(id)

		this.nodes.set(id, {
			...node,
			data,
		})
	}

	addEdge(originID, destinationID, outputNodeName) {
		if (!this.hasNode(originID) || !this.hasNode(destinationID)) return

		const originData = this.nodes.get(originID)
		const destinationData = this.nodes.get(destinationID)

		this.nodes.set(originID, {
			...originData,
			outputs: [...originData.outputs, destinationID],
		})

		this.nodes.set(destinationID, {
			...destinationData,
			outputPosition: outputNodeName,
			inputs: [...destinationData.inputs, originID],
		})
	}

	removeEdge(originID, destinationID) {
		if (!this.hasNode(originID) || !this.hasNode(destinationID)) return

		const originData = this.nodes.get(originID)
		const destinationData = this.nodes.get(destinationID)

		this.nodes.set(originID, {
			...originData,
			outputs: originData.outputs.filter(id => id !== destinationID),
		})

		this.nodes.set(destinationID, {
			...destinationData,
			inputs: destinationData.inputs.filter(id => id !== originID),
		})
	}

	removeNode(nodeID) {
		if (!this.hasNode(nodeID)) return

		const { inputs, outputs } = this.nodes.get(nodeID)

		this.nodes.delete(nodeID)
		this.addHistory = this.addHistory.filter(id => id !== nodeID)

		if (inputs.length > 0) {
			for (let index = 0; index < inputs.length; index++) {
				const updateNode = this.nodes.get(inputs[index])

				this.nodes.set(inputs[index], {
					...updateNode,
					outputs: updateNode.outputs.filter(id => id !== nodeID),
				})
			}
		}

		if (outputs.length > 0) {
			for (let index = 0; index < outputs.length; index++) {
				const updateNode = this.nodes.get(outputs[index])

				this.nodes.set(outputs[index], {
					...updateNode,
					inputs: updateNode.inputs.filter(id => id !== nodeID),
				})
			}
		}
	}

	generateCode(lang) {
		const sortedNodes = this.sortNodes()
		let identation = 0
		let prevNode = null
		let code = ''

		for (let index = 0; index < sortedNodes.length; index++) {
			const node = this.nodes.get(sortedNodes[index])

			if (prevNode === 'IfElse') identation = identation + 1

			if (node.outputPosition === 'output_2') {
				if (identation === 1) {
					code = code + '\nelse\n' + '	' + generateCodeLine(node, lang)
					prevNode = node.name
					continue
				}

				code =
					code +
					'\n' +
					'	'.repeat(identation - 1).concat('else\n') +
					'	'.repeat(identation).concat(generateCodeLine(node, lang))
				prevNode = node.name
				continue
			}

			if (prevNode === node.name || prevNode === 'IfElse' || prevNode === 'For') {
				code =
					code + '\n' + '	'.repeat(identation).concat(generateCodeLine(node, lang))
				prevNode = node.name
				continue
			}

			code =
				code === ''
					? (code = generateCodeLine(node, lang))
					: code +
					  '\n\n' +
					  '	'.repeat(identation).concat(generateCodeLine(node, lang))
			prevNode = node.name
		}

		return code
	}

	sortNodes() {
		const visited = new Set()
		const queue = [this.addHistory[0]]
		const order = []
		let insideIf = false

		while (queue.length > 0) {
			const currentNode = queue.shift()
			const { name, inputs, outputs } = this.nodes.get(currentNode)

			visited.add(currentNode)

			if (currentNode === this.addHistory[0]) order.push(currentNode)

			if (inputs.length > 0) {
				for (const input of inputs) {
					if (visited.has(input)) continue

					queue.push(input)
					visited.add(input)

					const position = order.indexOf(currentNode)
					order.splice(position, 0, input)
				}
			}

			if (outputs.length > 0) {
				for (const output of outputs) {
					if (visited.has(output)) continue

					queue.push(output)
					visited.add(output)

					if (insideIf) {
						const position = order.indexOf(currentNode)
						order.splice(position + 1, 0, output)

						continue
					}

					order.push(output)
				}
			}

			if (name === 'IfElse') insideIf = true
		}

		return order
	}
}
