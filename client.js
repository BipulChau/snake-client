const net = require("net");
//const stdin = process.stdin;


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  //const name = 'Bch';

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //stdin.setEncoding('utf8');

  //conn.write(`${name} has connected!!!`);

  conn.on('connect', () => {
    console.log("Successfully connected to game server!")
    conn.write("Name: bch")
    
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 5000);

    setInterval(()=>{
      conn.write("Move: up")
    }, 2000)
})

//   conn.on('connect', () => {
//     stdin.on('data', () => {
//       conn.write(`Move: up`)
//     })
// })

// stdin.on('data', () => {
//   conn.write(`Name: bch`)
// })

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
})



  return conn;
};

module.exports = {connect};