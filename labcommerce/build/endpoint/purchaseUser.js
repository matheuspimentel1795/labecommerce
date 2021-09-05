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
exports.purchaseUser = void 0;
const PurchaseDataBase_1 = require("../dataBase/PurchaseDataBase");
const CustomError_1 = require("../error/CustomError");
const purchaseUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const IDuser = Number(req.params.IDuser);
        if (!IDuser) {
            throw new CustomError_1.CustomError(406, "Id do usuário não digitado");
        }
        const purchaseDataBase = new PurchaseDataBase_1.PurchaseDataBase();
        const purchaseList = yield purchaseDataBase.getAll();
        const purchaseByUserId = purchaseList.filter((x) => {
            return x.id_user === IDuser;
        }).map((x) => {
            return x;
        });
        res.status(200).send(purchaseByUserId);
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "error inesperado");
    }
});
exports.purchaseUser = purchaseUser;
