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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class MusicaController {
    getArtistas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // res.send('Musica')
            const artistas = yield database_1.default.query('SELECT * FROM db_musica.artistas');
            res.json(artistas);
            // res.json({mensaje: 'obteninendo un artistas'});
        });
    }
    getArtista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            // db.query('DESCRIBE artistas');
            const { id } = req.params;
            const artista = yield database_1.default.query('SELECT * FROM artistas WHERE id = ?', [id]);
            console.log(artista.length);
            if ((artista === null || artista === void 0 ? void 0 : artista.length) > 0) {
                return res.json(artista[0]);
            }
            res.status(404).json({ text: "El artista no existe" });
            // res.json({mensaje: 'obteninendo un artista' + req.params.id});
        });
    }
    createArtista(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO artistas set ?', [req.body]);
            res.json({ mensaje: 'artista creado' });
        });
    }
    update(req, res) {
        res.json({ mensaje: 'actualizando a artista' + req.params.id });
    }
    delete(req, res) {
        res.json({ mensaje: 'eliminando a artista' + req.params.id });
    }
}
const musicaController = new MusicaController();
exports.default = musicaController;
