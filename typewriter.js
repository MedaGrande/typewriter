const sentence = "hello there from lighthouse labs\n";
let timer = 100;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, timer);
  timer += 100;
}
