import BtnPrev from "@/app/quran/[quranPack]/btnPrev";
import BtnNext from "@/app/quran/[quranPack]/btnNext";
import GetApi from "@/getAPI/getApi";
import ClickAye from "@/app/quran/[quranPack]/clickAye";

interface Params {
    params: { quranPack: number };
    searchParams: {idQuran: string};
}

export default async function QuranPack({params: {quranPack}, searchParams: {idQuran}}: Params) {

    
    const pack = await GetApi(quranPack);
    
    
    let pageFilter = pack.filter((item) => {
        return item.page == quranPack;
    });
    
    
    function activeAyeF(event: any) {
        let acAye = (document.querySelector('.activeAye'))
        if(acAye !== null)
        {
            acAye.classList.remove('activeAye')
        }
        event.target.parentElement.classList.add('activeAye')
    }
    
    return (
        <>
            <div>
                
                <div>{idQuran}</div>
                
                <BtnPrev pQuranMin={quranPack}></BtnPrev>
                
                <div className={"bg-[#FAEBD4] w-full"}>
                    
                    <div className={"container mx-auto flex flex-wrap p-3"}>
                        
                        {pageFilter.map((item) => {
                            return (
                                <>
                                   
                                    <ClickAye aya={item.aya} key={item.index} index={item.index} page={item.page}
                                              sura={item.sura} sura_name={item.sura_name} text={item.text}></ClickAye>
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