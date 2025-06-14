const express = require('express');
const { getAllTasks, createTask, updateTask, deleteTask } = require('../controllers/task.controller.js');
const logger = require('../middlewares/logger.middleware.js');

const router = express.Router();

router.get(
    '/',
    getAllTasks
)

router.post(
    '/',
    createTask,
)

router.patch(
    '/:id',
    logger,
    updateTask,
)

router.delete(
    '/:id',
    logger,
    deleteTask,
)

module.exports = router;