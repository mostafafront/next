"use client";
import {useRouter} from "next/navigation";

interface textQuranInterface {
    index: number
    sura: number,
    sura_name: string,
    aya: number,
    text: string,
    page: number
}

function activeAyeF(event: any) {
    let acAye = (document.querySelector(".activeAye"));
    
    if (acAye !== null) {
        acAye.classList.remove("activeAye");
    }
    
    event.target.parentElement.classList.add("activeAye");
    
}

export default function ClickAye(props: textQuranInterface) {
    return (
        <div key={props.index} className={"flex ml-4 p-1 m-1 cursor-pointer"}>
            <div className={"ml-1"} onClick={(event: any) => activeAyeF(event)}>{props.text}</div>
            <div>{props.aya}</div>
        </div>
    );
}