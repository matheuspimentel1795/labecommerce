"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Purchase = void 0;
class Purchase {
    constructor(productID, userID, quantity, total) {
        this.id_product = productID;
        this.id_user = userID;
        this.quantity = quantity;
        this.total = total;
    }
}
exports.Purchase = Purchase;
