import Image from "next/image";

export default function NotFound() {
    
    return(
    <div className={'flex justify-center items-center'}>
        
        <div className={'bg-amber-600 mt-10'}>
            <Image src={'/notFound.jpg'} alt={'not found picture'} width={800} height={800}/>
        </div>
    </div>
    )
}