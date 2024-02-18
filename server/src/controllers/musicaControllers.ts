import { Request, Response } from 'express';
import db from '../database';


class MusicaController {
  public async getArtistas (req: Request, res: Response): Promise<void> {
    // res.send('Musica')
    const artistas = await db.query('SELECT * FROM artistas');
    res.json(artistas);
    // res.json({mensaje: 'obteninendo un artistas'});
  }

  public async getArtista (req: Request, res: Response): Promise<any> {
    // db.query('DESCRIBE artistas');
    const { id } = req.params;
        const artista = await db.query('SELECT * FROM artistas WHERE id = ?', [id]);
        console.log(artista.length);
        if (artista.length > 0) {
            return res.json(artista[0]);
        }
        res.status(404).json({ text: "El artista no existe" });
    // res.json({mensaje: 'obteninendo un artista' + req.params.id});
  }

  public async createArtista (req: Request, res: Response): Promise<void> {
    await db.query('INSERT INTO artistas set ?', [req.body]);
    res.json({mensaje: 'artista creado'})
  }

  public async update (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
        const oldGame = req.body;
        await db.query('UPDATE artistas set ? WHERE id = ?', [req.body, id]);
        res.json({ message: "The artist was Updated" });
    // res.json({mensaje: 'actualizando a artista' + req.params.id})
  }

  public async delete (req: Request, res: Response): Promise<void> {
    const { id } = req.params;
        await db.query('DELETE FROM artistas WHERE id = ?', [id]);
        res.json({ message: "The artist was deleted" });
    // res.json({mensaje: 'eliminando a artista' + req.params.id})
  }
}

const musicaController = new MusicaController();
export default musicaController;