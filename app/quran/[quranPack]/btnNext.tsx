"use client";
import {useRouter} from "next/navigation";

interface Props {
    pQuranAdd: number;
}

export default async function BtnNext({pQuranAdd}: Props) {
    
        const router = useRouter();
    function NextPageF(pQuranAddParam: number) {
        let nextPage: number;
        
        if (Number(pQuranAddParam) < 605) {
            nextPage = Number(pQuranAddParam) + 1;
        } else nextPage = 1;
        
        router.push(`/quran/${nextPage}?idQuran=1`)
    }
    
    return (
        <>
            {pQuranAdd != 604 ?
                <button className={"btn btn-info w-full my-3"} onClick={() => NextPageF(pQuranAdd)}>Next</button> :
                <button className={"btn btn-info w-full my-3"} disabled>Next</button>}
        </>
    );
}