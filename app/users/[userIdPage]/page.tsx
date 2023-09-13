import Link from "next/link";
import NotFound from "@/app/users/[userIdPage]/not-found";
import getUser from "@/lib/getUser";

interface ParamsType{
    params: {
        userIdPage: string;
    }
}

interface dataUser{
    key: null | number,
    name: string,
    username: string,
    email: string,
    id: number,
    phone: string
}

export default async function userIdPage({params: {userIdPage}}: ParamsType) {
    const userData: Promise<dataUser> = getUser(userIdPage)
    const data = await userData
    
    if(data.key === null) return NotFound()
    
    return(
        <>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
                <tr className={'text-center'}>
                    <th scope="col" className="px-6 py-3">
                        name
                    </th>
                    <th scope="col" className="px-6 py-3">
                        username
                    </th>
                    <th scope="col" className="px-6 py-3">
                        email
                    </th><th scope="col" className="px-6 py-3">
                        phone
                    </th>
                </tr>
                </thead>
                
                <tbody>
                
               
               
                        <tr key={data.id} className="text-center  bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {data.name}
                            </th>
                            <td className="px-6 py-4">
                                <Link href={`/users/${data.id}`}>
                                    {data.username}
                                </Link>
                            </td>
                            <td className="px-6 py-4">
                                {data.email}
                            </td>
                            <td className="px-6 py-4">
                                {data.phone}
                            </td>
                        </tr>
                      
                
                
                
                </tbody>
            </table>
        </>
        
    )
}