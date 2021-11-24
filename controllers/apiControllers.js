const Api = require('../models/api');

const api_getMany = (req, res) => {
    //res.send({ type: 'GET MANY' });
    //res.send('OK');
    //res.json({ status: 200, success: 'YES' }, 200);

    Api.find()
        .sort({ createdAt: -1 })
        .then(result => {
            if (result.length > 0) res.send(result);
            res.send('Data is empty')
        })
        .catch(err => res.status(404).send(err.message));
}

const api_getSingle = (req, res) => {
    //res.send({ type: 'GET SINGLE' });

    const id = req.params.id;
    Api.findById(id)
        .then(result => res.send(result))
        .catch(err => {
            res.send({ errorFound: true, errorReason: 'Such data doesn\'t exist' }, 404);
            console.log(err);
        })
}

const api_post = (req, res) => {
    //res.send({ type: 'POST' });

    //const api = new Api(req.body)
    //api.save()
    //   .then(result => res.send(req.body))
    //   .catch(err => console.log(err));

    Api.create(req.body)
        .then(result => res.send(req))
        .catch(err => res.status(403).send(err.message));
}

const api_delete = (req, res) => {
    //res.send({ type: 'DELETE' })

    const id = req.params.id;
    Api.findByIdAndDelete(id)
        .then(result => res.json({ message: "Deleted Successfully" }))
        .catch(err => res.status(404).send(err.message));
}

const api_put = (req, res) => {
    //res.send({ type: 'PUT' })

    const id = req.params.id;
    Api.findByIdAndUpdate(id, req.body)
        .then(() => Api.findById(id))
        .then(result => res.send(result))
        .catch(err => res.status(404).send(err.message));
}

module.exports = {
    api_getMany,
    api_getSingle,
    api_post,
    api_delete,
    api_put,
}