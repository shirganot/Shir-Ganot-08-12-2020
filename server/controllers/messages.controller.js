const express = require('express');
const router = express.Router();
const MODEL = require('../models/messages.model');

router.get('/', async (req, res) => {
  const { userId } = req.query;

  try {
    const items = await MODEL.getAllMessages(userId);
    res.json(items);
  } catch ({ status, message }) {
    if (status) res.status(status).json({ message });
    else res.status(500).json({ message });
  }
});

router.delete('/:msgId', async (req, res) => {
  const { msgId } = req.params;

  try {
    await MODEL.deleteMessage(msgId);
    res.json({ message: `The post #${msgId} has been deleted` });
  } catch ({ status, message }) {
    if (status) res.status(status).json({ message });
    else res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  const { senderId, receiverId, msg } = req.body;

  try {
    const newItem = await MODEL.createNewMessage(senderId, receiverId, msg);
    res.status(201).json(newItem);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
