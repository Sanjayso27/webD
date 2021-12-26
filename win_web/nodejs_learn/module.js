const fs=require("fs");
let text=fs.readFileSync("../read.txt","utf-8");

// should use toString()
console.log(text.toString());

fs.writeFileSync("../rohan.txt",text);
