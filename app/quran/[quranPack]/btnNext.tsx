"use client";
import {next} from "sucrase/dist/types/parser/tokenizer";
import GetApi from "@/getAPI/getApi";
import {log} from "util";
import {useRouter} from "next/navigation";


let page = 1;

interface Props {
    addPage: (numParam: number) => number;
}

export default async function BtnNext({addPage}: Props) {
    const router = useRouter();
    
    // function nextPage(url: number) {
    //     console.log(url)
    // }
    
    
    // const dataQuran = await fetch(`https://quran.rafed.net/api/page_details/${page}`)
    // const data = await dataQuran.json()
    let nextPage = Number(addPage) + 1;
    return (
        <>
            <button className={"btn btn-outline btn-success w-full my-3"}
                    onClick={() => router.push(`/quran/${nextPage}`)}>Next
            </button>
        </>
    );
}