"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var user_router_1 = __importDefault(require("./user.router"));
var habit_router_1 = __importDefault(require("./habit.router"));
var rootRouter = express_1.default.Router();
rootRouter.use('/user', user_router_1.default);
rootRouter.use('/habit', habit_router_1.default);
exports.default = rootRouter;
//# sourceMappingURL=index.js.map