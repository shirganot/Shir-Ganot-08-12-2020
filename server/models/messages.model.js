const filename = '../data/posts.json';
const { SPLIT_MSG_ID } = require('../constants');
const { getJSONData, setJSONData, getNewMsgId, newDate, getEmailOrUserId } = require('../helpers');

//message={senderEmail, recevierEmail, body, subject,id,createdAt,updatedAt}
const createNewMessage = async (msgInfo) => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getJSONData();

      const senderId = getEmailOrUserId(db, msgInfo.senderEmail);
      const receiverId = getEmailOrUserId(db, msgInfo.receiverEmail);

      const id = await getNewMsgId(senderId, receiverId);
      const newMsg = {
        id,
        createdAt: newDate(),
        updatedAt: newDate(),
        ...msgInfo,
      };
      db.users[senderId].messages.sent.push(newMsg);
      db.users[receiverId].messages.received.push(newMsg);
      await setJSONData(db);
      resolve(newMsg);
    } catch (err) {
      reject(err);
    }
  });
};

const getAllMessages = (email) => {
  return new Promise(async (reslove, reject) => {
    try {
      const db = await getJSONData();
      const userId = getEmailOrUserId(db, email);
      const msgs = db.users[userId].messages;
      reslove(msgs);
    } catch (err) {
      reject(err);
    }
  });
};

const deleteMessage = (msgId) => {
  return new Promise(async (resolve, reject) => {
    const [senderId, receiverId] = msgId.split(SPLIT_MSG_ID);

    try {
      let db = await getJSONData();
      db.users[senderId].messages.sent = db.users[senderId].messages.sent.filter(
        (msg) => msg.id !== msgId,
      );
      db.users[receiverId].messages.received = db.users[receiverId].messages.received.filter(
        (msg) => msg.id !== msgId,
      );
      await setJSONData(db);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
};

module.exports = {
  createNewMessage,
  getAllMessages,
  deleteMessage,
};
