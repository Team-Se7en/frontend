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

export interface WorkExperience {
    id?: number
    company_name?: string
    company_website?: string
    start_date?: any
    end_date?: any
    job_title?: string
}

export interface Project {
    id?: number
    title?: string
    link?: string
    description?: string
}

export interface HardSkill {
    id?: number
    technology?: 1
    skill_level?: 100
    experience_time?: 1
}

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

export const HardSkills: any[] = [
    { id: 1, name: 'Python' },
    { id: 2, name: 'Django' },
    { id: 3, name: 'Flask' },
    { id: 4, name: 'JavaScript' },
    { id: 5, name: 'React' },
    { id: 6, name: 'Angular' },
    { id: 7, name: 'Vue' },
    { id: 8, name: 'Java' },
    { id: 9, name: 'Spring' },
    { id: 10, name: 'Hibernate' },
    { id: 11, name: 'C' },
    { id: 12, name: 'Cpp' },
    { id: 13, name: 'Csharp' },
    { id: 14, name: 'Dotnet' },
    { id: 15, name: 'Ruby' },
    { id: 16, name: 'Rails' },
    { id: 17, name: 'Php' },
    { id: 18, name: 'Laravel' },
    { id: 19, name: 'Swift' },
    { id: 20, name: 'Kotlin' },
    { id: 21, name: 'Go' },
    { id: 22, name: 'Rust' },
    { id: 23, name: 'Scala' },
    { id: 24, name: 'Groovy' },
    { id: 25, name: 'Typescript' },
    { id: 26, name: 'Nodejs' },
    { id: 27, name: 'Express' },
    { id: 28, name: 'Ruby On Rails' },
    { id: 29, name: 'Sql' },
    { id: 30, name: 'Nosql' },
];