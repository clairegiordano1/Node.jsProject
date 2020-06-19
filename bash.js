const pwd = require('./pwd.js');

console.log(pwd);
//Output a prompt

process.stdout.write('prompt >');

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim(); //remove the newline
	
	if (pwd(cmd)) pwd(cmd)
	else process.stdout.write("You typed: " + cmd);

	process.stdout.write("\nprompt > ");
});
