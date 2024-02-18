import { Request, Response} from 'express';
import db from '../database';


class MusicaController {
  public musica (req: Request, res: Response) {
    // res.send('Musica')
    db.query('DESCRIBE artistas');
    res.json('artistas');
  }
}

const musicaController = new MusicaController();
export default musicaController;