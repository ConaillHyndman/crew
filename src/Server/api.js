// import axios from 'axios';

// const apiUrl = '/api/data';

// export const getData = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//   }
// };

// app.get('/api/data', async (req, res) => {
//   const db = await dbPromise;
//   const data = await db.collection('listingsAndReviews').find().toArray();
//   res.json(data);
// });


//////

const express = require('express');
const cors = require('cors');
const connectToDb = require('./connect-to-db');

const app = express();
app.use(cors());

const dbPromise = connectToDb();

app.get('/api/data', async (req, res) => {
  const db = await dbPromise;
  const data = await db.collection('listingsAndReviews').find().toArray();
  res.json(data);
});

app.listen(4800, () => {
  console.log('Server listening on port 4800');
});

module.exports = app;