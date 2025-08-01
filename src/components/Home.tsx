import { CircleQuestionMark, Utensils } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";

const Home = () => {
	useEffect(() => {
		if (localStorage.getItem("form_submitted") === "true") {
			toast("The form was sent! We will try to contact you as soon as possible :)", {
				style: {
					backgroundColor: '#965d24',
					color: 'white',
					borderRadius: 0,
					border: 0
				}
			})
			localStorage.clear()
		}
	}, [])
	return (
		<div className="text-center w-full h-screen relative px-4">
			<div className="bg-black/70 w-full h-full absolute top-0 left-0 z-10 p-0"></div>

			<div className="absolute top-0 left-0 w-full h-full z-0 flex">
				<video autoPlay muted loop className="md:w-1/2 h-full object-cover">
					<source src="/videos/output.mp4" type="video/mp4" />
				</video>
				<video autoPlay muted loop className="md:w-1/2 md:h-full md:object-cover">
					<source src="/videos/comida-video.mp4" type="video/mp4" />
				</video>
			</div>

			<div
				className="flex flex-col items-center justify-around w-full h-full z-50 relative"
			>
				<h1
					className="mt-24 font-extrabold text-[clamp(3rem,4vw,5rem)] text-[#DFB968] uppercase text-left"
				>
					Leon Photography
				</h1>
				<p
					className="relative text-sm uppercase mt-8 max-w-sm text-left text-gray-500 border-b-1 border-gray-500"
				>
					Videos, websites, social media, branding delivery apps — everything your
					business needs
				</p>
				<div
					className="flex flex-col lg:flex-row items-center justify-around w-full h-full z-50 relative"
				>
					<div>
						<p className="text-sm/8 md:text-xl/8 max-w-xl text-left">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae nobis
							facilis est corporis, perferendis aperiam maiores quidem ullam!
						</p>
					</div>
					<div className="">
						<h2 className="text-4xl uppercase mb-4">What's your business?</h2>
						<div className="flex flex-col gap-4">
							<a
								href="https://form.typeform.com/to/jfXTmXan"
								target="_blank"
								className="bg-[#965D24] p-4 text-sm flex gap-2 items-center cursor-pointer hover:bg-[#DFB968]"
							><Utensils /> Restaurant</a
							>
							<a
								href="/form"
								className="bg-[#965D24] p-4 text-sm flex gap-2 items-center cursor-pointer hover:bg-[#DFB968]"
							><CircleQuestionMark /> Other
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>



	)
}


export default Home
