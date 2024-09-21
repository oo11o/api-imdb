import { Router } from 'express';
import { MovierAdapter } from '../../imdb/MovierAdapter';

const router = Router();
router.get('/movies/:id', async (req, res) => {
    const test = new MovierAdapter();
    const { id } = req.params;
    res.json(await test.getDetailsByIMDBId(id));
});
router.get('/movies', (req, res) => {
    const errorResponse = {
        success: false,
        error: {
            message: 'No Found',
            code: '404',
            details: {},
        },
    };
    res.status(404).json(errorResponse);
});
export default router;
