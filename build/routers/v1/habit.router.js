"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var habit_controller_1 = __importDefault(require("../../controllers/habit.controller"));
var habitController = new habit_controller_1.default();
var habitRouter = express_1.default.Router();
habitRouter.post('/create', habitController.createHabit);
exports.default = habitRouter;
//# sourceMappingURL=habit.router.js.map