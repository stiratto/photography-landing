import { Splide, SplideSlide } from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/core';
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";

const InfiniteCarousel = () => {
  const splideOptions = {
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
    fixedWidth: '245px', // Fixed width for each slide
    gap: "10px"
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
    <div className="relative flex flex-col items-center py-18 space-y-4">
      <h1 className="text-4xl md:text-5xl">Businesses <span className="text-[#dfb968]">we've worked</span> with</h1>
      {/* Container for the carousel with a fixed width */}
      <div className="w-1/2">
        {/* Splide component with configuration options */}
        <Splide options={splideOptions} extensions={{ AutoScroll }}>
          {items.map((item, index) => (
            <SplideSlide key={index}>
              <img src={item.src} alt={`Logo ${index + 1}`} className="w-[7rem] " />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  )
}

export default InfiniteCarousel
