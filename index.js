const app = require("./app")();

app.get("/home", (request, response) => {
  response.end("Aleeeeluyah");
});

const port = 7777;
app.listen(port, () => console.log(`Server started at port ${port}`));