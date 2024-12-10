'use client';
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import Skeleton from "../components/common/skelton/Banner";
import Link from "next/link";



const Banner = (props:any) => {
    console.log("props", props);
    
    const [gallery, setGallery] = useState([]);
    const [popup, setPopup] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true)    
    
    useEffect(() => {
        const bannerImage = async () => {
            try {
                const res = await fetch('https://adkinstruments.in/api/v1/images/banners')
                const result = await res.json();
                setGallery(result)
                setLoading(false)
            }
            catch (error) {
                console.log("Banner", error)
            }
        }

        const popupbanner = async () => {
            try {
                const result = await fetch('https://adkinstruments.in/api/v1/images/homepage_banner')
                const resl = await result.json();                
                setPopup(resl);
            }
            catch (error) {
                console.log("Banner popup", error)
            }
        }

        const timer = setTimeout(() => {
            setShowModal(true);
          }, 8000);

        bannerImage()
        popupbanner()
    }, [])


    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true
    };
    const closeModal = () => {
        setShowModal(false);
      };

    return (
        <>
        {showModal?
            <div onClick={closeModal} className="cursor-pointer fixed top-0 left-0 bg-black/5 z-[999999] w-full h-full bg-black/70">
                <div className="popup_bmain fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white z-[1111] d-90% md:w-[700px] md:max-h-[500px] px-5 py-10 w-[80%] h-[100%] max-h-[200px] before:content:'' before:absolute before:md:top-[-50px] before:md:w-[calc(100%+40px)]  before:md:h-[calc(100%+70px)] before:h-[100%] before:bg-white before:left-[-20px] before:top-[-40px] before:h-[calc(100%+60px)] before:w-[calc(100%+40px)] before:rounded-md">
                
                    <button className="absolute right-0 bg-white w-[25px] h-[25px] md:top-[-40px] top-[-33px] text-center line-clamp-1 cursor-pointer z-[11111]" onClick={closeModal}>
                    
                        <svg fill="black"  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30">
    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M16.414,15 c0,0,3.139,3.139,3.293,3.293c0.391,0.391,0.391,1.024,0,1.414c-0.391,0.391-1.024,0.391-1.414,0C18.139,19.554,15,16.414,15,16.414 s-3.139,3.139-3.293,3.293c-0.391,0.391-1.024,0.391-1.414,0c-0.391-0.391-0.391-1.024,0-1.414C10.446,18.139,13.586,15,13.586,15 s-3.139-3.139-3.293-3.293c-0.391-0.391-0.391-1.024,0-1.414c0.391-0.391,1.024-0.391,1.414,0C11.861,10.446,15,13.586,15,13.586 s3.139-3.139,3.293-3.293c0.391-0.391,1.024-0.391,1.414,0c0.391,0.391,0.391,1.024,0,1.414C19.554,11.861,16.414,15,16.414,15z"></path>
</svg></button>
                    <Link href="/products/flowtracker2-lab-adv-1721457719">                    
                        <Image src={popup} alt="pop up modal" fill/>
                    </Link>
             </div>
                    <div className="bg-black/5"></div>
             
             </div>
             :''
}

        <div className="homepage_banner">
{
    loading? <Skeleton />:

            <>            
            <Slider {...settings}>

                    {
                        gallery?.map((data: any, index: any) => {
                            return (
                                <div className="max-h-[1080px] overflow-hidden md:min-h-full">
                                <Image src={data.link} key={`banner--${index}`}  alt="banner" width="1920" height="1080" className="object-cover" />
                                </div>
                                // <img src={data.link} className='w-full' key={`banner--${index}`} />
                            )
                        })
                    }
            </Slider>
            </>
            }
        </div>
        </>
    )
}
export default Banner