import Image from "next/image"
export default function Homeaboutus (){
    return(
        <div className="flex flex-col lg:flex-row justify-center gap-20 mt-16 ">
            <section>
                <Image src="/aboutus.png" alt="aboutus" width={310} height={323}/>
            </section>
            <section className="grid col-span-3 row-span-2 gap-2">
                <Image src="/eggs.png" alt="eggs" width={355} height={320} className="grid grid-cols-2 grid-rows-2"/>
                <div className="flex flex-row gap-2">
                <Image src="/sandwich.png" alt="eggs" width={172} height={3} className="grid grid-cols-1 grid-rows-1"/>
                <Image src="/sandwich2.png" alt="eggs" width={172} height={3} className="grid grid-cols-1 grid-rows-1"/>
                </div>
            </section>
        </div>
    )
}