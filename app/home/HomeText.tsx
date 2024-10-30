import { useEffect, useState } from "react";

const Hometext = () => {
  const [allData, setAlldata] = useState([]);
  useEffect(() => {
    const allProducts = async () => {
        try {
            const res = await fetch(`https://adkinstruments.in/api/v1/homepage-content`);
            const result = await res.json();
            setAlldata(result);
        }
        catch (err) {
            console.log("PDP page  " + err);
        }
    }

    allProducts();
}, [])

        return(          
            <section className="md:mt-[40px] mt-[40px] md:mb-[20px]  md:py-[50px] py-[40px] md:max-w-[1200px] w-full md:mx-auto">
            <div className="container text-center ">
             <h2 className="text-center md:text-[26px] font-bold relative z-10 text-black">ADK INSTRUMENTS</h2>
             <h3 className="text-center md:text-[20px] mb-4  relative z-10 text-black mt-[6px] md:mt-0">Setting standards, today and tomorrow.</h3>
                <div className="home_text relative z-10 text-black" dangerouslySetInnerHTML={{ __html: allData && allData.html_content }}></div>
            </div>
            </section>
        )

}

export default Hometext;