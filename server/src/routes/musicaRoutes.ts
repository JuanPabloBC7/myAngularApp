import { Router } from "express";

class MusicaRoutes {

  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', (req, res) => res.send('Musica'));
  }
}

const musicaRoutes = new MusicaRoutes();
export default musicaRoutes.router;