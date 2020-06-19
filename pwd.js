module.exports = function (cmd) {
    if (cmd === "pwd"){
    return process.stdout.write(`${process.cwd()}`);
    
    }
    else {
    return null;
    }
}


//module.exports.evalCommand = evalCommand;