import { Router } from "express";
import musicaController from '../controllers/musicaControllers';

class MusicaRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', musicaController.musica);
  }
}

const musicaRoutes = new MusicaRoutes();
export default musicaRoutes.router;