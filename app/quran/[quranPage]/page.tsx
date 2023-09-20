import BtnPrev from "@/app/quran/[quranPage]/btnPrev";
import BtnNext from "@/app/quran/[quranPage]/btnNext";
import GetApi from "@/getAPI/getApi";
import ClickAye from "@/app/quran/[quranPage]/clickAye";





interface Params {
    params: { quranPage: number };
}

export default async function QuranPack({params: {quranPage}}: Params) {
    
    
    const pack = await GetApi(quranPage);
    
    
    let pageFilter = pack.filter((item) => {
        return item.page == quranPage;
    });
    
    
    
    console.log('salam');
    console.log(location);
    
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
   
    let m = "dasf"
    return (
        <>
            <div>

                <BtnPrev quranPage={quranPage} firstAyeParam={pageFilter} activeIndex={m}></BtnPrev>
                
                <div className={"bg-[#FAEBD4] w-full"}>
                    
                    <div className={"container mx-auto flex flex-wrap p-3"}>
                        
                        {pageFilter.map((item) => {
                            return (
                                <>
                                <a id={""+item.index}></a>
                                    
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