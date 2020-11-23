let colors = ['red','yellow','white','black','blue'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
colors[colors.length-1] = ['ultraviolet'];
let abc = ['fourthColor'];
let asd = colors.slice(0,4);
let azx = colors.slice(4,5);
let newColors = abc.concat(asd,azx);
console.log(newColors);
newColors.push('green');
newColors.unshift('orange');
console.log(newColors.length-1);
newColors.splice(7,1);
console.log(newColors.length);
for (let i=0; i <= (newColors.length-1); i++){
    console.log(newColors[i]+' vi tri: '+(i+1));
}
let lastColor = (newColors.length-1);
console.log(newColors[lastColor]);
