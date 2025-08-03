import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const InfiniteCarousel = () => {
  const splideOptions: Options = {
    type: "loop",
    autoScroll: {
      pauseOnHover: false, // Do not pause scrolling when hovering over the carousel
      pauseOnFocus: false, // Do not pause scrolling when the carousel is focused
      rewind: true, // Rewind to start when the end is reached
      speed: 1.5 // Scrolling speed
    },
    drag: false,
    arrows: false, // Hide navigation arrows
    pagination: false, // Hide pagination dots
    gap: "10px",
    perPage: 6, // o 3, ajusta según el tamaño deseado

  }

  const items = [
    { src: '/logos/wrenandwolflogo.jpg' },
    { src: '/logos/alchemylogo.jpg' },
    { src: '/logos/arcadebarlogo.jpg' },
    { src: '/logos/azgonewildlogo.jpg' },
    { src: '/logos/balancedpoollogo.jpg' },
    { src: '/logos/calitacosazlogo.jpg' },
    { src: '/logos/chicomalophxlogo.jpg' },
    { src: '/logos/cohootlogo.jpg' },
    { src: '/logos/eatatsocietylogo.jpg' },
    { src: '/logos/eatdrinklogo.jpg' },
    { src: '/logos/fiestmexicanalogo.jpg' },
    { src: '/logos/fmlogo.jpg' },
    { src: '/logos/freshsugarlogo.jpg' },
    { src: '/logos/guadalupelogo.jpg' },
    { src: '/logos/scene.selectlogo.jpg' },
    { src: '/logos/jemocmslogo.jpg' },
    { src: '/logos/joeyertzconstructionlogo.jpg' },
    { src: '/logos/lifelinebarberlogo.jpg' },
    { src: '/logos/linsgrandlogo.jpg' },
    { src: '/logos/oscarstacoshoplogo.jpg' },
    { src: '/logos/parrillalatinalogo.jpg' },
    { src: '/logos/rebelwinelogo.jpg' },
    { src: '/logos/restockavelogo.jpg' },
    { src: '/logos/salttacoslogo.jpg' },
    { src: '/logos/salttacosytequilalogo.jpg' },
    { src: '/logos/smarterswipelogo.jpg' },
    { src: '/logos/theclubscottsdalelogo.jpg' },
    { src: '/logos/visionbarbershoplogo.jpg' },
  ]

  return (
    <div className="flex flex-col items-center py-18 space-y-8 max-w-[100vw] text-white">
      <div className="px-24 flex flex-col self-start gap-8 w-full">
        <span className="text-5xl font-fancy text-black self-start">03</span>
        <h1 className="font-fancy text-4xl md:text-5xl  self-center text-black">voices we've <span className="bg-[#965d24] text-white"> helped amplify </span></h1>
      </div>
      <div className="">
        <Splide options={splideOptions} extensions={{ AutoScroll }} className="max-w-[100vw]">
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <img src={item.src} alt={`Logo ${index + 1}`} className="" />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default InfiniteCarousel
