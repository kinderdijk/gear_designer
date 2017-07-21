import express from 'express';
import path from 'path';
const adminRouter = express.Router();

adminRouter.route('/')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname, "../../src/index.html"));
    });

adminRouter.route('/test')
    .get(function(request, response) {
        response.status(400).json({error: "Bad Request... Yeah"});
    });

module.exports = adminRouter;
