let comments = [];
let count = 1;

module.exports = {
    create: (req, res) => {
        let {text, apiID} = req.body;

        let newComment = {
            text,
            apiID,
            id: count
        }

        comments.push(newComment);
        count++;
        res.status(200).send(comments);
    },

    read: (req, res) => {
        res.status(200).send(comments);
    },

    update: (req, res) => {
        let{text} = req.body;
        let index = comments.findIndex(v => v.id == req.params.id);

        if(index != -1) {
            if(text) comments[index].text = text;

            res.status(200).send(comments);
        } else {
            res.status(500).send('Comment not found');
        }
    },

    delete: (req, res) => {
        let index = comments.findIndex(v => v.id == req.params.id);

        if(index != -1) {
            comments.splice(index, 1);

            res.status(200).send(comments);
        } else {
            res.status(500).send('Comment not found');
        }
    }
};
