'use client';
import Image from "next/image";
import Link from "next/link";
import Manufactorpartner from "./manufactor-partner";
import { Categories, Links } from './footer-links';

const Footer = () => {

    return (
        <>
            <Manufactorpartner />
            <div className="footer_top_curve">
<div className="header-wave">
    <div className="inner-header">
    </div>
    <div>
    <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
    </defs>
    <g className="parallax">
    <use xlinkHref="#gentle-wave" x="48" y="0" fill="#25104854"></use>
    <use xlinkHref="#gentle-wave" x="48" y="3" fill="#25104854"></use>
    <use xlinkHref="#gentle-wave" x="48" y="5" fill="#25104854"></use>
    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#25104854"></use>    
    </g>
    </svg>
    </div>
    
    </div>
</div>
            <footer className="border-t-1 pt-5 bg-secondary">
                <div className="footer py-[50px]">
                    <div className="container flex justify-between flex-wrap items-start">
                        <div className="footer_logo  md:mx-[unset] mx-auto md:mb-0 mb-5 max-w-md">
                            <Link className="relative" href="/">
                                <Image src="/img/logo-tm-white.png" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" width={250} height={500} alt="footer logo" />
                            </Link>
                            <p className="mt-5 text-white text-sm leading-[1.8]">We set new standards in user experience & make future happen. We believe in quality good and services and standard worldwide.</p>

                            <ul className="flex items-center md:justify-start justify-center md:pt-5 pt-5 pb-5 gap-5 ">
                                <li><Link target='_blank' href="https://facebook.com/adkinstruments" className="inline-block md:mr-5 mr-5"><svg className="w-[16px] h-[16px] Icon Icon--facebook" viewBox="0 0 9 17" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z" fill="#fff"></path>
                                </svg></Link></li>
                                <li><Link target='_blank' href="https://www.instagram.com/adkinstruments/" className="inline-block"><svg className="w-[16px] h-[16px] Icon Icon--instagram" role="presentation" viewBox="0 0 32 32" aria-hidden="true" data-acsb-hidden="true">
                                    <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z" fill="#fff"></path>
                                </svg></Link></li>
                                <li><Link target='_blank' href="https://www.youtube.com/channel/UCzlhyUO7fWzfm0tqsP23meA" className="inline-block">
                                    <svg className="w-[22px] h-[22px] Icon Icon--instagram ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" fill="#fff" /></svg>
                                </Link></li>
                                <li><Link target='_blank' href="https://www.linkedin.com/in/adk-instruments-10452922a" className="inline-block">
                                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="20px" height="20px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" fill="#fff" /></svg>
                                </Link>
                                </li>
                            </ul> 


                        </div>
                        <div className="footer_center w-full md:w-auto">
                        <h2 className="text-[20px] text-white mb-5 md:border-b border-white pb-2">Categories</h2>

                            <ul className="">

                                {
                                    Categories.map((data, ind) => {
                                        return (
                                            <li className=" text-[14px] md:pb-5 pb-2 text-white" key={`footer==${ind + 2}`}><Link href={data.url}>{data.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>

                        </div>
                        <div className="footer_right ">
                        <h2 className="text-[20px] text-white md:mb-5 mb-2 mt-5 md:mt-0 md:border-b border-white pb-2">Quick links</h2>

                            <ul className="">

                                {
                                    Links.map((data, ind) => {
                                        return (
                                            <li className="text-[14px] md:pb-5 pb-2 text-white" key={`footer-sec==${ind + 2}`}><Link href={data.url}>{data.title}</Link></li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="md:min-w-[250px] footer_subscribe md:text-left md:mt-0 mt-5">
                        <h2 className="text-[20px] text-white md:border-b md:border-white pb-2">About Us</h2>
                            {/* <p className="text-[12px]">New products, sales, exclusive gifts: Sign up for updates.</p>
                            <form className="mt-2">
                                <input type="text" placeholder="Enter your email address" className="py-2 px-2 border-2  border-[#e3e3e3] " />
                                <button type="submit" className="bg-primary text-white uppercase py-2 px-2">Sign me up</button>
                            </form> */}

                            {/* <ul className="flex items-center md:justify-start justify-center md:pt-5 pt-5 pb-5 ">
                                <li><Link  href="https://facebook.com/adkinstruments" className="inline-block md:mr-5 mr-5"><svg className="w-[20px] h-[20px] Icon Icon--facebook" viewBox="0 0 9 17" aria-hidden="true" data-acsb-hidden="true" data-acsb-force-hidden="true">
                                    <path d="M5.842 17V9.246h2.653l.398-3.023h-3.05v-1.93c0-.874.246-1.47 1.526-1.47H9V.118C8.718.082 7.75 0 6.623 0 4.27 0 2.66 1.408 2.66 3.994v2.23H0v3.022h2.66V17h3.182z" fill="#fff"></path>
                                </svg></Link></li>
                                <li><Link  href="https://www.instagram.com/adkinstruments/" className="inline-block"><svg className="w-[20px] h-[20px] Icon Icon--instagram" role="presentation" viewBox="0 0 32 32" aria-hidden="true" data-acsb-hidden="true">
                                    <path d="M15.994 2.886c4.273 0 4.775.019 6.464.095 1.562.07 2.406.33 2.971.552.749.292 1.283.635 1.841 1.194s.908 1.092 1.194 1.841c.216.565.483 1.41.552 2.971.076 1.689.095 2.19.095 6.464s-.019 4.775-.095 6.464c-.07 1.562-.33 2.406-.552 2.971-.292.749-.635 1.283-1.194 1.841s-1.092.908-1.841 1.194c-.565.216-1.41.483-2.971.552-1.689.076-2.19.095-6.464.095s-4.775-.019-6.464-.095c-1.562-.07-2.406-.33-2.971-.552-.749-.292-1.283-.635-1.841-1.194s-.908-1.092-1.194-1.841c-.216-.565-.483-1.41-.552-2.971-.076-1.689-.095-2.19-.095-6.464s.019-4.775.095-6.464c.07-1.562.33-2.406.552-2.971.292-.749.635-1.283 1.194-1.841s1.092-.908 1.841-1.194c.565-.216 1.41-.483 2.971-.552 1.689-.083 2.19-.095 6.464-.095zm0-2.883c-4.343 0-4.889.019-6.597.095-1.702.076-2.864.349-3.879.743-1.054.406-1.943.959-2.832 1.848S1.251 4.473.838 5.521C.444 6.537.171 7.699.095 9.407.019 11.109 0 11.655 0 15.997s.019 4.889.095 6.597c.076 1.702.349 2.864.743 3.886.406 1.054.959 1.943 1.848 2.832s1.784 1.435 2.832 1.848c1.016.394 2.178.667 3.886.743s2.248.095 6.597.095 4.889-.019 6.597-.095c1.702-.076 2.864-.349 3.886-.743 1.054-.406 1.943-.959 2.832-1.848s1.435-1.784 1.848-2.832c.394-1.016.667-2.178.743-3.886s.095-2.248.095-6.597-.019-4.889-.095-6.597c-.076-1.702-.349-2.864-.743-3.886-.406-1.054-.959-1.943-1.848-2.832S27.532 1.247 26.484.834C25.468.44 24.306.167 22.598.091c-1.714-.07-2.26-.089-6.603-.089zm0 7.778c-4.533 0-8.216 3.676-8.216 8.216s3.683 8.216 8.216 8.216 8.216-3.683 8.216-8.216-3.683-8.216-8.216-8.216zm0 13.549c-2.946 0-5.333-2.387-5.333-5.333s2.387-5.333 5.333-5.333 5.333 2.387 5.333 5.333-2.387 5.333-5.333 5.333zM26.451 7.457c0 1.059-.858 1.917-1.917 1.917s-1.917-.858-1.917-1.917c0-1.059.858-1.917 1.917-1.917s1.917.858 1.917 1.917z" fill="#fff"></path>
                                </svg></Link></li>
                                <li><Link  href="https://www.youtube.com/channel/UCzlhyUO7fWzfm0tqsP23meA" className="inline-block">
                                    <svg className="w-[30px] h-[30px] Icon Icon--instagram ml-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" ><path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" fill="#fff" /></svg>
                                </Link></li>
                                <li><Link  href="https://www.linkedin.com/in/adk-instruments-10452922a" className="inline-block">
                                    <svg className="ml-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px">    <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" fill="#fff" /></svg>
                                </Link>
                                </li>
                            </ul> */}
                            
                            <ul className="md:mt-5">
                                <li className="flex items-center gap-[15px] text-white md:text-[14px] text-[16px]"><svg className="w-[16px] h-[16px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480l0-162.9c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9L192 480c0 17.7-14.3 32-32 32s-32-14.3-32-32z" fill="#fff"></path></svg> Address: 121/C1, Gk1,Indirapuram, Ghaziabad, UP, INDIA, 201014</li>
                                <li className="md:my-2 my-3 flex gap-[15px] text-white text-[16px] md:text-[14px]"><svg className="w-[16px] h-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" fill="#fff"></path></svg> Call Us: <a href="tel:9310246652">+91-9310246652</a></li>
                                <li className="flex items-center gap-[15px] text-white md:text-[14px] text-[16px]"><svg class="w-[14px] h-[14px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" fill="#fff"></path></svg> Email Us: <a href="mailto:enquiry@adkinstruments.in">enquiry@adkinstruments.in</a></li>
                            </ul>
                            <div className="mt-5 md:mx-auto block w-full">
                                <Link href="https://mqacertification.com/verify/?company_name=ADK+Instruments&certificate_number=QMS%2F23M0932&submit=Search+Certificate#" target="_blank">
                                <img src="img/iso-stamp.png" alt="certified logo" className="w-[100px] h-[100px] object-contain"/>
                                </Link>
                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;