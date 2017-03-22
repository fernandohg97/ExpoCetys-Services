const clientRouter = require('express').Router();
const Client = require('./client.model');

clientRouter.get('/', (req, res) => {
    let findPromise = Client.find().exec();

    findPromise.then(clients => {
        res.json(clients);
    }).catch(err => {
        res.send(err);
    });

});

clientRouter.get('/:client_id', (req, res) => {
    let findPromise = Client.findById(req.params.client_id).exec();

    findPromise.then(client => {
        res.json(client);
    }).catch(err => {
        res.send(err);
    });

});

clientRouter.post('/', (req, res) => {

    let client = new Client(req.body);
    let savePromise = client.save().exec();

    savePromise.then(() => {
        res.json({message: 'Created'})
    }).catch(err => {
        res.send(err);
    });

});

clientRouter.put('/:client_id', (req, res) => {

    let updatePromise = Client.findByIdAndUpdate(req.params.client_id, {$set: req.body}).exec();

    updatePromise.then(client => {
        res.json({message: "Updated"})
    }).catch(err => {
        res.send(err);
    });

});

clientRouter.delete('/:client_id', (req, res) => {

    let removePromise = Client.findByIdAndRemove(req.params.client_id).exec();

    removePromise.catch(err => {
        res.send(err);
    });
});

module.exports = clientRouter;
