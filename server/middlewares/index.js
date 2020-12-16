const { VALID_MSG_ID, EMAIL_VALIDATION } = require('../constants');

const errorHandler = (error, req, res, next) => {
  const { message } = error;

  return res.status(500).json({ message });
};

const checkValidMessageFields = (req, res, next) => {
  const { senderEmail, receiverEmail, subject, body } = req.body;

  const fieldsExist = senderEmail && receiverEmail && subject && body;
  const validEmails = EMAIL_VALIDATION.test(senderEmail) && EMAIL_VALIDATION.test(receiverEmail);

  if (fieldsExist && validEmails) {
    return next();
  }
  res.status(400).json({ message: 'fields are not good' });
};

const checkMsgId = (req, res, next) => {
  const { msgId } = req.params;
  if (VALID_MSG_ID.test(msgId)) return next();
  res.status(500).json({ message: 'The msgId is not valid' });
};

module.exports = {
  checkValidMessageFields,
  errorHandler,
  checkMsgId,
};
