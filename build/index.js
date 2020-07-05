"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var index_1 = __importDefault(require("./routers/index"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var PORT = process.env.PORT;
var app = express_1.default();
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use(cors_1.default());
app.use('/', index_1.default);
app.listen(PORT, function (err) {
    if (err) {
        console.error(err);
    }
    else {
        console.log("App is running on PORT " + PORT);
    }
});
//# sourceMappingURL=index.js.map