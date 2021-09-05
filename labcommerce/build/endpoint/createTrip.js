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
exports.createTrip = void 0;
const Ticket_1 = require("../classes/Ticket");
const TicketDataBase_1 = require("../dataBase/TicketDataBase");
const CustomError_1 = require("../error/CustomError");
const createTrip = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, price, origin, destination } = req.body;
        if (!name || !description || !price || !origin || !destination) {
            throw new CustomError_1.CustomError(406, "Parâmetros faltando!");
        }
        const trip = new Ticket_1.Ticket(name, description, price, origin, destination);
        const tripDataBase = new TicketDataBase_1.ticketDataBase();
        yield tripDataBase.create(trip);
        res.status(200).send("Viagem Cadastrada com sucesso!");
    }
    catch (error) {
        res.status(error.statusCode || 400)
            .send(error.message || "erro inesperado!");
    }
});
exports.createTrip = createTrip;
