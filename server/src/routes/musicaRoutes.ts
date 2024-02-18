import { Router, request } from "express";
import musicaController from '../controllers/musicaControllers';

class MusicaRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', musicaController.getArtistas);
    this.router.get('/:id', musicaController.getArtista);
    this.router.post('/', musicaController.createArtista);
    this.router.put('/:id', musicaController.update);
    this.router.delete('/:id', musicaController.delete);
  }
}

const musicaRoutes = new MusicaRoutes();
export default musicaRoutes.router;