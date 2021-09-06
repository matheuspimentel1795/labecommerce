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
exports.UserDataBase = void 0;
const User_1 = require("../classes/User");
const DataBase_1 = require("./DataBase");
class UserDataBase extends DataBase_1.DataBase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "user";
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DataBase_1.DataBase.connection(this.TABLE_NAME)
                .insert(user);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const usersDB = yield DataBase_1.DataBase.connection(this.TABLE_NAME).select();
            return usersDB.map((user) => {
                return new User_1.User(user.name, user.email, user.age, user.id);
            });
        });
    }
}
exports.UserDataBase = UserDataBase;
//# sourceMappingURL=UserDataBase.js.map