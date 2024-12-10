'use client';
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";


const CollectionChildren = ({params}:any ) => {    
    const {_slug} = params;
    const [collections, setCollections] = useState([]);
    const [cateseo, setCateseo] = useState([]);
    const [loading, setLoading] = useState(true);


useEffect(() =>{
const categoryData = async () => {
    try{
        const res = await fetch(`https://adkinstruments.in/api/v1/categories/${_slug}`);
          const result = await res.json();
         const finalResult = await result.data;         
         setCollections(finalResult);
          setLoading(false)
      }
      catch(error){
          console.log("home Collection"+ error)
      }    
}
const categorySeo = async () => {
    try{
        const response = await fetch(`https://adkinstruments.in/api/v1/seo-data?path=categories/${_slug}`);
          const results = await response.json();
         const finalResults = await results.description;         
         setCateseo(finalResults);
          setLoading(false)
      }
      catch(error){
          console.log("home Collection"+ error)
      }    
}
    categoryData();
    categorySeo();
},[])

    return (
                <>
                <div className="container">
             <div className="heading md:py-8 py-4"></div>
            <div className="main_coll flex flex-wrap justify-center md:gap-8 gap-2">
                    {
                        collections.map((data:any) => {
                            return(
                                <div key={data.id+1} className="main w-[48%] relative md:max-w-[23%] max-w-full mb-0 md:mb-0">
                                <div className="relative after:bg-gradient-to-t from-[#00000065] to-[#00000065] after:content:'' after:absolute after:w-full after:h-full after:left-0 after:top-0  md:h-[400px] h-[250px]">
                                    {
                                     <Image src={data.media.original_url} fill loading='lazy' style={{objectFit: "cover"}}  alt="{data.name}"/>
                                      }                                
                                </div>
                                <div className="info absolute bottom-[30px] md:px-12 px-3 w-full text-center">   
                                {/* <p className="text-white py-3 px-4 text-[16px] font-bold rounded-md mx-auto inline-block md:mb-4 mb-2">{data.name}</p>                        */}
                             
                                     <Link href={data.children && data.children.length > 0 ? `/categories/${data.slug_url}`: `/categories/${data.slug_url}`} className="bg-white py-3 px-2 md:text-[16px] text-[14px] font-bold  rounded-md mx-auto inline-block border-2 border-[#251048]">{data.name}</Link>
                                    
                               <span className="none" slugtransfer={data.name}></span>   
                                </div>
                            </div>
                            )
                        })
                    }
                    </div>

{cateseo.length>0 && <>
                    <div className="main_accordian mt-3 md:mt-5 prod_destails">
                <div className="tab_btn border-b border-[bg-primary] relative">                    
                        <button className="md:text-[18px] text-[16px] font-bold border-b-2 border-solid border-secondary text-[bg-primary] p-3">Details</button>
                    
                    </div>
                    </div>
                    <div className="block">
                    <div className="prod-with-detail prod-detila flex md:flex-nowrap flex-wrap justify-left gap-8 mt-4 px-2">
                        {cateseo}
                    </div>
                </div>
</>
            }



                    </div>
                </>
    )
}
export default CollectionChildren;