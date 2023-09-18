import BtnPrev from "@/app/quran/[quranPage]/btnPrev";
import BtnNext from "@/app/quran/[quranPage]/btnNext";
import GetApi from "@/getAPI/getApi";
import ClickAye from "@/app/quran/[quranPage]/clickAye";

interface Params {
    params: { quranPage: number };
    searchParams: { ayeSP: number };
}


export default async function QuranPack({params: {quranPage}, searchParams: {ayeSP}}: Params) {
    
    
    const pack = await GetApi(quranPage);
    
    
    let pageFilter = pack.filter((item) => {
        return item.page == quranPage;
    });
    
    function checkId(aya: number, id: number) {
        if (aya == id) {
            return "activeAye";
        } else {
            return " ";
        }
    }
    
    
    return (
        <>
            <div>
                
                <BtnPrev quranPage={quranPage} firstAyeParam={pageFilter} ayeSParam={ayeSP}></BtnPrev>
                
                <div className={"bg-[#FAEBD4] w-full"}>
                    
                    <div className={"container mx-auto flex flex-wrap p-3"}>
                        
                        {pageFilter.map((item) => {
                            return (
                                <>
                                    
                                    <div key={item.aya}
                                         className={"flex ml-4 p-1 m-1 cursor-pointer " + checkId(item.aya, ayeSP)}>
                                        <ClickAye text={item.text} params={quranPage} idAye={item.aya}/>
                                        <div>{item.aya}</div>
                                    </div>
                                
                                </>
                            );
                        })}
                    
                    
                    </div>
                
                </div>
                
                <BtnNext quranPage={quranPage} firstAyeParam={pageFilter} ayeSParam={ayeSP}></BtnNext>
            
            </div>
        </>
    );
}