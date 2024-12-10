import Link from 'next/link';
import Image from 'next/image';


const relatedproduct = (props: any) => {
    const relateddata = props.data.related_products;
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true
    }

    return (
        <div className="relate_main mt-[80px]">
            <h2 className='relative font-bold text-center border-primary text-secondary mb-8 md:text-2xl mx-auto block pb-2 w-max before:cursor-context-menu before:left-1/2 before:bottom-0 before:w-1/2 before:h-[1px] before:bg-secondary before:absolute before:block before:translate-x-[-50%] '>You may also like</h2>
            <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-nowrap md:gap-8 gap-3 justify-start md:overflow-x-hidden overflow-x-auto md:pb-0 pb-4">
                
                    {
                        relateddata.map((data: any) => {
                            return (
                                <div className="text-center product-main w-[80%] md:max-w-[45%]  md:w-[100%]  bg-white shadow-md rounded-xl duration-500 border border-[#0005]" key={data.id}>
                                    <Link href={`/products/${data.slug}`} className="inline-block">
                                        <div className="prod-image relative min-w-[210px] max-w-[300px] md:h-[200px] h-[200px] bg-[#d1caca1a]">
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