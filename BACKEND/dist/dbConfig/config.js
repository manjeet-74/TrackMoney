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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const dotenv_flow_1 = __importDefault(require("dotenv-flow"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_flow_1.default.config();
const MONGO_URI = process.env.MONGO_URI;
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    if (!MONGO_URI) {
        throw new Error("MONGO_URI not written");
    }
    try {
        console.log(MONGO_URI);
        // mongoose.set("strictQuery", false);
        const db = yield mongoose_1.default.connect(MONGO_URI);
        if (db) {
            console.log("MongoDB connected successfully!");
        }
        else {
            console.log("Error connecting to database");
        }
    }
    catch (error) {
        console.error("MongoDB connection failed: ", error);
    }
});
exports.connectDB = connectDB;
