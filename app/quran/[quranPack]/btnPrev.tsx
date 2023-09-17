"use client";
import {useRouter} from "next/navigation";


interface Props {
    pQuranMin: number;
}

export default function BtnPrev({pQuranMin}: Props) {
    
    const router = useRouter()
    
    function prevPageF(minPageP: number) {
    
    let prevPage: number;
    
    if(Number(minPageP) > 1)
        prevPage = Number(minPageP) -1
    else
        prevPage = 1
        
        router.push(`/quran/${prevPage}`)
    }
    
    
    return (
        <>
            <button className={"btn btn-success w-full my-3"} onClick={() => prevPageF(pQuranMin)}>prev</button>
        
        </>
    );
}