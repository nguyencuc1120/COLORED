const { Ceramic,Art } = require('../models')

const findCeramics = async (req, res) => {
      try{
          const ceramic = await Ceramic.find()
          if(!ceramic) throw Error ('Ceramic not found')
          res.status(200).json(ceramic)
      } catch (e) {
          console.log(e)
          res.status(500).send('Ceramic not found')
      }
}

const findCeramicById = async (req, res) => {
    try {
        const { id } = req.params
        const ceramic = await ceramic.findById(id)
        if(!ceramic) throw Error ('ceramic not found')
        res.status(200).json(ceramic)
    } catch (e) {
        console.log(e)
        res.status(500).send('Ceramic not found')
    }
}

const findCeramicByArtId = async (req, res) => {
    try {
        const { id } = req.params
        const ceramic = await Ceramic.find({art_id: id})
        if(!ceramic) throw Error ('Ceramic not found')
        res.status(200).json(ceramic)
    } catch (e) {
        console.log(e)
        res.status(500).send('Ceramic not found')
    }
}


const createCeramic = async (req, res) => {
    try {
        const ceramic = await new Ceramic(req.query)
        await ceramic.save()
        if(!ceramic) throw Error('Ceramic not created')
        return res.status(201).json(ceramic)
    } catch (e) {
        console.log(e)
        res.status(500).send("Ceramic not created")
    }
}

const updateCeramic = async (req, res) => {
    try {
        const ceramic = await Ceramic.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!ceramic) throw Error('Ceramic not updated')
        res.status(201).json(ceramic)
    } catch (e) {
        console.log(e)
        res.status(500).send('Ceramic not updated')
    }
}

const deleteCeramic = async (req, res) => {
    try { 
        const { id } = req.params
        const ceramic = await Ceramic.findByIdAndDelete(id)
        if(!ceramic) throw Error('Ceramic not deleted')
        res.status(200).json(ceramic)
    } catch (e) {
        console.log(e)
        res.status(500).send('Ceramic not deleted')
    }
}

module.exports = {
    findCeramics,
    findCeramicById,
    findCeramicByArtId,
    createCeramic,
    updateCeramic,
    deleteCeramic
}