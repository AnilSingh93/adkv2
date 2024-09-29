import Link from 'next/link';
import Image from 'next/image';

const relatedproduct = (props:any) =>{
    const relateddata = props.data.related_products;    
    return(
        <div className="relate_main mt-[80px]">
                        <h2 className='text-[24px] font-bold text-center border-primary text-black mb-8'>You may also like</h2>
                        <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8">

                                    {
                                        relateddata.map((data:any)=>{
                                            return(
                                        <div className="text-center product-main w-full md:max-w-[300px]  w-[45%]  bg-white shadow-md rounded-xl duration-500 border border-[#0005]" key={data.id}>
                                                <Link href={`/products/${data.slug}`} className="inline-block">
                                                    <div className="prod-image relative max-w-[300px] md:h-[250px] h-[150px] bg-[#d1caca1a]">
                                                    {/* <Image src={data.media[0]} alt="Featured products" fill /> */}
                                                    <Image fill loading='lazy' src={data.media[0]} alt="Related product" className="md:object-contain mix-blend-multiply" />
                                                    </div>
                                                    <div className="prod-detila  border-t border-[#25104847] px-1 ">
                                                    <h2 className="mb-4 font-bold text-sm md:mt-4 mt-2 text-[18px]">{data.name}</h2>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                            })
}
                </div>
            </div>
    )
}
export default relatedproduct;