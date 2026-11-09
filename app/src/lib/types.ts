

export interface Artist {
    id: string;
    nombre: string;
    matricula: string | null;
}

export interface Project {
    id: string;
    nombre: string;
    estreno: string;
    grupo_id: string;
    programa_url: string;
    thumbnail_url: string;
    youtube_url: string;
    galeria_urls: string[];
}


//////////////////////////////

export interface creditos {
    id: string;
    proyecto_id: string;
    rol_id: string;
    persona_id: string;
    orden: number;
    created_at: string;
    updated_at: string;
}

export interface grupos {
    id: string;
    tag: string;
    nombre: string;
    sede: string | null;
    description: string | null;
    disciplina: string;
    banner_url: string;
    created_at: string;
    updated_at: string;
}

export interface personas {
    id: string;
    nombre: string;
    matricula: string | null;
    updated_at: string;
    admin: boolean;
    nomina: string | null;
}

export interface proyectos {
    id: string;
    grupo_id: string;
    nombre: string;
    estreno: string;
    programa_url: string | null;
    thumbnail_url: string | null;
    galeria_urls: string[] | null;
    youtube_url: string | null;
    created_at: string;
    updated_at: string;
}

export interface roles {
    id: string;
    nombre: string;
    categoria: string;
    requerido: boolean;
    created_at: string;
    updated_at: string;
}