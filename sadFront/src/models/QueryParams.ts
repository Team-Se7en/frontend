export interface ProfessorPositionsQueryParams {
    feeMax?: number;
    feeMin?: number;
    year?: number;
    term?: string;
    ordering?: string;
    
}

export interface StudentPositionsQueryParams {
    feeMax?: number;
    feeMin?: number;
    year?: number;
    term?: string;
    ordering?: string;
    filled?: number;
    
}