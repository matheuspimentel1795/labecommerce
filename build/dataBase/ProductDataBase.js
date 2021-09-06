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
exports.ProductDataBase = void 0;
const DataBase_1 = require("./DataBase");
class ProductDataBase extends DataBase_1.DataBase {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "product";
    }
    create(product) {
        return __awaiter(this, void 0, void 0, function* () {
            yield DataBase_1.DataBase.connection(this.TABLE_NAME)
                .insert(product);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return DataBase_1.DataBase.connection(this.TABLE_NAME).select();
        });
    }
    ordernar(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = DataBase_1.DataBase.connection.raw(`
        SELECT * FROM ${this.TABLE_NAME}
        ORDER BY price ${type}
        `);
            return result;
        });
    }
}
exports.ProductDataBase = ProductDataBase;
//# sourceMappingURL=ProductDataBase.js.map