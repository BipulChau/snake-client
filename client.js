const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });
  const name = 'Bipul';

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //stdin.setEncoding('utf8');
  conn.write(`${name} has connected!!!`);
  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
})

  return conn;
};

module.exports = {connect};