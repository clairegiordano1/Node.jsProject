const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js');

console.log(pwd);
//Output a prompt

process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
	const cmdOne = data.toString().trim(); //remove the newline
	let cmdTwo = cmdOne.split(" ");

	let cmd = cmdTwo[0];
	let fileName = cmdTwo[1];

	if (pwd(cmd)) pwd(cmd)
	else if (cmd === 'ls')  ls()
	else if(cmd === "cat") cat(fileName);
	else process.stdout.write("You typed: " + cmd);

	process.stdout.write("\nprompt > ");
});



