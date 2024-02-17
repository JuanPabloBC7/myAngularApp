"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MusicaRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Musica'));
    }
}
const musicaRoutes = new MusicaRoutes();
exports.default = musicaRoutes.router;
