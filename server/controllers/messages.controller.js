const express = require('express');
const router = express.Router();
const MODEL = require('../models/messages.model');
const MW = require('../middlewares');

router.get('/', async (req, res, next) => {
  const { email } = req.query;

  try {
    const items = await MODEL.getAllMessages(email);
    res.json(items);
  } catch (err) {
    next(err);
  }
});

router.delete('/:msgId', MW.checkMsgId, async (req, res, next) => {
  const { msgId } = req.params;

  try {
    await MODEL.deleteMessage(msgId);
    res.json({ message: `The post #${msgId} has been deleted` });
  } catch (err) {
    next(err);
  }
});

router.post('/', MW.checkValidMessageFields, async (req, res, next) => {
  try {
    const newItem = await MODEL.createNewMessage(req.body);
    res.json(newItem);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
