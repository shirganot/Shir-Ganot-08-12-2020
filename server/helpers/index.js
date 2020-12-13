require('dotenv').config();
const fs = require('fs').promises;
// const { v4: uuidv4 } = require('uuid');

const returnIfExistInArray = (array, id) => {
  return new Promise((resolve, reject) => {
    const exist = array.find((el) => el.id == id);
    if (!exist) {
      reject({
        message: 'ID is not good',
        status: 404,
      });
    }
    resolve(exist);
  });
};

// const createUniqueUserId = (obj) => {
//   let id = uuidv4();
//   while (obj.hasOwnProperty(id)) {
//     id = uuidv4();
//   }

//   return id;
// };

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

const getNewMsgId = async (senderId) => {
  let db = await getJSONData();
  const { sent } = db.users[senderId].messages;
  if (sent.length > 0) return `${senderId};${sent[sent.length - 1].id + 1}`;
  return `${senderId};0`;
};

// const addToJSONFile = (fileName, addedData) => {
//   fs.readFile(`../data/${fileName}`, (err, data) => {
//     if (err) return console.error(err);

//     data = JSON.parse(data.toString());
//     const newData = { ...data, addedData };

//     fs.writeFile('test.json', JSON.stringify(newData), (err, result) => {
//       if (err) return console.error(err);
//       else {
//         console.log(result);
//         console.log('Success');
//       }
//     });
//   });
// };

module.exports = {
  getJSONData,
  setJSONData,
  newDate,
  getNewMsgId,
  // handleDeleteMsg,
};
