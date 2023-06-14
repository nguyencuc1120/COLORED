const { Nail } = require('../models')

const findNails = async (req, res) => {
      try{
          const nail = await Nail.find()
          if(!nail) throw Error ('Nail not found')
          res.status(200).json(nail)
      } catch (e) {
          console.log(e)
          res.status(500).send('Nail not found')
      }
}

const findNailById = async (req, res) => {
    try {
        const { id } = req.params
        const nail = await Nail.findById(id)
        if(!Nail) throw Error ('Nail not found')
        res.status(200).json(nail)
    } catch (e) {
        console.log(e)
        res.status(500).send('Nail not found')
    }
}

const findNailByArtId = async (req, res) => {
    try {
        const { id } = req.params
        const nail = await Nail.find({art_id: id})
        if(!nail) throw Error ('Nail not found')
        res.status(200).json(nail)
    } catch (e) {
        console.log(e)
        res.status(500).send('Nail not found')
    }
}


const createNail = async (req, res) => {
    try {
        const nail = await new Nail(req.query)
        await nail.save()
        if(!nail) throw Error('Nail not created')
        return res.status(201).json(nail)
    } catch (e) {
        console.log(e)
        res.status(500).send("Nail not created")
    }
}

const updateNail = async (req, res) => {
    try {
        const nail = await Nail.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!nail) throw Error('Nail not updated')
        res.status(201).json(nail)
    } catch (e) {
        console.log(e)
        res.status(500).send('Nail not updated')
    }
}

const deleteNail = async (req, res) => {
    try { 
        const { id } = req.params
        const nail = await Nail.findByIdAndDelete(id)
        if(!nail) throw Error('Nail not deleted')
        res.status(200).json(nail)
    } catch (e) {
        console.log(e)
        res.status(500).send('Nail not deleted')
    }
}

module.exports = {
    findNails,
    findNailById,
    findNailByArtId,
    createNail,
    updateNail,
    deleteNail
}