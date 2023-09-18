"use client";
import {useRouter} from "next/navigation";

interface textQuranInterface {
    text: string,
    params: number,
    idAye: number,
}


export default function ClickAye( props: textQuranInterface) {
    
        const router = useRouter()
    
    function activeAyeF(param: number, Aye: number) {
        
        console.log(Aye);
            router.push(`/quran/${param}?idQuran=${Aye}`)
    }
    
    
    return (
            <div className={"ml-1"} onClick={(event: any) => activeAyeF(props.params, props.idAye)}>{props.text}</div>
    );
}