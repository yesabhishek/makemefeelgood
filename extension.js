const vscode = require('vscode');
const axios = require('axios');


function find_random(){
	let rand = Math.random() * 1500;
	rand = Math.floor(rand);
	return rand
}

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {
	const res = await axios.get("https://type.fit/api/quotes")

	let disposable = vscode.commands.registerCommand('make-me-feel-good.get_feel_good_message', function () {
		let index = find_random()
		let message = res.data[index].text
		vscode.window.showInformationMessage(message);
	});
	context.subscriptions.push(disposable);
}
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
