const num = 5;
for ( let i = 1;i <= num;i++ ) {
  let row = "";
  for (let j = 1; j <= num - i; j++) {
    // this is for the spacing to make diamond
    row += " ";
  }
  for (let k = 1; k <= i; k++) {
    row += "* ";
  }
  console.log(row);
}

for (let i = num - 1; i >= 1; i--) {
  let row = "";
  for (let j = 1; j <= num - i; j++) {
    row += " ";
  }
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
