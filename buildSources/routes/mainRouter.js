import express from 'express';
import path from 'path';
const mainRouter = express.Router();

mainRouter.route('/')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, "../../src/main.html"));
    });

mainRouter.route('/test')
    .get(function(request, response) {
        response.status(400).json({error: "Bad Request... Yeah"});
    });

module.exports = mainRouter;
