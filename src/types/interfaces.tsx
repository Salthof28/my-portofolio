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
    mainContent: string,
    sub1?: string,
    sub2?: string,
    sub3?: string,
    c1?: string,
    c2?: string,
    c3?: string,
    finalContent?: string,
    imgs1?: string[],
    imgs2?: string[],
    imgs3?: string[],
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


