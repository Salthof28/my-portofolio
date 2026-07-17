export interface ListProject {
    id: number,
    slug: string,
    title: string,
    img: string,
    content: string
}

export interface ProjectDetail {
    slug: string,
    title: string,
    img: string,
    description: string,
    roles: string[],
    features: string[],
    images?: string[],
    tech: string[],
}

export interface ProjectMap {
    [id: number]: ProjectDetail,
}

export interface WorkExperienceItf {
    id: number,
    name: string,
    position: string
    location: string,
    status: string,
    image: string,
    overview: string,
    achievements: string[],
    res: string[],
    tech: string[],
}

export interface EducationItf {
    id: number
    institution: string,
    location: string,
    year: string,
    degree: string,
    thesis?: string,
    finalProject?: string
}

export interface ContactItf {
    linkedln: string,
    github: string,
    whatsApp: string,
    email: string
}
export interface PortoBotDataItf {
    name: string,
    aboutMe: string,
    education: EducationItf[],
    workExperience: WorkExperienceItf[]
    project: ProjectMap,
    contact: ContactItf
}


