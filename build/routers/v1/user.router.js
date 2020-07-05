"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_controller_1 = __importDefault(require("../../controllers/user.controller"));
var userController = new user_controller_1.default();
var userRouter = express_1.default.Router();
userRouter.post('/login', userController.userLogin);
exports.default = userRouter;
//# sourceMappingURL=user.router.js.map