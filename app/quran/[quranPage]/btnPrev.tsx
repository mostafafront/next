"use client";
import {useRouter} from "next/navigation";


interface Props {
    quranPage: number,
    firstAyeParam: object[],
    ayeSParam: number,
}

export default function BtnPrev({quranPage, firstAyeParam, ayeSParam}: Props) {
    
    const router = useRouter();
    
    let firstAye = firstAyeParam[0].aya
    
    if (ayeSParam === undefined) {
        console.log("123 undifind prev");
        router.push(`/quran/${quranPage}?ayeSP=${firstAye}`);
    }
    
    function prevPageF(quranPageParam: number) {
        
        
        let prevPage: number = 1;
        
        if (Number(quranPageParam) > 1)
            prevPage = Number(quranPageParam) - 1;
        else
            prevPage = 1;
        
        router.push(`/quran/${prevPage}?ayeSP=${firstAye}`);
    }
    
    
    return (
        <>
            {quranPage != 1 ?
                <button className={"btn btn-success w-full my-3"} onClick={() => prevPageF(quranPage)}>prev</button> :
                <button className={"btn btn-success w-full my-3"} disabled>prev</button>}
        </>
    );
}