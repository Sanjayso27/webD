console.log('inside mod.js');
function average (arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    return sum/(arr.length);
}
// by default functions are not exported
// you can specify which functions to export using
// in that case you can directly use that function in the exported file
// module.exports = average;

// for exporting multiple things make an object
module.exports={
    avg: average,
    name: 'Sanjay'
};