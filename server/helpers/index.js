require('dotenv').config();
const fs = require('fs').promises;

// const createNewUser = (userId,email) => {
//   fs.readFile(process.env.DATA_PATH, (err, data) => {
//     if (err) return console.error(err);

//     data = JSON.parse(data.toString());

//     if (!data.usersEmails[email]) {
//     data.usersEmails[userId] = email
//       data.users[userId] = {
//         messages: {
//           sent: [],
//           received: [],
//         },
//       };
//     }

//     writeFile(data);
//   });
// };

const setJSONData = async (newData) => {
  try {
    await fs.writeFile(process.env.DATA_PATH, JSON.stringify(newData));
    return true;
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
  if (sent.length > 0) return `${senderId};${receiverId}-${sent[sent.length - 1].id + 1}`;
  return `${senderId};${receiverId}-0`;
};

const getEmailOrUserId = (db, identifier) => {
  return db.usersEmails[identifier];
};

module.exports = {
  getJSONData,
  setJSONData,
  newDate,
  getNewMsgId,
  getEmailOrUserId,
};
