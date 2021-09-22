const net = require("net");
const setupInput = require('./input.js')
const {IP, PORT} = require('./constants');
//const stdin = process.stdin;


// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  //const name = 'Bch';

  // interpret incoming data as text
  conn.setEncoding("utf8");
  //stdin.setEncoding('utf8');

  //conn.write(`${name} has connected!!!`);

  conn.on('connect', () => {
    console.log("Successfully connected to game server!")
    conn.write("Name: OgY")
    
    // setTimeout(() => {
    //   conn.write("Move: up")
    // }, 5000);

    // setInterval(()=>{
    //   conn.write("Move: up")
    // }, 2000)
})

//   conn.on('connect', () => {
//     stdin.on('data', () => {
//       conn.write(`Move: up`)
//     })
// })

// stdin.on('data', () => {
//   conn.write(`Name: bch`)
// })

// const handleUserInput = function (key) { // taken to input.js
//   if (key === '\u0003') {
//     process.exit();
//   }
  
// };

setupInput;
// const setupInput = function () {  taken to input.js
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// stdin.on('data', (input) => {
//    conn.write(`${input}`)
//  })

  conn.on('data', (data) => {
    console.log("DATA CAME IN!!!!!");
    console.log(data);
})



  return conn;
};

module.exports = {connect};