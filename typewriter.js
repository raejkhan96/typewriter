const sentence = `hello there from lighthouse labs`;

let i = 0;

const newLine = function() {
  console.log('')
}

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i);
  i += 50;  
}

setTimeout(newLine, i);

