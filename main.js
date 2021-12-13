let arr = [3254, 8949, 8950, 8951, 8952]
let link = "";

for(let item of arr) {
    link = `[${item}](https://www.eolymp.com/az/problems/${item})`;
    console.log(link);
}