'use client';
import { useEffect, useState } from "react";
import Headingtitle from "../components/common/Headingtitle";
import Link from "next/link";
import Image from 'next/image'
import Skeleton from "../components/common/skelton/Imageskelton";


export default function ProductTab() {
    const [data, setData] = useState([]);
    const [featured, setFeatured] = useState([]);
    const [loading, setLoading] = useState(true);


    const newArrived = async () => {
        try {
            const res = await fetch('https://adkinstruments.in/api/v1/products/newly_arrived')
            const result = await res.json();
            setData(result);
            setLoading(false);
        }
        catch (err) {
            console.log("Product tab" + err);
        }
    }

    const featuredProducts = async () => {

        try {
            const res = await fetch('https://adkinstruments.in/api/v1/products/featured')
            const result = await res.json();
            setFeatured(result);
            setLoading(false);
        }
        catch (err) {
            console.log("Product tab" + err);
        }
    }



    useEffect(() => {
        newArrived()
        featuredProducts()
    }, []);



    const [activetab, setActiovetab] = useState(1);
    const clickTab = (number: any) => {
        setActiovetab(number)
        }

        
    return (
        <>
                    <section className="pt-[40px] md:pt-[80px]">
                <Headingtitle title="FIND YOUR NEXT FAVORITE" position="center" />
                <div className="tab_section text-center pt-[10px]">
                    <div className="tab_btn">
                        <button data-attr="1" onClick={() => clickTab(1)} className={activetab == 1 ? 'text-[20px] font-bold border-b-4 border-solid border-primary text-[#251048]' : 'text-[20px] text-black'}>Newly Arrived</button>
                        <button data-attr="2" onClick={() => clickTab(2)} className={activetab == 2 ? 'text-[20px] font-bold border-b-4 border-solid border-primary text-[#251048] ml-[20px]' : 'text-[20px] ml-[20px] text-black'}>Featured Products</button>
                    </div>
                    <div className={activetab == 1 ? 'block container' : 'hidden container'} data-attr="1">
                        <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8 mt-8">
                            {loading ? <Skeleton /> : <>

                                {
                                    data?.map((item:any,index:any) => {
                                        return (
                                             <>                                            
                                            {/* <div className="text-center product-main w-full md:max-w-[300px]  w-full w-72 bg-white shadow-md rounded-xl duration-500 border border-[#0005] overflow-hidden" key={index}>
                                                    <Link href={`/products/${item.slug}`} className="inline-block w-full">
                                                        <div className="prod-image relative md:w-[auto] w-[250px] md:h-[100%] h-[250px] mx-auto md:pt-[105%] pt-0 bg-[#d1caca1a] border-1-[#25104830]">
                                                            
                                                            <Image src={item?.media?.original_url}  alt="newly arrived" fill className="object-cover mix-blend-multiply" />
                                                        </div>
                                                        <div className="prod-detila px-2  border-t border-[#25104847]">
                                                            <h2 className="mb-2 font-bold text-sm mt-2 text-[12px] line-clamp-[1.5]">{item.name}</h2>
                                                        </div>
                                                    </Link>                                                    
                                                </div> */}
                                                <div className="text-center product-main w-full md:max-w-[300px]  w-full w-72 rounded-xl duration-500 border border-[#0005] overflow-hidden bg-primary p-[15px]" key={index}>
                                                    <Link href={`/products/${item.slug}`} className="inline-block w-full">
                                                        <div className="prod-image relative md:w-[auto] w-[250px] md:h-[100%] h-[250px] mx-auto md:pt-[105%] pt-0 bg-white border-1-[#25104830] rounded-[15px] overflow-hidden mb-[15px]">
                                                            
                                                            <Image src={item?.media?.original_url}  alt="newly arrived" fill className="object-cover" />
                                                            
                                                        </div>
                                                        <div className="prod-detila px-2 ">
                                                            <h2 className="mb-2 font-bold text-sm mt-2 text-[12px] line-clamp-[1.5] text-white">{item.name}</h2>
                                                        </div>
                                                    </Link>                                                    
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </>
                            }
                            
                        </div>
                            <Link href="/categories" className=" mt-[35px] md:py-[11px] md:px-[28px] text-center inline-block relative justify-center border border-primary border-2 rounded-[50px] mx-auto bg-#fff text-primary hover:bg-secondary hover:text-[#fff] uppercase hover:border-secondary hover:bg-secondary md:text-[15px] font-[600] md:tracking-[1px] tracking-[.5px] text-[12px] py-[8px] px-[20px]">View All</Link>

                    </div>
                    <div className={activetab == 2 ? 'block container' : 'hidden'} data-attr="2">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8 mt-8">
                     {loading ? <Skeleton /> : <>

                                {
                                    featured.slice(0,4).map((data: any) => {
                                        return (
                                            <>
                                                <div className="text-center product-main w-full md:max-w-[300px]  w-full w-72 rounded-xl duration-500 border border-[#0005] overflow-hidden bg-primary p-[15px]" key={data.id+1}>
                                                    <Link href={`/products/${data.slug}`} className="inline-block w-full">
                                                    <div className="prod-image relative md:w-[auto] w-[250px] md:h-[100%] h-[250px] mx-auto md:pt-[105%] pt-0 bg-white border-1-[#25104830] rounded-[15px] overflow-hidden mb-[15px]">
                                                        <Image src={data.media.original_url} alt="Featured products" fill className="object-cover"/>
                                                            
                                                        </div>
                                                        <div className="prod-detila px-2">
                                                        <h2 className="mb-2 font-bold text-sm mt-2 text-[12px] line-clamp-[1.5] text-white">{data.name}</h2>
                                                        </div>
                                                    </Link>                                                    
                                                </div>

                                                
                                            </>
                                        )
                                    })
                                }
                            </>
                            }
                        </div>

                        <Link href="/categories" className=" mt-[35px] md:py-[11px] md:px-[28px] text-center inline-block relative justify-center border border-primary border-2 rounded-[50px] mx-auto bg-#fff text-primary hover:bg-secondary hover:text-[#fff] uppercase hover:border-secondary hover:bg-secondary md:text-[15px] font-[600] md:tracking-[1px] tracking-[.5px] text-[12px] py-[8px] px-[20px]">View All</Link>
                    </div>
                </div>
            </section>
        </>
    )
}