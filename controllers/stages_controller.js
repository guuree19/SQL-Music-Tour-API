const express = require('express');
const router = express.Router();
const { Stage } = require('../models');
//index route
router.get('/', async (req, res) => {
    try {
      const stages = await Stage.findAll({ order: [['date', 'ASC']] });
      res.status(200).json(stages);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

//show route
router.get('/:id', async (req, res) => {
    try {
      const stage = await Stage.findByPk(req.params.id);
      if (stage) {
        res.status(200).json(stage);
      } else {
        res.status(404).json({ error: `Stage with ID ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

//Create route
router.post('/', async (req, res) => {
    try {
      const stage = await Stage.create(req.body);
      res.status(201).json(stage);
    } catch (err) {
      res.status(422).json({ error: err.message });
    }
});

//Update route
router.patch('/:id', async (req, res) => {
    try {
      const stage = await Stage.findByPk(req.params.id);
      if (stage) {
        await stage.update(req.body);
        res.status(200).json(stage);
      } else {
        res.status(404).json({ error: `Stage with ID ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(422).json({ error: err.message });
    }
});

//Delete route
router.delete('/:id', async (req, res) => {
    try {
      const stage = await Stage.findByPk(req.params.id);
      if (stage) {
        await stage.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: `Stage with ID ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// export
module.exports = router;

  
  
  
  
  