"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MusicaController {
    musica(req, res) {
        // res.send('Musica')
        database_1.default.query('DESCRIBE artistas');
        res.json('artistas');
    }
}
const musicaController = new MusicaController();
exports.default = musicaController;
