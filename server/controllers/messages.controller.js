const express = require('express');
const router = express.Router();
const MODEL = require('../models/messages.model');

router.get('/', async (req, res) => {
  const { email } = req.query;

  try {
    const items = await MODEL.getAllMessages(email);
    res.json(items);
  } catch ({ status, message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:msgId', async (req, res) => {
  const { msgId } = req.params;

  try {
    await MODEL.deleteMessage(msgId);
    res.json({ message: `The post #${msgId} has been deleted` });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newItem = await MODEL.createNewMessage(req.body);
    res.json(newItem);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
