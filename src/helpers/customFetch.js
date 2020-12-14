require('dotenv').config();

export default function customFetch(url, payload = null) {
  url = `${process.env.REACT_APP_FETCH_URL}${url}`;
  console.log('🚀 ~ file: customFetch.js ~ line 7 ~ customFetch ~ url', url);
  const fPromise = payload ? fetch(url, payload) : fetch(url);

  return new Promise((resolve, reject) => {
    fPromise
      .then((res) => res.text())
      .then((data) => (data ? JSON.parse(data) : {}))
      .then((response) => resolve([response, null]))
      .catch((error) => resolve([null, error.message]));
  });
}
