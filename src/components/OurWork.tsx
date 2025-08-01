// VideoSlider.tsx
import { useEffect } from "react";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const businesses = [
  { title: "Realtor", video: "/videos/realtor1.mp4" },
  { title: "Restaurants", video: "/videos/comida2.mp4" },
  { title: "Barbershops", video: "/videos/output.mp4" },
];
export default function OurWork() {

  const splideOptions: Options = {
    autoplay: true,
    type: "loop",
    autoScroll: { pauseOnHover: true, pauseOnFocus: true, rewind: true, speed: 1.5 },
    arrows: false,
    pagination: false,
    slideFocus: true,
    perPage: 1,
    gap: "10px",
    rewindByDrag: true,
  };


  useEffect(() => {
    const containers = document.querySelectorAll(".videoContainer");
    const videos = document.querySelectorAll("video")
    const realtor = document.querySelector("#video-Realtor")
    realtor.currentTime = 20

    for (const video of videos) {

      video.playbackRate = 0.5
    }
    containers.forEach((container, index) => {
      const video = container.querySelector(`#video${index}`) as HTMLVideoElement;
      container.addEventListener("mouseenter", () => video?.play());
      container.addEventListener("mouseleave", () => video?.pause());
    });
  }, []);

  return (
    <section className="min-h-screen max-w-full w-auto py-8 flex flex-col items-center gap-8 px-4">
      <h3 className="text-4xl md:text-5xl">our <span className="bg-[#965d24]">work</span></h3>

      <div className="flex justify-center flex-wrap gap-8">
        {businesses.map((b, i) => (
          <article key={i} className="w-xs md:w-sm lg:w-lg min-h-[820px] flex flex-col group justify-center items-start relative videoContainer cursor-pointer">

            <div className="inset-0 absolute w-full bg-gradient-to-t from-black via-black/10 to-transparent z-10 group-hover:from-transparent" />

            <div className="inset-0 absolute w-full">
              <video autoPlay muted loop playsInline className="h-full object-cover video" id={`video-${b.title}`}>
                <source src={b.video} />
              </video>
            </div>
            <div className="z-50 p-2 flex flex-col mx-auto">
              <p className="mb-4 text-center text-3xl">{b.title}</p>
              <button className="bg-[#965D24] hover:bg-[#dfb968] p-4 text-sm cursor-pointer w-full uppercase font-bold">
                See {b.title} work
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* 

<div className="h-full lg:hidden">
        <Splide options={splideOptions} extensions={{ AutoScroll }} className="!h-full">
          {businesses.map((b, i) => (
            <SplideSlide key={i} className="">
              <article className="flex flex-col justify-center items-start relative videoContainer cursor-pointer h-full">
                <div className="inset-0 absolute w-full bg-black/50 z-10" />
                <div className="inset-0 absolute w-full bg-black/90 ">
                  <video muted loop playsInline className="h-full object-cover video" id={`video${i}`}>
                    <source src={b.video} className="" />
                  </video>
                </div>
                <div className="z-50 p-2 flex flex-col mx-auto">
                  <p className="mb-4 text-center text-3xl">{b.title}</p>
                  <button className="bg-[#965D24] hover:bg-[#dfb968] p-4 text-sm cursor-pointer w-full uppercase font-bold">
                    See {b.title} work
                  </button>
                </div>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      </div>








      */}
    </section>
  );
}


