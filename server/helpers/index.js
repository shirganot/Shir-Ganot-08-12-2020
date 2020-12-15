require('dotenv').config();
const fs = require('fs').promises;

const setJSONData = async (newData) => {
  try {
    await fs.writeFile(process.env.DATA_PATH, JSON.stringify(newData));
  } catch (err) {
    throw new Error(err);
  }
};

const getJSONData = async () => {
  try {
    const data = await fs.readFile(process.env.DATA_PATH);
    return JSON.parse(data.toString());
  } catch (err) {
    throw new Error(err);
  }
};

const newDate = () => new Date().toString();

const getNewMsgId = async (senderId, receiverId) => {
  let db = await getJSONData();
  const { sent } = db.users[senderId].messages;
  return `${senderId};${receiverId}-${sent.length}`;
};

const getEmailOrUserId = (db, identifier) => {
  const desiredValue = db.usersEmails[identifier];
  if (!desiredValue) throw new Error('User does not exist');
  return desiredValue;
};

module.exports = {
  getJSONData,
  setJSONData,
  newDate,
  getNewMsgId,
  getEmailOrUserId,
};
