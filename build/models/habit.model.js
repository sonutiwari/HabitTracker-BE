"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HabitModel = exports.habitSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
exports.habitSchema = new Schema({
    name: { type: String, required: true, unique: true },
    startDate: { type: Date, required: true },
    frequency: { type: String, enum: ['1', '2', '3', '4', '5', '6'] },
    time: { type: String, required: true }
});
exports.HabitModel = mongoose_1.default.model('Habits', exports.habitSchema);
//# sourceMappingURL=habit.model.js.map