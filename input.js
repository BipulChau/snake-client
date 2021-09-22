let connection;

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  };

  if (key === 'w'){
    //console.log("Move: up")
    connection.write("Move: up");
  }; 
  
  if (key === 'a'){
    //console.log("Move: up")
    connection.write("Move: left");
  }; 

  if (key === 's'){
    //console.log("Move: up")
    connection.write("Move: down");
  }; 

  if (key === 'd'){
    //console.log("Move: up")
    connection.write("Move: right");
  }; 

  if (key === 'z'){
  connection.write("Say: I am Oggyyyy")
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};



module.exports = {
  handleUserInput,
  setupInput
}