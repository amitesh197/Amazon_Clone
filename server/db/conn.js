const mongoose = require('mongoose');

const DB = process.env.DATABASE;

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(DB, connectionParams)
   .then( () => {
      console.log('Database Connected');
   })
   .catch((error) => {
    console.log('Error' + error.message);
   });