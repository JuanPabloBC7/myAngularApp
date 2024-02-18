"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const musicaControllers_1 = __importDefault(require("../controllers/musicaControllers"));
class MusicaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', musicaControllers_1.default.getArtistas);
        this.router.get('/:id', musicaControllers_1.default.getArtista);
        this.router.post('/', musicaControllers_1.default.createArtista);
        this.router.put('/:id', musicaControllers_1.default.update);
        this.router.delete('/:id', musicaControllers_1.default.delete);
    }
}
const musicaRoutes = new MusicaRoutes();
exports.default = musicaRoutes.router;
