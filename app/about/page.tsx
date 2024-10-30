import Image from 'next/image';

const About = () => {
    return (
        <div className="about_main">
            <div className="about_banner">
                <Image src="/img/high-Values1380x355___media_library_original_1380_355.png" width="1024" height="100" className="w-full" alt="About banner"/>
            </div>
            <div className="container">
                <div className="about_text md:mt-10 mt-5">
                <p className=' text-[18px] leading-7 mb-5'>ADK Instruments has a long story to tell all its patrons! The company was founded, for the sole mission to simplify all the retail needs of industrial enterprises. With the depleting energy resources and focus on sustainability and renewable energy, it’s no secret that the needs of the world are changing.</p>
                <p className=' text-[18px] leading-7 mb-5'>They say, change is the only constant, and in our bid to be the innovators and drivers of change, we have introduced a slew of products, to help solve the needs of industrial enterprises. Our products are meticulously crafted, undergo thorough testing, and are engineered with precision. Moreover, ADK Instruments is a one-stop solution to all the retail needs of all industrial enterprises.</p>
                <p className=' text-[18px] leading-7 mb-5'>Our desire to work runs deep in our veins, and we craft everything with a fresh approach, energy and enthusiasm. Apart from this, knowledge sharing and learning never stops, we are always willing to learn from our patrons, and we are all ears to understanding and learning about their needs.</p>
                <p className=' text-[18px] leading-7 mb-5'>Our range of products can be used in various sectors, like meteorology, water quality testing, metric measurements and outdoor activities.</p>
                <p className=' text-[18px] leading-7 mb-5'>Our focus has always been to set new standards in customer satisfaction, and we live by that vision every single day! And with this vision, our goal is to set precedents in innovation, quality, and customer satisfaction. And we won’t stop, until we achieve that goal.</p>
                <p className=' text-[18px] leading-7'>As a token of gratitude, we would like to thank all our patrons, without who, we would not have imagined where we are. And we pledge to stand united with everybody, who want to be innovators, and work towards a future that’s not just sustainable, but also bright.</p>
                </div>

                <div className='md:flex-nowrap flex-wrap text_bottom flex items-center justify-between md:mt-[80px] mt-[40px] gap-6'>
                <div className='column text-center border border-black/7 p-6 rounded-md cursor-pointer hover:bg-secondary group'>
                        <div><svg className='group-hover:stroke-white w-[50px] h-[50px] block mx-auto mb-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M448 256A192 192 0 1 0 64 256a192 192 0 1 0 384 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160zm0-224a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM224 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" className='fill-[#4354a4] group-hover:fill-[#fff]'/></svg></div>
                    <h2 className='font-bold text-[24px] group-hover:text-white'>Focus</h2>
                    <p className='group-hover:text-white'>We have a 100% commitment to making all our sites the best they can possible be, no matter what it takes to get there.</p>
                    </div>
                    <div className='column text-center border border-black/7 p-6 rounded-md cursor-pointer hover:bg-secondary group'>
                    <svg  className='w-[50px] h-[50px] block mx-auto mb-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"  className='fill-[#4354a4] group-hover:fill-[#fff]' /></svg>
                    <h2 className='font-bold text-[24px] group-hover:text-white'>Passion</h2>
                    <p className='group-hover:text-white'>Our desire to produce good work runs deep- that's what lets us handle every project with fresh energy and enthusiasm.</p>
                    </div>
                    <div className='column text-center border border-black/7 p-6 rounded-md cursor-pointer hover:bg-secondary group'>
                    <svg className='w-[50px] h-[50px] block mx-auto mb-[15px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"  className='fill-[#4354a4] group-hover:fill-[#fff]' /></svg>
                    <h2 className='font-bold text-[24px] group-hover:text-white'>Empathy</h2>
                    <p className='group-hover:text-white'>While we share our knowledge and experience, we listen hard to understand your requirement and your needs.

</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;