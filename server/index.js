const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares (conversion entre server)
app.use(morgan('dev')); //te informa de las peticiones en consola
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Routes
app.use('/api/employees',require('./routes/employee.routes'));

//Starting the server
app.listen(app.get('port'),() => {
    console.log('Server on port ', app.get('port'));
});
