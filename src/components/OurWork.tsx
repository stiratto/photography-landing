import { useEffect } from "react";
const businesses = [
  {
    title: "restaurants",
    video:
      "https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/copy_573B2327-A889-4BEF-AF6D-8364B0C3565E_fizguf.mp4",
  },
  {
    title: "barbershops",
    video:
      "https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/barbershop1_o7qvdp",
  },
  {
    title: "other",
    video:
      "https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/copy_23EE74BC-9990-47BD-B6AB-F542E9F1C088_xty3qo.mp4",
  },
];


export default function OurWork() {
  useEffect(() => {
    const containers = document.querySelectorAll(".videoContainer");
    const videos = document.querySelectorAll("video");

    if (videos[0]) videos[0].currentTime = 20;

    for (const video of videos) {
      video.playbackRate = 0.5;
    }

    containers.forEach((container) => {
      const video = container.querySelector("video");
      container.addEventListener("mouseenter", () => video?.play());
      container.addEventListener("mouseleave", () => video?.pause());
    });

  }, []);

  return (
    <section className="max-w-full w-auto py-8 flex flex-col justify-center items-center gap-8 px-4 text-black px-4 md:px-24">
      <span className="font-fancy text-5xl self-end">02</span>
      <h3 className="text-4xl md:text-5xl text-black font-fancy">
        your brand <span className="bg-[#965d24] text-white">captured</span>
      </h3>

      <div className="grid grid-cols-1 grid-rows-none md:grid-cols-5 md:grid-rows-6 gap-6 work-container max-w-[1440px] mx-auto">
        <article className="aspect-[9/16] md:aspect-auto md:col-span-3 md:row-span-6 w-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
          <a
            href="/work/restaurants"
            className="group relative block h-full w-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            >
              <source src="https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/copy_573B2327-A889-4BEF-AF6D-8364B0C3565E_fizguf.mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 rounded-2xl" />
            <div className="absolute bottom-0 p-6 z-20">
              <p className="text-3xl md:text-4xl font-bold text-white mb-4">restaurants</p>
              <button className="bg-[#965D24] hover:bg-[#dfb968] p-3 text-sm font-semibold uppercase rounded-md">
                See restaurants work
              </button>
            </div>
          </a>
        </article>

        <article className=" aspect-[9/16] md:aspect-auto md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <a
            href="/work/barbershops"
            className="group relative block h-full w-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            >
              <source src="      https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/barbershop1_o7qvdp" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 rounded-2xl" />
            <div className="absolute bottom-0 p-4 z-20">
              <p className="text-2xl font-semibold text-white mb-2">barbershops</p>
              <button className="bg-[#965D24] hover:bg-[#dfb968] p-2 text-sm font-semibold uppercase rounded-md">
                See barbershops work
              </button>
            </div>
          </a>
        </article>

        {/* Video 3 abajo */}
        <article className="aspect-[9/16] md:aspect-auto md:col-span-2 md:row-span-3 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
          <a
            href="/work/other"
            className="group relative block h-full w-full"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
            >
              <source src="      https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/copy_23EE74BC-9990-47BD-B6AB-F542E9F1C088_xty3qo.mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 rounded-2xl" />
            <div className="absolute bottom-0 p-4 z-20">
              <p className="text-2xl font-semibold text-white mb-2">other</p>
              <button className="bg-[#965D24] hover:bg-[#dfb968] p-2 text-sm font-semibold uppercase rounded-md">
                See other work
              </button>
            </div>
          </a>
        </article>
      </div>

    </section>
  );
}

