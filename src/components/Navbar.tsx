import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
} from "./ui/sheet";
import "@/styles/index.css"
import { NavItems } from "@/lib/consts";

export default function Navbar() {

  return (
    <nav className="flex flex-col items-end p-4 fixed top-0 w-full z-[100]">
      <Sheet>
        <SheetTrigger className="">
          <button aria-label="Toggle mobile menu" className="hamburger" >
            <span className="sr-only">Toggle navigation</span>
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="min-w-[200px] md:min-w-[700px] bg-[#000000] text-white border-none z-[1000]">
          <SheetHeader>
          </SheetHeader>
          <ul className="flex flex-col gap-4 p-4 text-[clamp(2rem,3vw,5rem)] uppercase font-extrabold text-white">
            {NavItems.map((item) => (
              <li>
                <a href={item.href} className="text-[#dfb968] tracking-wider">{item.text}</a>

              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav >
  );
}
