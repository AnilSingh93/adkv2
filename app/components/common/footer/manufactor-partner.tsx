'use client';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headingtitle from "../Headingtitle";
import { useEffect, useState } from "react";
import Image from "next/image";



const Manufactorpartner = () => {

  const [logo, setLogo] = useState([])
  useEffect(() => {
    const bannerImage = async () => {
      try {
        const res = await fetch('https://adkinstruments.in/api/v1/manufacturer-partners')
        const result = await res.json();
        setLogo(result)
      }
      catch (error) {
        console.log("Banner", error)
      }
    }
    bannerImage()
  }, [])


  var settings = {
    arrows: true,
    speed: 9000,
    autoplayspeed: 0,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    cssEase: 'linear',
    infinite: true,
    focusOnSelect: false,
    initialSlide: 5,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <section className="manufactor-partner md:pt-[80px] md:pt-[80px] py-[50px]">
        <h2 className="text-center md:text-[26px] text-[22px] font-bold center mb-5">Manufacturer Partners
        </h2>
        <div className="w-full overflow-hidden">
          <div className="manufac_logo overflow-hidden flex py-[5px] w-full whitespace-nowrap">

            {/* <Slider {...settings}>
                    {
                        logo.concat(logo).map((img:any,ind:any) => {
                                return(                                    
                                    <div key={ind}>
                                    <div className="relative max-w-[150px] h-[120px] flip_partner_main cursor-pointer">
                                    <Image src={img.logo} key={`banner--${ind}`}  alt="partners" fill className="flip_partner_img"/>
                                    <div className="partner_flip_text">
                                    <p>Test</p>
                                    </div>
                                   </div>

                    </div>
                    )
                        })
                    }                       
                             
                    </Slider> */}
<div className="manufac_logo_inner flex items-center flex-nowrap w-auto whitespace-nowrap ">
            {
              logo.map((img: any, ind: any) => {
                return (
                  <div className="logos w-[250px] mx-auto block h-auto" key={ind}>
                    <div className="relative flip_partner_main cursor-pointer w-[125px] h-[125px] mx-auto">
                      <Image src={img.logo} key={`banner--${ind}`} alt="partners" fill className="flip_partner_img" />
                      <div className="partner_flip_text">
                        <p> </p>
                      </div>
                    </div>

                                 </div>
                )
              })
            }
            </div>
            <div className="manufac_logo_inner flex items-center flex-nowrap w-auto whitespace-nowrap ">

              {
                logo.map((img: any, ind: any) => {
                  return (
                    <div className="logos w-[250px] mx-auto block h-auto" key={ind++}>
                      <div className="relative flip_partner_main cursor-pointer w-[125px] h-[125px] mx-auto">
                        <Image src={img.logo} key={`banner--${ind}`} alt="partners" fill className="flip_partner_img" />
                        <div className="partner_flip_text">
                          <p> </p>
                        </div>
                      </div>


                    </div>
                  )
                })
              }
            </div>



          </div>

        </div>

      </section>
    </>
  )
}

export default Manufactorpartner;