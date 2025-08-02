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
        side="right"
        className="bg-black z-1000"
      >
        <SheetHeader />
        <ul
          className="flex flex-col gap-4 p-4 text-[clamp(2rem,3vw,5rem)] uppercase font-extrabold text-white"
        >
          {
            NavItems.map((service, index) => (
              <li key={index}>
                <a href={`${service.href}`} className="text-[#dfb968] tracking-wider">
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
