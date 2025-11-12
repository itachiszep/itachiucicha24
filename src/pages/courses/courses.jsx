import React from 'react'

const dziendobrykali = () => {
  const videos = [
    "lfmg-EJ8gm4?si=FBK2HJHwIlmX2dE4",
    "CgkZ7MvWUAA?si=M44-94LmDgoV-jlf",
    "ix9cRaBkVe0?si=5rICmERNtKfPNR58",
    "wxznTygnRfQ?si=bORZ3BJQH0nWdSdN",
    "c2M-rlkkT5o?si=vQUXcWc-lV_W-PSJ",
    "-TkoO8Z07hI?si=zAQpsP800usQ95Kh",
    "CBYHwZcbD-s?si=2HLzc5kctV9rCEt5",
    "xTtL8E4LzTQ?si=4OaVH5_bHp-7CDZF",
    "HGTJBPNC-Gw?si=cy9M5IipFcbknjP4"
  ];

  return (
    <div className="bg-black text-white box-border m-0 p-0">
      <div className="w-full bg-black flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 pt-20 md:pt-24 text-center">
        
        {/* Obraz */}
        
        {/* Iframy jedno pod drugim */}
        <div className="w-full flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl">
          {videos.map((videoId, index) => (
            <div 
              key={index}
              className="w-full aspect-video rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <iframe 
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?controls=1&modestbranding=0`}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>
        
      </div>
    </div>  
  )
}

export default dziendobrykali