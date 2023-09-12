import Image from "next/image";
export default function Loading() {
    return (
        <div className={'flex justify-center items-center my-10 mx-auto'}>
        
    <Image src={"/Double Ring-1s-200px.svg"} alt={'gif loading'}  width={300} height={300}/>
        </div>
    
    )
}
