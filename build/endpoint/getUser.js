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
exports.getUser = void 0;
const UserDataBase_1 = require("../dataBase/UserDataBase");
const CustomError_1 = require("../error/CustomError");
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new UserDataBase_1.UserDataBase();
        const userList = yield user.getAll();
        if (userList.length === 0) {
            throw new CustomError_1.CustomError(404, "Nenhum usuário Cadastrado!");
        }
        res.status(200).send(userList);
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "error inesperado");
    }
});
exports.getUser = getUser;
//# sourceMappingURL=getUser.js.map