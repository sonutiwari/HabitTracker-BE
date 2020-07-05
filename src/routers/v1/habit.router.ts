import express from 'express';
import HabitController from '../../controllers/habit.controller';
const habitController = new HabitController();
const habitRouter = express.Router();
habitRouter.post('/create', habitController.createHabit);
export default habitRouter;