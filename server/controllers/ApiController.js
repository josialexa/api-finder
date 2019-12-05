let apis = require('../../apis.json').entries;
let idTracker = apis.reduce((t, v) => {
    t < +v.id ? +v.id : t;
}, 0) + 1;

module.exports = {
    create: (req, res) => {
        const {link, name, description, category, auth, https, cors} = req.body;

        api = {
            id: idTracker,
            link,
            name,
            description,
            category,
            auth,
            https,
            cors
        }

        idTracker++;
        apis.push(api);
        res.status(200).send(apis);
    },

    read: (req, res) => {
        let index = apis.findIndex(v => v.id == req.params.id);

        if(req.params.id && index != -1) {
            res.status(200).send(apis[index]);
        } else if(req.params.id && index == -1) {
            res.status(500).send('API not found');
        } else {
            res.status(200).send(apis);
        }
    }, 

    update: (req, res) => {
        let index = apis.findIndex(v => v.id == req.params.id);

        if(index != -1) {
            const {link, name, description, category, auth, https, cors} = req.body;
            let api = {};

            if(link) api.link = link;
            if(name) api.name = name;
            if(description) api.description = description;
            if(category) api.catgegory = category;
            if(auth) api.auth = auth;
            if(https) api.https = https;
            if(cors) api.cors = cors;

            apis[index] = api;

            res.status(200).send(apis)
        } else {
            res.status(500).send('API not found');
        }
    },

    delete: (req, res) => {
        let index = apis.findIndex(v => v.id == req.params.id);

        if(index != -1) {
            apis.splice(index, 1);
            res.status(200).send(apis);
        } else {
            res.status(500).send('API not found')
        }
    }
}