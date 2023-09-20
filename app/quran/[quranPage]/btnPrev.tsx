"use client";
import {useRouter} from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
    quranPage: number,
    firstAyeParam: object[],
    // ayeSParam: number,
}


export default function BtnPrev({quranPage, firstAyeParam}: Props) {

    const [url, setUrl] = useState(window.location.hash)

    
    useEffect(() => {
        setTimeout(() => {
        
        setUrl(window.location.hash)
        }, 100)
    }, [])

    console.log("after: "+url)

    
    

    const router = useRouter();
    

    
        
        let firstAye = firstAyeParam[0].index

    // if (ayeSParam === undefined) {
        router.push(`/quran/${quranPage}#${firstAye}`);
    // }

    function prevPageF(quranPageParam: number) {
        
        
        let prevPage: number = 1;
        
        if (Number(quranPageParam) > 1)
            prevPage = Number(quranPageParam) - 1;
        else
            prevPage = 1;
        
        router.push(`/quran/${prevPage}`);
    }
    
    
    return (
        <>
            {quranPage != 1 ?
                <button className={"btn btn-success w-full my-3"} onClick={() => prevPageF(quranPage)}>prev</button> :
                <button className={"btn btn-success w-full my-3"} disabled>prev</button>}
        </>
    );
}