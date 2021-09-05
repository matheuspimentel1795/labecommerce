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
exports.getProducts = void 0;
const Product_1 = require("../classes/Product");
const ProductDataBase_1 = require("../dataBase/ProductDataBase");
const CustomError_1 = require("../error/CustomError");
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = new ProductDataBase_1.ProductDataBase();
        const productsArray = yield product.getAll();
        const productList = productsArray.map((x) => {
            return new Product_1.Product(x.name, x.description, x.price, x.id);
        });
        if (productList.length === 0) {
            throw new CustomError_1.CustomError(404, "Nenhum produto encontrado");
        }
        res.status(200).send(productList);
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "error inesperado");
    }
});
exports.getProducts = getProducts;
