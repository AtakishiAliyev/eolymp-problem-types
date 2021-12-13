let arr = [75, 133, 9002, 7, 157]
let link = "";

for(let item of arr) {
    link = `[${item}](https://www.eolymp.com/az/problems/${item})`;
    console.log(link);
}