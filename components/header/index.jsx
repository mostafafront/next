import Link from "next/link";
export default function HeaderComponent() {
    return (

        <header className={'shadow-2xl shadow-pink-400 bg-blue-300'}>
            <div className={'container mx-auto flex p-10 py-3 justify-between items-center'}>
            <div className={' bg-gray-800 text-white px-3 py-2 rounded-lg'}>logo</div>
                <ul className={'flex w-1/3 justify-between'}>
                    <li>
                        <Link href={'./'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'./about'}>about</Link>
                    </li>
                    <li>
                        <Link href={'./contact'}>contact</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}