let path = require('path');
let Users = require('../controllers/users');
let Lists = require('../controllers/lists');

module.exports = function(app){
    app.get('/sessions', Users.session);
    app.post('/sessions', Users.authenticate);
    app.delete('/sessions', Users.logout);



    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}
