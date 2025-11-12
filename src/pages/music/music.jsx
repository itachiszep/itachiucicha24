import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  const videos = [
    "CGyEd0aKWZE?si=O3s69_Vd5LjzD2Tj",
    "BS46C2z5lVE?si=TFgIGA3HhPXOOJHm",
  ];

  return (
    <div className="w-full h-screen bg-black text-white box-border m-0 p-0 overflow-hidden">
      <div className="w-full h-full bg-black flex flex-col items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-3 sm:px-4 md:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12 pt-20 md:pt-24 text-center overflow-y-auto">
        
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
  );
}