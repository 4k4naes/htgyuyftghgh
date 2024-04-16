const express = require('express');
const mongoose = require('mongoose');
const path = require('path');


mongoose.connect('todo: dac connecta do bazy', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/users/ranks', async (req, res) => {
  try {
    const accounts = await League.find();
    res.json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/users/get/:id', async (req, res) => {
    try {
      const account = await Accounts.findOne({ userid: req.params.id });
      if (!account) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ userid: req.params.id, login: account.login, username: account.username, tag: account.tag });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'index.html'));
});

app.listen(3000, () => {
  console.log(`http://localhost:3000`);
});
