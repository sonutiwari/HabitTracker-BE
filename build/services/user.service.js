"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("../config/mongoose"));
var user_model_1 = require("../models/user.model");
var habit_model_1 = require("../models/habit.model");
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var document, connection;
            return __generator(this, function (_a) {
                document = new user_model_1.userModel({
                    email: email,
                    password: password,
                });
                connection = new mongoose_1.default();
                connection.connect();
                return [2 /*return*/, user_model_1.userModel
                        .create(document)
                        .then(function (resp) { return Promise.resolve(resp); })
                        .catch(function (err) { return Promise.reject(err); })
                        .finally(function () { return connection.close(); })];
            });
        });
    };
    UserService.prototype.readUserData = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, data, habits, _i, _a, habit, habitData, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        connection = new mongoose_1.default();
                        connection.connect();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, 8, 9]);
                        return [4 /*yield*/, user_model_1.userModel.findOne({ email: email })];
                    case 2:
                        data = _b.sent();
                        habits = [];
                        _i = 0, _a = data.habits;
                        _b.label = 3;
                    case 3:
                        if (!(_i < _a.length)) return [3 /*break*/, 6];
                        habit = _a[_i];
                        return [4 /*yield*/, habit_model_1.HabitModel.findById(habit._id)];
                    case 4:
                        habitData = _b.sent();
                        habits.push(habitData);
                        _b.label = 5;
                    case 5:
                        _i++;
                        return [3 /*break*/, 3];
                    case 6: return [2 /*return*/, Promise.resolve({ password: data.password, email: data.email, habits: habits })];
                    case 7:
                        err_1 = _b.sent();
                        return [2 /*return*/, Promise.reject(err_1)];
                    case 8:
                        connection.close();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    UserService.prototype.updateUserData = function () { };
    UserService.prototype.deleteUserData = function () { };
    UserService.prototype.createNewHabitForUser = function (email, name, startDate, frequency, time) {
        return __awaiter(this, void 0, void 0, function () {
            var document, connection;
            return __generator(this, function (_a) {
                document = new habit_model_1.HabitModel({ name: name, startDate: startDate, frequency: frequency, time: time });
                connection = new mongoose_1.default();
                connection.connect();
                return [2 /*return*/, user_model_1.userModel
                        .updateOne({ email: email }, { $push: { habits: { $each: [document] } } })
                        .then(function (resp) {
                        return habit_model_1.HabitModel.create(document)
                            .then(function (resp) { return Promise.resolve(resp); })
                            .catch(function (err) { return Promise.reject(err); })
                            .finally(function () { return connection.close(); });
                    })];
            });
        });
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=user.service.js.map