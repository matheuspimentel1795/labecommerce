"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const createProduct_1 = require("./endpoint/createProduct");
const createPurchase_1 = require("./endpoint/createPurchase");
const createTrip_1 = require("./endpoint/createTrip");
const createUser_1 = require("./endpoint/createUser");
const getProducts_1 = require("./endpoint/getProducts");
const getTrip_1 = require("./endpoint/getTrip");
const getUser_1 = require("./endpoint/getUser");
const ordernarProduct_1 = require("./endpoint/ordernarProduct");
const purchaseUser_1 = require("./endpoint/purchaseUser");
app_1.default.post("/addUser", createUser_1.createUser);
app_1.default.post("/createProduct", createProduct_1.createProduct);
app_1.default.get("/getUser", getUser_1.getUser);
app_1.default.get("/getProducts", getProducts_1.getProducts);
app_1.default.post("/createTrip", createTrip_1.createTrip);
app_1.default.get("/gettrip", getTrip_1.getTrip);
app_1.default.post("/createPurchase", createPurchase_1.createPurchase);
app_1.default.get("/order/:type", ordernarProduct_1.ordenarProduct);
app_1.default.get("/purchaseUser/:IDuser", purchaseUser_1.purchaseUser);
//# sourceMappingURL=index.js.map