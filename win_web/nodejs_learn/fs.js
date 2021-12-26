const fs=require('fs');
// returns string array of file names
// const files= fs.readdirSync('./');
// console.log(files);

// preferred
fs.readdir('./',(err,files)=>{
    if(err)console.log('Error');
    else console.log('Result:' ,files);
});