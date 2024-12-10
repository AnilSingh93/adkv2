'use client';
import { useRouter } from 'next/navigation'
import React, { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import Relatedproduct from './Relatedproduct';


const Products = ({ params }: any) => {
    const { slug } = params;
    const [allData, setAlldata] = useState([]);
    const [promedia, setPromedia] = useState(0);
    const [isShowing, setIsShowing] = useState(false);
    const [related, setRelated] = useState([]);

    console.log("allData", allData);

    const [activetab, setActiovetab] = useState(1);
    const clickTab = (number: any) => {
        setActiovetab(number)
    }

    useEffect(() => {
        const allProducts = async () => {
            try {
                const res = await fetch(`https://adkinstruments.in/api/v1/product/${slug}`);
                const result = await res.json();
                setAlldata(result);
            }
            catch (err) {
                console.log("PDP page  " + err);
            }
        }
        allProducts();
    }, [])

    return (
        <div className="container">


            <div className="flex flex-wrap md:flex-nowrap justify-between md:pt-8 pt-5">
                <div className="md:w-[46%] w-full flex justify-between relative md:flex-nowrap flex-wrap-reverse">
                    <div className="left md:max-w-20 md:mr-4 md:absolute relative left-0 top-0 md:h-full overflow-y-auto prod_scroll h-[unset] md:mt-0 mt-5 w-full max-w-[unset] md:block flex md:overflow-x-[unset] overflow-x-auto gap-[5px] md:gap-0">
                        {
                            allData.media?.map((images, id) => <div
                                className=
                                {promedia == id ? 'bg-[#d1caca1a] relative thumbnail prod_slider md:w-full md:h-[80px] h-[60px] md:mb-3 border-2 border-black w-[60px] flex-grow-1 flex-shrink-0 ' : 'bg-[#d1caca1a] relative thumbnail prod_slider md:w-full md:h-[80px] h-[60px] md:mb-3 w-[60px] flex-grow-1 flex-shrink-0 '}
                            ><Image fill loading='lazy' src={images} alt="product image" style={{ objectFit: "contain" }} className="mix-blend-multiply cursor-pointer border border-gray-50" key={id + 5} onClick={() => setPromedia(id)} /></div>)
                        }

                    </div>

                    <div className="md:max-w-[calc(100%-100px)] w-full ml-auto lg-max-w">
                        <div className="relative thumbnail prod_slider w-full md:h-[550px] h-[335px] border border-secondary rounded-sm">
                            {/* <Image fill
                            sizes='50vw'
                            loading='lazy' src={allData.media && allData.media[promedia]} alt="product image" style={{ objectFit: "contain" }} className="mix-blend-multiply" /> */}
                            <Image fill
                            sizes='50vw'
                            loading='lazy' src={allData.media && allData.media[promedia]} alt="product image" style={{ objectFit: "contain" }} className="mix-blend-multiply" />
                            </div>


                    </div>

                </div>

                <div className="md:w-1/2 w-full">

                    <h1 className='text-secondary mt-8 md:mt-0 mb-2 font-bold text-[22px] leading-7 uppercase'>{allData.name}</h1>
                    {
                        allData.show_price == 1 &&
                        <div className="price flex items-center gap-3 mb-5">
                            <div className="relgular text-[18px] line-through">₹{allData.regular_amount}</div>
                            <div className="discounted text-[20px] font-bold">₹{allData.total_amount}</div>
                            <span className='text-[12px] bg-secondary text-white py-1 px-2 rounded-md'>Save ₹{allData.discount_amount}</span>
                        </div>
                    }
                    <div className="prod_sort_title md:mt-4 ">
                        <p>
                            {
                                allData?.content && allData.content.short_description
                            }
                        </p>
                    </div>

                    <div className="flex justify-start mb-6 md:mt-4 mt-3">
                        <button className='prod_btn flex items-center gap-[5px] p-2 border bg-primary text-white md:mr-4 mr-[.4rem] border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold px-2 group text-[13px] md:text-[16px]'><svg className=' w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#fff' /></svg> Get Quote</button>
                        {
                            allData.data_sheet ? <><Link target='_blank' href={allData.data_sheet} className='prod_btn inline-block p-2 border bg-primary text-white md:mr-4 mr-[.4rem] border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold flex gap-[5px] items-center md:max-w-[150px] text-[13px] md:text-[16px]'><span><svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 448c0 35.3 28.7 64 64 64l160 0 0-128c0-17.7 14.3-32 32-32l128 0 0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 448zM171.3 75.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l96-96c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zm96 32l-160 160c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM384 384l-128 0 0 128L384 384z" fill="#fff" /></svg></span>Data Sheet</Link></> : <><Link href={`https://shop.adkinstruments.in/product/${allData.slug}`} className='prod_btn inline-block p-2 border bg-primary text-white md:mr-4 mr-[.4rem] border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold flex gap-[5px] items-center md:max-w-[150px] text-[13px] md:text-[16px]'>
                                <svg className=' w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#fff' /></svg>
                                Buy Now</Link></>
                        }
                        {
                            allData.show_price == 1 &&
                            <Link href={`https://shop.adkinstruments.in/product/${allData.slug}`} className='prod_btn inline-block p-2 border bg-primary text-white md:mr-4 mr-[.4rem] border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold flex gap-[5px] items-center md:max-w-[150px] text-[13px] md:text-[16px]'>
                                <svg className=' w-[18px] h-[18px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" fill='#fff' /></svg>
                                Buy Now</Link>
                        }
                    </div>

                    {allData.show_price == 1 &&
                        <div className="border-t border-[#DFDFDF] pt-3 pb-3">
                            <div className="relative text-[#248130] cust_pulse">
                                In stock
                            </div>
                        </div>
                    }

                    <div className="border-t border-[#DFDFDF] pt-5">
                        <p className='block w-full font-bold'>Delivery Details</p>
                        <div className="flex items-center gap-3 border border-[#ddd] max-w-max py-2 px-4 bg-gray-50 mt-2 md:text-[16px] text-[14px] ">
                            <img src="/img/truck_delivery.gif" className='w-[18px]' /> Standard 9-15 Days Delivery | Once received to our Hub
                        </div>
                    </div>
                    <div className="pt-4 mt-2">
                        <p className='font-bold'>Share: </p>
                        <ul className="flex items-center justify-start md:pt-5 pt-5 pb-5 gap-2 ">
                            <li><Link target='_blank' href="https://facebook.com/adkinstruments" className="inline-block md:mr-5 mr-5"><svg className="w-[16px] h-[16px] Icon Icon--facebook" viewBox="0 0 9 17" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z" fill="#251048"></path>
                            </svg></Link></li>
                            <li><Link target='_blank' href="https://www.instagram.com/adkinstruments/" className="inline-block"><svg className="w-[16px] h-[16px] Icon Icon--instagram" role="presentation" viewBox="0 0 32 32" aria-hidden="true" data-acsb-hidden="true">
                                <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z" fill="#251048"></path>
                            </svg></Link></li>
                            <li><Link target='_blank' href="https://www.youtube.com/channel/UCzlhyUO7fWzfm0tqsP23meA" className="inline-block">
                                <svg className="w-[22px] h-[22px] Icon Icon--instagram ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" fill="#251048" /></svg>
                            </Link></li>
                            <li><Link href="https://www.linkedin.com/in/adk-instruments-10452922a" className="inline-block" target='_blank'>
                                <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" fill="#251048" /></svg>
                            </Link>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>


            <div className="main_accordian mt-3 md:mt-5 prod_destails">
                <div className="tab_btn border-b border-[bg-primary] relative">

                    {
                        allData?.content && allData.content.description.length &&
                        <button data-attr="1" onClick={() => clickTab(1)} className={activetab == 1 ? 'md:text-[18px] text-[16px] font-bold border-b-2 border-solid border-secondary text-[bg-primary] p-3' : 'md:text-[18px] text-[16px] font-bold text-black p-3'}>Details</button>
                    }
                    {
                        allData?.content && allData.content.specification &&
                        <button data-attr="2" onClick={() => clickTab(2)} className={activetab == 2 ? 'md:text-[18px] text-[16px] font-bold border-b-2 border-solid border-secondary text-[bg-primary] md:ml-[20px] ml-[10px] p-3' : 'md:text-[18px] text-[16px] md:ml-[20px] ml-[10px] font-bold text-[#767676] p-3'}>Specification</button>
                    }
                    
                    {
                        allData.manual && allData.manual.length >= 0 ? (<button data-attr="3" onClick={() => clickTab(3)} className={activetab == 3 ? 'md:text-[18px] text-[16px] font-bold border-b-2 border-solid border-secondary text-[bg-primary] md:ml-[20px] ml-[10px] p-3' : 'md:text-[18px] text-[16px] md:ml-[20px] ml-[10px] font-bold text-[#767676] p-3'}>
                        Manual
                        </button>): '' }
                    
                </div>
                <div className={activetab == 1 ? 'block' : 'hidden'} data-attr="1">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-center gap-8 mt-4 px-2">
                        <div dangerouslySetInnerHTML={{ __html: allData?.content && allData.content.description }}></div>
                    </div>
                </div>
                <div className={activetab == 2 ? 'block' : 'hidden'} data-attr="2">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-between gap-8 mt-4 px-2">
                        <div dangerouslySetInnerHTML={{ __html: allData?.content && allData.content.specification }}></div>
                    </div>

                </div>
                <div className={activetab == 3 ? 'block' : 'hidden'} data-attr="3">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-between gap-8 mt-4 px-2">
                     {
                     allData.manual &&       
                    <Link target='_blank' href={allData.manual} className='prod_btn inline-block p-2 border bg-primary text-white mr-4 border-2 border-primary rounded-md hover:bg-white hover:text-primary font-bold flex gap-[5px] items-center md:max-w-[max-content]'><span></span>Download Manual</Link>
                     }
                    </div>

                </div>
            </div>

            {
                allData.related_products ? <><Relatedproduct data={allData} /></> : ''
            }

        </div>

    )
}

export default Products; 