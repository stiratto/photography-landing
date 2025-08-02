// VideoSlider.tsx
import { useEffect } from "react";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const businesses = [
  { title: "restaurants", video: "/videos/comida2.mp4" },
  { title: "barbershops", video: "https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/barbershop1_o7qvdp" },
  { title: "other", video: "https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/copy_23EE74BC-9990-47BD-B6AB-F542E9F1C088_xty3qo.mp4" },
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
    videos[0].currentTime = 20

    for (const video of videos) {
      video.playbackRate = 0.5
    }

    containers.forEach((container, index) => {
      const video = container.querySelector<HTMLVideoElement>(`#video${index}`)
      container.addEventListener("mouseenter", () => video?.play());
      container.addEventListener("mouseleave", () => video?.pause());
    });
  }, []);

  return (
    <section className="min-h-screen max-w-full w-auto py-8 flex flex-col items-center gap-8 px-4 text-white">
      <h3 className="text-4xl md:text-5xl text-black">our <span className="bg-[#965d24] text-white">work</span></h3>

      <div className="flex justify-center flex-wrap gap-8">
        {businesses.map((b, i) => (
          <article key={i} className="">
            <a href={`/work/${b.title.toLowerCase()}`} className="w-xs md:w-sm lg:w-lg min-h-[820px] flex flex-col group justify-center items-start relative videoContainer cursor-pointer">

              <div className="inset-0 absolute w-full bg-gradient-to-t from-black via-black/10 to-transparent z-10 group-hover:from-transparent  " />

              <div className="inset-0 absolute w-full rounded-xl">
                <video autoPlay muted loop playsInline className="h-full w-full object-cover video" id={`video-${b.title}`}>
                  <source src={b.video} />
                </video>
              </div>
              <div className="z-50 p-2 flex flex-col mx-auto ">

                <p className="mb-4 text-center text-3xl">{b.title}</p>
                <button className="bg-[#965D24] hover:bg-[#dfb968] p-4 text-sm cursor-pointer w-full uppercase font-bold">
                  See {b.title} work
                </button>
              </div>
            </a>
          </article>
        ))}
      </div>


    </section>
  );
}


