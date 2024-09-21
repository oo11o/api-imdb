import { Router, Request, Response } from 'express';
import { ErrorResponseDTO } from '../../dto/responses/ErrorRespomseDTO.js';
import { MovierAdapter } from '../../parser/MovierAdapter.js';

const router = Router();

router.get('/movies/:id', async (req: Request, res: Response) => {
    const test = new MovierAdapter();
    const { id } = req.params;

    res.json(await test.getDetailsByIMDBId(id));
});

router.get('/movies', (req: Request, res: Response) => {
    const errorResponse: ErrorResponseDTO = {
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
