"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import libraaries required.
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = __importDefault(require("dotenv"));
var DBConnection = /** @class */ (function () {
    function DBConnection() {
        this.dbConnection = null;
    }
    DBConnection.prototype.connect = function () {
        dotenv_1.default.config();
        // Connect to DB
        mongoose_1.default.connect(process.env.DBURL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
        // Get connection object.
        this.dbConnection = mongoose_1.default.connection;
        // Set up success or failure message.
        this.dbConnection.on("error", console.error.bind(console, "connection error:"));
        this.dbConnection.once("open", function () {
            console.log("Successfully connected to mongodb");
        });
    };
    DBConnection.prototype.close = function () {
        this.dbConnection.close();
    };
    return DBConnection;
}());
// Import the module.
exports.default = DBConnection;
//# sourceMappingURL=mongoose.js.map