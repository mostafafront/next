import BtnPrev from "@/app/quran/[quranPage]/btnPrev";
import BtnNext from "@/app/quran/[quranPage]/btnNext";
import GetApi from "@/getAPI/getApi";
import ClickAye from "@/app/quran/[quranPage]/clickAye";
// import {getURL} from "next/dist/shared/lib/utils";
import { getUrl } from 'nextjs-current-url/server';
import { NextPageContext } from 'next';



export function getServerSideProps(context: NextPageContext) {
    const {href} = getUrl({req: context.req});
    return {
        props: {
            url: href,
        },
    };
}

// interface Params {
//     params: { quranPage: number };
// }

export default async function QuranPack({ url }: { url: string }) {
    
    
    const pack = await GetApi(quranPage);
    
    
    let pageFilter = pack.filter((item) => {
        return item.page == quranPage;
    });
    
    
    const urlObj = new URL(url);
    const { pathname } = urlObj;
    
    console.log(pathname);
    
    // function checkId(aya: number, ayeSP: number) {
    //
    //
    //         if (aya == ayeSP) {
    //             return "activeAye";
    //         } else {
    //             return " ";
    //         }
    //
    // }
   
    return (
        <>
            <div>
                
                <BtnPrev quranPage={quranPage} firstAyeParam={pageFilter}></BtnPrev>
                
                <div className={"bg-[#FAEBD4] w-full"}>
                    
                    <div className={"container mx-auto flex flex-wrap p-3"}>
                        
                        {pageFilter.map((item) => {
                            return (
                                <>
                                    <div key={item.index}
                                         className={"flex ml-4 p-1 m-1 cursor-pointer "}>
                                        <ClickAye text={item.text} params={quranPage} idAye={item.index}/>
                                        <div>{item.aya}</div>
                                    </div>
                                </>
                            );
                        })}
                    
                    
                    </div>
                
                </div>
                
                <BtnNext quranPage={quranPage}></BtnNext>
            
            </div>
        </>
    );
}