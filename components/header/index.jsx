import Link from "next/link";
export default function HeaderComponent() {
    return (

        <header className={'shadow-2xl shadow-pink-400 bg-blue-300'}>
            <div className={'container mx-auto flex p-10 py-3 justify-between items-center'}>
            <div className={' bg-gray-800 text-white overflow-hidden whitespace-nowrap w-16 px-3 py-2 rounded-lg transition-all duration-100 hover:w-36'}>
                <Link href={"./"}>Logo <span className={'ms-3'}>salam😁</span></Link>
            </div>
                <ul className={'flex w-1/3 justify-between'}>
                    <li className={'px-4 rounded-md hover:bg-sky-400'}>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className={'px-4 rounded-md hover:bg-sky-400'}>
                        <Link href={'/about'}>about</Link>
                    </li>
                    <li className={'px-4 rounded-md hover:bg-sky-400'}>
                        <Link href={'/contact'}>contact</Link>
                    </li>
                    <li className={'px-4 rounded-md hover:bg-sky-400'}>
                        <Link href={'/users'}>users</Link>
                    </li>
                    <li className={'px-4 rounded-md hover:bg-sky-400'}>
                        <Link href={'/quran'}>quran</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}