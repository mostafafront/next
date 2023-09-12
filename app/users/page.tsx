import {Metadata} from "next";
import getUserAll from "@/lib/getUserAll";
import Link from "next/link";
export const metadata: Metadata = {
    title: "user"
}



export default async function Users() {
    
    const userData: Promise<userInfo[]> = await getUserAll()
    
    const data = await userData

    return (
        <>
        <div className={'bg-rose-600 text-white p-5 mt-5 shadow-inner shadow-2xl shadow-amber-900'}>
            <h1 className={'text-center text-2xl'}>Users</h1>
        </div>
            
            
            
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                        <tr className={'text-center'}>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                email
                            </th>
                        </tr>
                    </thead>
                    
                    <tbody>
                    
                        {data.map((item) => {
                        return(
                            <tr key={item.id} className="text-center  bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.id}
                                </th>
                                    <td className="px-6 py-4">
                                        <Link href={`/users/${item.id}`}>
                                                {item.name}
                                        </Link>
                                    </td>
                                <td className="px-6 py-4">
                                    {item.email}
                                </td>
                            </tr>
                   
                        )
                    })}
            
                    
                    </tbody>
                </table>
   
        
            
        
        </>
    )
}
