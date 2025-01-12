import { Router, Request, Response, NextFunction } from 'express';
import { ErrorResponseDTO } from '../../dto/responses/ErrorRespomseDTO.js';
import { MovierAdapter } from '../../parser/MovierAdapter.js';

const router = Router();

const asyncHandler = (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

router.get('/movies/:id', asyncHandler(async (req: Request, res: Response) => {
    const test = new MovierAdapter();
    const { id } = req.params;

    res.json(await test.getDetailsByIMDBId(id));
}));


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
