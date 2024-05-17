export const Skills: any[] = [
    {
        name: 'Communication',
        id: 1
    },
    {
        name: 'Teamwork',
        id: 2
    },
    {
        name: 'ProblemSolving',
        id: 3
    },
]

export interface BasicInfo {
    id?: number
    title?: string
    birth_date?: any
    gender?: 1
    employment_status?: 1
    about?: string
    soft_skills?: []
}

export interface Education {
    id?: number
    institute?: string
    degree?: string
    field_of_study?: string
    start_date?: any
    end_date?: any
    grade?: number
}