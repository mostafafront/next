import BtnPrev from "@/app/quran/[quranPack]/btnPrev";
import BtnNext from "@/app/quran/[quranPack]/btnNext";
import GetApi from "@/getAPI/getApi";


interface Params {
    params: { quranPack: number };
}

export default async function QuranPack({params: {quranPack}}: Params) {
    
    
    const pack = await GetApi(quranPack);
    
    
    let pageFilter = pack.filter((item) => {
        return item.page == quranPack;
    });
    
    return (
        <>
            
            <BtnPrev pQuranMin={quranPack}></BtnPrev>
            
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr className={"text-center"}>
                    <th scope="col" className="px-6 py-3">
                        sura name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        text
                    </th>
                    <th scope="col" className="px-6 py-3">
                        page
                    </th>
                </tr>
                </thead>
                
                <tbody>
                {pageFilter.map((item) => {
                    return (
                        <tr key={item.index}
                            className="text-center  bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.sura_name}
                            </th>
                            <td className="px-6 py-4">
                                {item.text}
                            </td>
                            <td className="px-6 py-4">
                                {item.page}
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            
            <BtnNext pQuranAdd={quranPack}></BtnNext>
        
        </>
    );
}