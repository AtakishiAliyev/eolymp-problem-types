let arr = [920, 1312, 4730, 5765, 3255]
let link = "";

for(let item of arr) {
    link = `[${item}](https://www.eolymp.com/az/problems/${item})`;
    console.log(link);
}