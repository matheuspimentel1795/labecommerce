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
exports.getTrip = void 0;
const Ticket_1 = require("../classes/Ticket");
const TicketDataBase_1 = require("../dataBase/TicketDataBase");
const CustomError_1 = require("../error/CustomError");
const getTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const trip = new TicketDataBase_1.ticketDataBase();
        const tripArray = yield trip.getAll();
        const tripMap = tripArray.map((x) => {
            return new Ticket_1.Ticket(x.name, x.description, x.price, x.origin, x.destiny, x.id);
        });
        if (tripMap.length === 0) {
            throw new CustomError_1.CustomError(404, "Nenhum produto encontrado");
        }
        res.status(200).send(tripArray);
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "error inesperado");
    }
});
exports.getTrip = getTrip;
//# sourceMappingURL=getTrip.js.map