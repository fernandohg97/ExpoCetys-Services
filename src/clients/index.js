const _ = require('underscore');
const clientRouter = require('express').Router();
const Client = require('./client.model');

clientRouter.get('/', (req, res) => {
    let findPromise = Client.find();

    findPromise.then(clients => {
        res.json(clients);
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.get('/:client_id', (req, res) => {
    let findPromise = Client.findById(req.params.client_id);

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
    let savePromise = client.save();

    savePromise.then(() => {
        res.json({message: 'Created'})
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.put('/:client_id', (req, res) => {

    let updatePromise = Client.findById(req.params.client_id);

    updatePromise.then(client => {
        client = new Client(_.extend(req.body, {_id: req.param.client_id}));
        client.isNew = false;
        client.save();
    }).then(client => {
        if (client)
            res.json(client);
        else
            res.status(404).json({message: 'Not Found'})
    }).catch(err => {
        res.status(500).send(err);
    });

});

clientRouter.delete('/:client_id', (req, res) => {

    let removePromise = Client.findByIdAndRemove(req.params.client_id);

    removePromise.catch(err => {
        res.status(500).send(err);
    });
});

module.exports = clientRouter;
