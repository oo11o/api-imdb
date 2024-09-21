export interface ErrorResponseDTO {
    success: false;
    error: {
        message: string;
        code: string;
        details?: object;
    };
}
