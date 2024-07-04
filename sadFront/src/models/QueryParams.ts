export interface ProfessorPositionsQueryParams {
    feeMax?: number;
    feeMin?: number;
    year?: number;
    term?: string;
    ordering?: string;
    page?: number;
    
}

export interface StudentPositionsQueryParams {
    feeMax?: number;
    feeMin?: number;
    year?: number;
    term?: string;
    ordering?: string;
    filled?: number;
    page?: number;
}