const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  // as html or plain text
  res.setHeader('Content-Type', 'text/html');
  // enter html to be displayed
  // repl - read eval print loop (interactive shell of nodejs)
  // _ stores the last evaluated variable
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Flexbox</title>
      <style>
          .container{
              height: 544px;
              width: 100%;
              border: 2px solid black;
              display: flex;
              /* flex properties for the container */
  
  
              /* flex-direction: row; (default)
              flex-direction: row-reverse;
              flex-direction: column;
              flex-direction: column-reverse; */
              flex-direction: row;
              
              /* flex-wrap: wrap; for responsive design*/
              /* flex-wrap: wrap; */
  
              /* flex-flow: flex-direction flex-wrap; shorthand*/
              /* flex-flow: column wrap; */
  
              /* justify-content: center; along horizontal direction iff flex-direction is row ,else reverse
              justify-content: space-between;
              justify-content: space-evenly;
              justify-content: space-around; (equal space to the left and right of an element)*/
              /* justify-content: space-around; */
  
              /* along vertical direction */
              /* align-items: center;
              align-items: flex-end;
              align-items: flex-start; */
              /* align-items: stretch; vertically even spaces */
          }
          .item{
              height: 111px;
              width: 200px;
              background-color: rgb(255, 71, 71);
              border: 2px solid green;
              margin: 3px;
              padding: 2px 2px;
          }
          #item1{
              /* flex properties for a flex item */
              /* higher the order later it shows in the container */
              order:2;
              /* flex-grow: 3;
              flex-shrink: 3; */
              flex-basis: 160px;
              /* when flex-direction is set to column then flex-basis controls the width of the element*/
              /* when flex-direction is set to row then flex-basis controls the height of the element*/
          }
          #item2{
              /* flex-grow: 2;
              flex-grow: 2; */
              /* flex: 2 2 240px; */
          }
          #item3{
              order:20;
              align-self: flex-end;
              align-self: flex-start;
              align-self: center;
          }
      </style>
  </head>
  <body>
      <h1>This is Flexbox tutorial</h1>
      <div class="container">
          <div class="item" id="item1">This is first Box</div>
          <div class="item" id="item2">This is second Box</div>
          <div class="item" id="item3">This is third Box</div>
      </div>
  </body>
  </html>`);
});


server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});