const app = require("./app/bootstrap");
const router = require("./app/route");

app.use("/", router);

app.listen(3000);