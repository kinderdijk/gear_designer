import express from 'express';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.static('dist/lib'));
app.use(express.static('bootstrap/css'));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function(err) {
    if(err) {
        console.log(err);
    }
})
