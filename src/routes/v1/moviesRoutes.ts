import { Router, Request, Response } from 'express';
import { ErrorResponseDTO } from "../../dto/responses/ErrorRespomseDTO";

const router = Router();

router.get('/movies', (req: Request, res: Response) => {
    const errorResponse: ErrorResponseDTO = {
        success: false,
        error: {
            message: 'No Found',
            code: '404',
            details: {}
        }
    };
    res.status(404).json(errorResponse);
});

router.get('/movies/:id', (req: Request, res: Response) => {
    res.json({ message: 'id' });
});

export default router;