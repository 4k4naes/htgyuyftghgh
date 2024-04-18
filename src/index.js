import database from './database.js';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = 8000;

database.init();

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

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
      return res.status(404).json({ message: 'User not found' });
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

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/card', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'card.html'));
});

app.get('/item', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'item.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));