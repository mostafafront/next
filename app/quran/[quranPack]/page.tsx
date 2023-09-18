import BtnPrev from "@/app/quran/[quranPack]/btnPrev";
import BtnNext from "@/app/quran/[quranPack]/btnNext";
import GetApi from "@/getAPI/getApi";
import ClickAye from "@/app/quran/[quranPack]/clickAye";

interface Params {
    params: { quranPack: number };
    searchParams: { idQuran: number };
}

function checkId(aya: number, id: number)
{
    if(aya == id){
        return "activeAye";
    }
    else
    {
        return " ";
        
    }
}

export default async function QuranPack({params: {quranPack}, searchParams: {idQuran}}: Params) {
    
    
    const pack = await GetApi(quranPack);
    
    
    let pageFilter = pack.filter((item) => {
        return item.page == quranPack;
    });

    
    return (
        <>
            <div>
                
                <BtnPrev pQuranMin={quranPack}></BtnPrev>
                
                <div className={"bg-[#FAEBD4] w-full"}>
                    
                    <div className={"container mx-auto flex flex-wrap p-3"}>
                        
                        {pageFilter.map((item) => {
                            return (
                                <>
                                    
                                    <div key={item.aya} className={"flex ml-4 p-1 m-1 cursor-pointer " + checkId(item.aya, idQuran)}>
                                        <ClickAye text={item.text} params={quranPack} idAye={item.aya}/>
                                        <div>{item.aya}</div>
                                    </div>
                                
                                </>
                            );
                        })}
                    
                    
                    </div>
                
                </div>
                
                <BtnNext pQuranAdd={quranPack}></BtnNext>
            
            </div>
        </>
    );
}