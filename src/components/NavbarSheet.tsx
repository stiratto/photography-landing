import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { NavItems } from "@/lib/consts"

export const NavbarSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <p className="hamburger"></p>
        <span className="sr-only">Toggle navigation</span>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="bg-transparent z-1000 border-none shadow-none"
      >
        <SheetTitle className="sr-only">Navigation menu</SheetTitle>
        <SheetHeader />
        <ul
          className="flex flex-col gap-4 p-4 text-[clamp(1rem,3vw,2rem)] font-extrabold text-white"
        >
          {
            NavItems.map((service, index) => (
              <li key={index}>
                <a href={`${service.href}`} className="text-[#dfb968] tracking-wider hover:ml-4 transition-all">
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
