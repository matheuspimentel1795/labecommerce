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
exports.createUser = void 0;
const User_1 = require("../classes/User");
const UserDataBase_1 = require("../dataBase/UserDataBase");
const CustomError_1 = require("../error/CustomError");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, email, age } = req.body;
        const user = new User_1.User(name, email, age);
        if (!name || !email || !age) {
            throw new CustomError_1.CustomError(406, "Dados incompletos");
        }
        const userDataBase = new UserDataBase_1.UserDataBase();
        const getAll = yield userDataBase.getAll();
        const result = getAll.filter((x) => {
            return x.email === email;
        });
        if (result.length > 0) {
            throw new CustomError_1.CustomError(409, "email já cadastrado!");
        }
        yield userDataBase.create(user);
        res.status(200).send("Usuário cadastrado!");
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "erro inesperado!");
    }
});
exports.createUser = createUser;
//# sourceMappingURL=createUser.js.map