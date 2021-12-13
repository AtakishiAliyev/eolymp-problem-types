let arr = [125, 137, 138, 192, 225, 248, 260, 388, 446, 924, 925, 926, 1286, 1601, 1610, 2059, 2130, 2131, 8316, 1608, 8821, 9638, 9637]
let link = "";

for(let item of arr) {
    link = `[${item}](https://www.eolymp.com/az/problems/${item})`;
    console.log(link);
}