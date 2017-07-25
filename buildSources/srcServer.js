import express from 'express';

import adminRouter from './routes/adminRouter.js';
import mainRouter from './routes/mainRouter.js';

const app = express();
const port = 3000;

// Static files
app.use(express.static('dist/lib'));
app.use(express.static('bootstrap/css'));
app.use(express.static('bootstrap/css/fonts'));

app.use(express.static('src/lib'));

// Routes
app.use('/admin', adminRouter);
app.use('/', mainRouter);

// Listeners
app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }
})
