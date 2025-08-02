import { Sheet, SheetTrigger, SheetContent, SheetHeader } from "@/components/ui/sheet"
import { NavItems } from "@/lib/consts"

export const NavbarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <button aria-label="Toggle mobile menu" className="hamburger">
          <span className="sr-only">Toggle navigation</span>
        </button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-black z-1000 border-none"
      >
        <SheetHeader />
        <ul
          className="flex flex-col gap-4 p-4 text-[clamp(1rem,3vw,2rem)] font-extrabold text-white"
        >
          {
            NavItems.map((service, index) => (
              <li key={index}>
                <a href={`${service.href}`} className="text-[#dfb968] tracking-wider hover:underline ">
                  {service.text}
                </a>
              </li>
            ))
          }
        </ul>
      </SheetContent>
    </Sheet >

  )
}
