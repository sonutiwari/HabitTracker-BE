"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var habit_model_1 = require("./habit.model");
var userSchema = new mongoose_1.default.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, unique: true, required: true },
    habits: [{ types: mongoose_1.default.Schema.Types.ObjectId, ref: habit_model_1.habitSchema }]
});
exports.userModel = mongoose_1.default.model('Users', userSchema);
//# sourceMappingURL=user.model.js.map