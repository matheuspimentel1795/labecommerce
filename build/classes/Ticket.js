"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const Product_1 = require("./Product");
class Ticket extends Product_1.Product {
    constructor(name, description, price, origin, destiny, id) {
        super(name, description, price);
        this.origin = origin;
        this.destiny = destiny;
    }
}
exports.Ticket = Ticket;
//# sourceMappingURL=Ticket.js.map