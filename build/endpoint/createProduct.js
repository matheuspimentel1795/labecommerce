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
exports.createProduct = void 0;
const Product_1 = require("../classes/Product");
const ProductDataBase_1 = require("../dataBase/ProductDataBase");
const CustomError_1 = require("../error/CustomError");
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price } = req.body;
        if (!name || !description || !price) {
            throw new CustomError_1.CustomError(406, "Dados incompletos");
        }
        const product = new Product_1.Product(name, description, price);
        const productDataBase = new ProductDataBase_1.ProductDataBase();
        const productList = productDataBase.getAll();
        const findProduct = (yield productList).filter((x) => {
            return x.name === name;
        });
        if (findProduct.length > 0) {
            throw new CustomError_1.CustomError(409, "Produto já cadastrado anteriormente!");
        }
        yield productDataBase.create(product);
        res.status(200).send("Produto cadastrado com sucesso!");
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "erro inesperado!");
    }
});
exports.createProduct = createProduct;
