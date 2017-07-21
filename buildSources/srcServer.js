import express from 'express';

import adminRouter from './routes/adminRouter.js';

const app = express();
const port = 3000;

// Static files
app.use(express.static('dist/lib'));
app.use(express.static('bootstrap/css'));
app.use(express.static('bootstrap/css/fonts'));

// Routes
app.use('/admin', adminRouter);

// Listeners
app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }
})
