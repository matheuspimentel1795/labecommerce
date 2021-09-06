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
exports.ordenarProduct = void 0;
const ProductDataBase_1 = require("../dataBase/ProductDataBase");
const CustomError_1 = require("../error/CustomError");
const ordenarProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const type = req.params.type.toUpperCase();
        if (type !== "ASC" && type !== "DESC") {
            throw new CustomError_1.CustomError(406, "O parâmetro só pode ser asc ou desc");
        }
        const productDataBase = new ProductDataBase_1.ProductDataBase();
        const orderList = yield productDataBase.ordernar(type);
        res.status(200).send(orderList[0]);
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "error inesperado");
    }
});
exports.ordenarProduct = ordenarProduct;
//# sourceMappingURL=ordernarProduct.js.map