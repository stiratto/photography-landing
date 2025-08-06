import { CircleQuestionMark, Utensils, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner";
import { urlMp4ToWebm } from "@/lib/utils"

const Hero = () => {
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
			setTimeout(() => { }, 1000)
			localStorage.removeItem("form_submitted")
		}
	}, [])

	return (
		<div className="text-center w-full h-screen relative px-4 text-light py-8">
			<div className="bg-black/60 w-full h-full absolute top-0 left-0 z-10 p-0"></div>

			<div className="absolute top-0 left-0 w-full h-full z-0 flex justify-center items-center gap-4">
				<video
					autoPlay
					muted
					preload="none"
					loop
					poster="https://res.cloudinary.com/dhixihrqm/image/upload/ff537d6f-6df9-4041-85b8-41c23f2e9984.png"
					playsInline
					className="object-cover md:object-contain h-full md:max-w-[28%]">
					<source
						src={urlMp4ToWebm(`${import.meta.env.AWS_URL_SERVICES}/mp4/comida7.mp4`)}
					/>
				</video>
				<video
					autoPlay
					muted
					preload="none"
					loop
					playsInline
					className="hidden md:block h-full max-w-[28%] ">
					<source
						src={urlMp4ToWebm(`${import.meta.env.AWS_URL_SERVICES}/mp4/barber2.mp4`)}
					/>
				</video>
				<video
					autoPlay
					muted
					preload="none"
					loop
					playsInline className="hidden md:block h-full max-w-[28%] ">
					<source
						src={urlMp4ToWebm(`${import.meta.env.AWS_URL_SERVICES}/mp4/comida4.mp4`)}
					/>
				</video>
			</div>



			<div
				className="flex flex-col md:flex-row justify-between items-start w-full h-full z-50 relative"
			>
				<div className="flex flex-col justify-center items-center w-full h-full">
					<h1
						className="!font-fancy font-extrabold text-[clamp(2rem,5vw,5rem)] text-[#DFB968] font-normal text-left"
					>
						Crafting the visual <br /> side of your business
					</h1>
					<p className="text-lg text-white/90 max-w-2xl mt-6 text-center leading-relaxed">
						We are a creative agency focused on crafting high-quality, viral visual content and digital marketing strategies that elevate any business in the online world.

					</p>
				</div>
				<div
					className="flex flex-col lg:flex-row items-center justify-around w-full h-full z-50 relative"
				>
					<div className="max-w-md">
						{/* Primary CTA Section */}
						<div className="mb-8">
							<h2 className="text-3xl font-bold mb-2 text-[#DFB968]">Ready to elevate your brand?</h2>
							<p className="text-white/80 mb-6">Get a free consultation and see how we can transform your business visuals.</p>
							<h3 className="text-xl mb-4 text-white/90">Choose your business type:</h3>
							<div className="flex flex-col gap-3">

								<a
									href="https://form.typeform.com/to/jfXTmXan"
									target="_blank"
									className="bg-[#965D24] hover:bg-[#DFB968] transition-all duration-300 p-3 text-sm flex gap-3 items-center cursor-pointer rounded-lg group"
								>
									<Utensils className="" />
									Restaurant & Food Service
									<ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
								</a>

								<a
									href="/form"
									className="bg-[#965D24] hover:bg-[#DFB968] transition-all duration-300 p-3 text-sm flex gap-3 items-center cursor-pointer rounded-lg group"
								>
									<CircleQuestionMark className="" />
									Other Business Type
									<ArrowRight size={16} className="ml-auto group-hover:translate-x-1 transition-transform" />
								</a>
							</div>

						</div>


						<div className="border-t border-white/20 pt-6">

							<a
								href="/work"
								className="bg-[#DFB968] hover:bg-[#965D24] transition-all duration-300 p-4 px-8 text-lg font-semibold flex gap-3 items-center cursor-pointer rounded-lg group shadow-lg"
							>
								Explore our work
								<ArrowRight className="group-hover:translate-x-1 transition-transform" />
							</a>

						</div>

					</div>
				</div>
			</div>
		</div >



	)
}


export default Hero
