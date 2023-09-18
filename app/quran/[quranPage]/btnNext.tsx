"use client";
import {useRouter} from "next/navigation";


interface Props {
    quranPage: number,

}

export default async function BtnNext({quranPage}: Props) {
    
    const router = useRouter();
    //
    // let firstAye = firstAyeParam[0].aya
    //
    // if (ayeSParam === undefined) {
    //     console.log("123 undifind next");
    //     router.push(`/quran/${quranPage}?idQuran=${firstAye}`);
    // }
    
    function NextPageF(quranPageParam: number) {
        
        
        let nextPage: number = 1;
        
        if (Number(quranPageParam) < 605) {
            nextPage = Number(quranPageParam) + 1;
        } else nextPage = 1;
        
        router.push(`/quran/${nextPage}`);
    }
    
    return (
        <>
            {quranPage != 604 ?
                <button className={"btn btn-info w-full my-3"} onClick={() => NextPageF(quranPage)}>Next</button> :
                <button className={"btn btn-info w-full my-3"} disabled>Next</button>}
        </>
    );
}


