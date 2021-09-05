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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPurchase = void 0;
const Purchase_1 = require("../classes/Purchase");
const ProductDataBase_1 = require("../dataBase/ProductDataBase");
const PurchaseDataBase_1 = require("../dataBase/PurchaseDataBase");
const CustomError_1 = require("../error/CustomError");
const createPurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productID, userID, quantity } = req.body;
        const product = new ProductDataBase_1.ProductDataBase();
        const productList = yield product.getAll();
        const productPrice = productList.find((x) => {
            return x.id === productID;
        });
        if (!productPrice) {
            throw new CustomError_1.CustomError(406, "O id de produto inserido não existe");
        }
        const total = productPrice.price * quantity;
        const purchase = new Purchase_1.Purchase(productID, userID, quantity, total);
        const purchaseDataBase = new PurchaseDataBase_1.PurchaseDataBase();
        yield purchaseDataBase.create(purchase);
        res.status(200).send("Compra cadastrada!");
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "erro inesperado!");
    }
});
exports.createPurchase = createPurchase;
