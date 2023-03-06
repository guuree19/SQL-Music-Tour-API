const express = require('express');
const router = express.Router();
const { Event } = require('../models');
//index route
router.get('/', async (req, res) => {
    try {
      const events = await Event.findAll({ order: [['date', 'ASC']] });
      res.status(200).json(events);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

//show route
router.get('/:id', async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ error: `Event with ID ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

//Create route
router.post('/', async (req, res) => {
    try {
      const event = await Event.create(req.body);
      res.status(201).json(event);
    } catch (err) {
      res.status(422).json({ error: err.message });
    }
});

//Update route
router.patch('/:id', async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (event) {
        await event.update(req.body);
        res.status(200).json(event);
      } else {
        res.status(404).json({ error: `Event with ID ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(422).json({ error: err.message });
    }
});

//Delete route
router.delete('/:id', async (req, res) => {
    try {
      const event = await Event.findByPk(req.params.id);
      if (event) {
        await event.destroy();
        res.status(204).send();
      } else {
        res.status(404).json({ error: `Event with ID ${req.params.id} not found` });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// export
module.exports = router;

  
  
  
  
  