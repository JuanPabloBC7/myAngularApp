"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        // res.send('Musica')
        res.json({
            text: 'API is /api/musica'
        });
    }
}
exports.indexController = new IndexController();
