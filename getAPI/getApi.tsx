interface textInterface {
    index: number
    sura: number,
    sura_name: string,
    aya: number,
    text: string,
    page: number
}

interface packInterface {
    "pack": textInterface[];
}


export default async function GetApi(url: number) {
    
    const data = await fetch(`https://quran.rafed.net/api/page_details/${url}`);
    const pack: packInterface = await data.json();
    const packData = pack.pack;
    
    return packData
}