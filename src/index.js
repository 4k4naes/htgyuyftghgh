import database from "./database.js";
import express from "express";
import path from "path";

const port = 8000;

database.init();
const app = express();
app.use(express.json());
app.use(express.static(path.join(new URL(import.meta.url).pathname, "../public/")));

app.get("/users/ranks", async (req, res) => {
  try {
    const accounts = await League.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/users/get/:id", async (req, res) => {
  try {
    const account = await Accounts.findOne({ userid: req.params.id });
    if (!account) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({
      userid: req.params.id,
      login: account.login,
      username: account.username,
      tag: account.tag,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "index.html"));
});

app.get("/card", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "card.html"));
});

app.get("/item", (req, res) => {
  res.sendFile(path.join(__dirname, "pages", "item.html"));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
