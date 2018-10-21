
const stdin = process.openStdin();
stdin.addListener('data', (d) => {
  console.log(d.toString());
  if (d > 2) {
    console.log('greater');
  }
});
