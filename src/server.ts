import createApp from "./app";

const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
  console.log("aplicação is running");
});
