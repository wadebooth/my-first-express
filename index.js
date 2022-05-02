import express from "express";
import { hello, helloPerson, greetNewPerson } from "./src/hello.js";
import { welcomeHome } from "./src/welcome.js";

const PORT = 3030;

const app = express();
app.use(express.json());

// routes (or list of allowed requests)
app.get("/hello", hello);
app.post("/hello", greetNewPerson);

app.get("/", (request, response) => {
  response.send("These are not the droids you're looking for.");
});
// below :person is a param that gets attached to the response

app.get("/hello/:person", helloPerson);

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
