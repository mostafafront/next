"use client";
import {useRouter} from "next/navigation";

interface Props {
    pQuranAdd: number;
}

export default async function BtnNext({pQuranAdd}: Props) {
    
        const router = useRouter();
    function NextPageF(addPageP: number) {
        let nextPage: number;
        
        if (Number(addPageP) < 605) {
            nextPage = Number(addPageP) + 1;
        } else nextPage = 1;
        
        router.push(`/quran/${nextPage}`)
    }
    
    return (
        <>
            <button className={"btn btn-info w-full my-3"}
                    onClick={() => NextPageF(pQuranAdd)}>Next
            </button>
        </>
    );
}