const express = require('express');
const routes = require('./routes/predictions/route');
const authRoutes = require('./routes/authRoutes/authRoutes');

const app = express();
app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRoutes);
app.use('/pred', routes);


// Serve file HTML statis
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server started on port 3000');
});