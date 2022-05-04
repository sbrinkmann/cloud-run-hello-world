const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hallo Welt, ich bin da! Test 4`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});
