const clientRouter = require('express').Router();
const Client = require('./client.model');

clientRouter.get('/', (req, res) => {
    let findPromise = Client.find().exec();

    findPromise.then(clients => {
        res.json(clients);
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.get('/:client_id', (req, res) => {
    let findPromise = Client.findById(req.params.client_id).exec();

    findPromise.then(client => {
        if (client)
            res.json(client);
        else
            res.status(404).json({message: 'Not found'})
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.post('/', (req, res) => {

    let client = new Client(req.body);
    let savePromise = client.save().exec();

    savePromise.then(() => {
        res.json({message: 'Created'})
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.put('/:client_id', (req, res) => {

    let updatePromise = Client.findByIdAndUpdate(req.params.client_id, {$set: req.body}).exec();

    updatePromise.then(client => {
        if (client)
            res.json({message: 'Updated'});
        else
            res.status(404).json({message: 'Not Found'})
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.delete('/:client_id', (req, res) => {

    let removePromise = Client.findByIdAndRemove(req.params.client_id).exec();

    removePromise.catch(err => {
        res.status(500).send(err);
    });
});

module.exports = clientRouter;
