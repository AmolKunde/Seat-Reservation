const mongoose = require('mongoose');
// Establish Database Connection
mongoose.connect(
  `mongodb+srv://amolkunde:${process.env.MONGODB_PASSWORD}@cluster0.bxt5h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => {
    console.log('Database connected');
  });