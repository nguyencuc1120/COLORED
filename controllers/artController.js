const { Art } = require('../models')

const findArts = async (req, res) => {
    try{
        const arts = await Art.find()
        if(!arts) throw Error ('Art not found')
        res.status(200).json(arts)
    } catch (e) {
        console.log(e)
        res.status(500).send('Art not found')
    }
}

const findArtById = async (req, res) => {
    try {
        const { id } = req.params
        const art = await Art.findById(id)
        if(!art) throw Error ('Art not found')
        res.status(200).json(art)
    } catch (e) {
        console.log(e)
        res.status(500).send('Art not found')
    }
}

const findArtByName = async (req, res) => {
    try {
        const art = await Art.find({art: req.params.name})
        if(!art) throw Error ('Art not found')
        res.status(200).json(art)
    } catch (e) {
        console.log(e)
        res.status(500).send
    }
}

const createArt = async (req, res) => {
    console.log(req.query)

    try {
        const art = await new Art(req.query)
        await art.save()
        if(!art) throw Error('Art not created')
        return res.status(201).json(art)
    } catch (e) {
        console.log(e)
        res.status(500).send('Art not created')
    }
}

const updateArt = async (req, res) => {
    try {
        const art = await Art.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!art) throw Error('Brand not updated')
        res.status(201).json(brand)
    } catch (e) {
        console.log(e)
        res.status(500).send('Art not updated')
    }
}

const deleteArt = async (req, res) => {
    try {
        const { id } = req.params
        const art = await Art.findByIdAndDelete(id)
        if(!art) throw Error('Art not deleted')
        res.status(200).json(art)
    } catch (e) {
        console.log(e)
        res.status(500).send('Art not deleted')
    }
}

module.exports = {
    findArts,
    findArtById,
    findArtByName,
    createArt,
    updateArt,
    deleteArt
}