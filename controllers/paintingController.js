const { Painting, Art } = require('../models')

const findPaintings = async (req, res) => {
      try{
          const painting = await Painting.find()
          if(!painting) throw Error ('Painting not found')
          res.status(200).json(painting)
      } catch (e) {
          console.log(e)
          res.status(500).send('Painting not found')
      }
}

const findPaintingById = async (req, res) => {
    try {
        const { id } = req.params
        const painting = await Painting.findById(id)
        if(!painting) throw Error ('Painting not found')
        res.status(200).json(painting)
    } catch (e) {
        console.log(e)
        res.status(500).send('Painting not found')
    }
}

const findPaintingByArtId = async (req, res) => {
    try {
        const { id } = req.params
        const painting = await Painting.find({art_id: id})
        if(!painting) throw Error ('Painting not found')
        res.status(200).json(painting)
    } catch (e) {
        console.log(e)
        res.status(500).send('Painting not found')
    }
}


const createPainting = async (req, res) => {
    try {
        const painting = await new Painting(req.query)
        await painting.save()
        if(!painting) throw Error('Painting not created')
        return res.status(201).json(painting)
    } catch (e) {
        console.log(e)
        res.status(500).send("Painting not created")
    }
}

const updatePainting = async (req, res) => {
    try {
        const painting = await Painting.findByIdAndUpdate(req.query.id, {[req.query.whatToUpdate]: req.query.update})
        if(!painting) throw Error('Painting not updated')
        res.status(201).json(painting)
    } catch (e) {
        console.log(e)
        res.status(500).send('Painting not updated')
    }
}

const deletePainting = async (req, res) => {
    try { 
        const { id } = req.params
        const painting = await Painting.findByIdAndDelete(id)
        if(!painting) throw Error('Painting not deleted')
        res.status(200).json(painting)
    } catch (e) {
        console.log(e)
        res.status(500).send('Painting not deleted')
    }
}

module.exports = {
    findPaintings,
    findPaintingById,
    findPaintingByArtId,
    createPainting,
    updatePainting,
    deletePainting
}