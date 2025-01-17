import Image from "next/image";
export default function Herosection (){
    return(
        <div className="bg-[url('/homehero.png')]">
            <section className="flex flex-row mt-24 gap-9 justify-center bg-black bg-opacity-60">
            <div>
            <Image src="/verticallogos.png" alt="bowl" width={15} height={90}/>
            </div>
            <div className="flex flex-col lg:flex-row">
            <div>
            <Image src="/TextContant.png" alt="Text" width={250} height={100} className="relative top-16"/>
            </div>
            <div className="ml-32">
              <Image src="/Bowl.png" alt="bowl" width={450} height={400}/>
            </div>
            </div>
            </section>
        </div>
    )
 }