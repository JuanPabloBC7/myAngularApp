import { Request, Response} from 'express';

class IndexController {
  public index (req: Request, res: Response) {
    // res.send('Musica')
    res.json({
      text: 'API is /api/musica'
    })
  }
}

export const indexController = new IndexController();