const filename = '../data/posts.json';
let posts = require('../data/messages.json');
const { getJSONData, setJSONData, getNewMsgId, newDate } = require('../helpers');

const createNewMessage = async (senderId, receiverId, msgContent) => {
  return new Promise(async (resolve, reject) => {
    try {
      let db = await getJSONData();
      const id = await getNewMsgId(senderId);
      console.log('🚀 ~ file: messages.model.js ~ line 10 ~ returnnewPromise ~ id', id);
      const newMsg = {
        id,
        body: msgContent,
        createdAt: newDate(),
        updatedAt: newDate(),
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

const getAllMessages = (userId) => {
  return new Promise(async (reslove, reject) => {
    try {
      const db = await getJSONData();
      const msgs = db.users[userId].messages;
      reslove(msgs);
    } catch (err) {
      reject(err);
    }
  });
};

const deleteMessage = (msgId) => {
  return new Promise(async (resolve, reject) => {
    const [senderId, receiverId] = msgId.split(/-|;/);

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
