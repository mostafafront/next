"use client";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import ClickAye from "@/app/quran/[quranPage]/clickAye";

interface Props {
    quranPage: number,
    firstAyeParam: object[],
    activeIndex: string
}


export default function BtnPrev({quranPage, firstAyeParam, activeIndex}: Props) {
    
    const [url, setUrl] = useState("");
    
    
    useEffect(() => {
        setTimeout(() => {
            
            setUrl(window.location.hash);
        }, 100);
    }, []);
    
    let urlHash = url.slice(5);
    console.log("after: " + urlHash);
    
    
    console.log(activeIndex)
    
    
    let activeProp = {active: true};
    
    // firstAyeParam.map((item) => item.index == urlHash ? item.push(activeProp): console.log('no'))
    
    firstAyeParam.map((item) => console.log(item.index));
    
    console.log(firstAyeParam[0]);
    
    const router = useRouter();
    
    let firstAye = firstAyeParam[0].index;
    
    
    // if (ayeSParam === undefined) {
    router.push(`/quran/${quranPage}#aye=${firstAye}`);
    
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