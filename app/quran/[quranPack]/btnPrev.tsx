"use client";
import {useRouter} from "next/navigation";


interface Props {
    pQuranMin: number;
}

export default function BtnPrev({pQuranMin}: Props) {
    
    const router = useRouter();
    
    function prevPageF(pQuranMinParam: number) {
        
        let prevPage: number = 1;
        
        if (Number(pQuranMinParam) > 1)
            prevPage = Number(pQuranMinParam) - 1;
        else
            prevPage = 1;
        
        router.push(`/quran/${prevPage}?idQuran=1`);  //باید بگم اولین آیه ای که توی اون صفحه هست رو انتخاب کن
    }
    
    
    return (
        <>
            {pQuranMin != 1 ?
                <button className={"btn btn-success w-full my-3"} onClick={() => prevPageF(pQuranMin)}>prev</button> :
                <button className={"btn btn-success w-full my-3"} disabled>prev</button>}
        </>
    );
}