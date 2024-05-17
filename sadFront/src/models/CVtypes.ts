export interface BasicInfo {
    id?: number
    title?: string
    birth_date?: any
    gender?: number
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
    id?: number,
    technology?: 1,
    skill_level?: 100,
    experience_time?: 1,
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
    'Python',
    'Django',
    'Flask',
    'JavaScript',
    'React',
    'Angular',
    'Vue',
    'Java',
    'Spring',
    'Hibernate',
    'C',
    'Cpp',
    'Csharp',
    'Dotnet',
    'Ruby',
    'Rails',
    'Php',
    'Laravel',
    'Swift',
    'Kotlin',
    'Go',
    'Rust',
    'Scala',
    'Groovy',
    'Typescript',
    'Nodejs',
    'Express',
    'Ruby On Rails',
    'Sql',
    'Nosql',
];