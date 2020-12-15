require('dotenv').config();

export default function customFetch(originUrl, payload = null) {
  const url = `${process.env.REACT_APP_FETCH_URL}${originUrl}`;
  const fPromise = payload ? fetch(url, payload) : fetch(url);

  return new Promise((resolve, reject) => {
    fPromise
      .then(toJSON)
      .then(({ ok, data }) => {
        if (!ok) throw new Error(data.message);
        return data;
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

function toJSON(res) {
  return new Promise((resolve) => {
    res.json().then((data) => {
      resolve({
        data,
        ok: res.ok,
      });
    });
  });
}
