"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const catProducts = ({ params }: any) => {
    console.log("params is", params);

    const pathname = usePathname();
    const { product } = params;
    const { _slug } = params;        
        
    const [allProduct, setallProduct] = useState([]);
    const [subcat, setSubcat] = useState([]);
    const [currentcat, setCurrentcat] = useState([]);    
    const [filters, setFilters] = useState([]);    
     const subcategory = async () => {
        try{
            const res = await fetch(`https://adkinstruments.in/api/v1/categories/${_slug}`);
              const result = await res.json();
             const finalResult = await result.data;
             setSubcat(finalResult);
          }
          catch(error){
              console.log("home Collection"+ error)
          }    
    }

    const subcatg = () => {
        const catg = pathname.split('/');
        const currentcatname = catg[catg.length - 1];
        const allname = currentcatname.replaceAll('%20',' ')
        return allname
}

var prevCat = subcatg();
console.log("prevCat",prevCat+ " Pathname " +params);

    useEffect(() => {        
        const data = async () => {
            try {
                const data = await fetch(`https://adkinstruments.in/api/v1/categories/particle-counter-meter/${product}`);
                const res = await data.json();
                setallProduct(await res.data);
            }
            catch (err) {
                console.warn("category product list", err);
            }
        }        

        subcatg()
        data()
        subcategory()        

    }, [])


    const filteredData = subcat.filter(item => item.slug !== prevCat);

        
    return (
        <div className="container">
             <div className="heading md:py-8 py-4">
            </div>
            {/* <div className="main_coll flex flex-wrap justify-center gap-8"> */}
            <div className="flex flex-wrap">
            <div className="main_coll justify-between gap-8 md:w-[25%] w-full">
                        <h2 className="mb-3 font-bold">Download Brochures</h2>
                    <ul className="border-gray-500 border color-grey-100 p-2 max-w-[80%] rounded-sm">
               
                    {
                        // subcat.map((datas:any)=>{                            
                            filteredData.map((datas:any)=>{
                            return(                                
                    <li  className="mb-2 border-b last:border-b-0 border-gray-500 hover:color-black color-grey-100 pb-1 last:mb-0 last:pb-0">                                
                                <Link className="flex items-center gap-3" href={datas.slug}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-grid-fill" viewBox="0 0 16 16">
                                <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z"></path>
                            </svg>
                            {datas.name}
                            </Link>
                            </li>
                            )
                        })
                    }
                        </ul>
            </div>

            <div className="main_coll flex flex-wrap justify-between md:gap-8 gap-3 md:w-[72%] w-full md:mt-0 mt-5">
                {allProduct.map((data: any) => {
                    return (
                        <div key={data.id + 1} className="main w-full relative md:max-w-[30%] max-w-[48%] mb-0 md:mb-0">
                            <Link href={`/products/${data.slug}`}>
                            <div className="relative after:bg-gradient-to-t from-[#00000065] to-[#00000065] after:content:'' after:absolute after:w-full after:h-full after:left-0 after:top-0  md:h-[400px] h-[250px]">
                                {
                                    <Image src={data.media.original_url} fill loading='lazy' style={{ objectFit: "cover" }} alt="{data.name}" />
                                }
                            </div>
                            <div className="info absolute bottom-[20px] px-3 w-full text-center">                                
                                <p className="bg-white py-3 px-4 md:text-[14px] text-[12px] font-bold rounded-md mx-auto inline-block border-2 border-[#251048] leading-5">{data.name}
                                {
                                    data.show_price && data.show_price == 1? (<span className="block text-[14px]">₹{data.total_amount} <span className="text-[12px] ml-1"><del>₹{data.regular_amount}</del></span></span>): ''
                                }                               

                                </p>
                                  
                                
                            </div>
                        </Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
        </div>
    )
};

export default catProducts;