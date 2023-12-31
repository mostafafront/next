type userInfo = {
    id: number,
    name: string,
    email: string
}

interface textInterface {
    index: number
    sura: number,
    sura_name: string,
    aya: number,
    text: string,
    page: number,
    active: boolean,
}

interface packInterface {
    "pack": textInterface[];
}