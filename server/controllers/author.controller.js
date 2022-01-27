const Author = require("../models/author");

////////// req = request | res = response \\\\\\\\\\

/////  CREATE \\\\\

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({ name })
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err));
}

///// RETRIEVE \\\\\

module.exports.findAllAuthors = (req, res) => {
    Author.find()
        .then(allAuthors => res.json(allAuthors))
        .catch(err => res.status(400).json({ message: "Error! no author for you!", error: err }));
}

module.exports.findOneAuthor = (req, res) => {
    Author.findById(req.params.id)
        .then(author => res.json(author))
        .catch(err => res.status(400).json({ message: "Error! no author for you!", error: err }));
}

///// UPDATE \\\\\

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err));
}

///// DELETE \\\\\

module.exports.deleteAuthor = (req, res) => {
    Author.findByIdAndDelete(req.params.id)
        .then(delAuthor => res.json(delAuthor))
        .catch(err => res.status(400).json({ message: "Error! no author for you!", error: err }));
}
