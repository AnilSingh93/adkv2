const Videos = () => {

    const Video = [
        {
            "url":"https://www.youtube.com/embed/FdEGoH6ZGLY"

        },/*
        {
            "url":"https://www.youtube.com/embed/UdMyJ1AmkFY?si=5VwNi4QI-mWsUX3q&autoplay=1&mute=1"
        }
        */
    ]

     
    return(
        <div className="md:pt-[80px] pt-[40px]">
           {    
                Video.map((data:any, index:number) => {
                   return(
                    <div  key={index+21}>
                     <iframe src={data.url} title="YouTube video player" allowFullScreen className="w-full md:h-[85vh] h-[35vh]"></iframe>  

                        </div>
                   )
                })    
            }
            
        </div>

    )

}

export default Videos;