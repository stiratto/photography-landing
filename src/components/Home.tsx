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
			setTimeout(() => { }, 1000)
			localStorage.removeItem("form_submitted")
		}
	}, [])

	return (
		<div className="text-center w-full h-screen relative px-4 text-white">
			<div className="bg-black/60 w-full h-full absolute top-0 left-0 z-10 p-0"></div>
			<div className="absolute top-0 left-0 w-full h-full z-0 flex">
				<video autoPlay muted loop className="block w-full md:h-full object-cover">
					<source src="https://res.cloudinary.com/dhixihrqm/video/upload/q_auto,f_auto:video/w_1280/copy_23EE74BC-9990-47BD-B6AB-F542E9F1C088_xty3qo.mp4" type="video/mp4" />
				</video>
			</div>

			<div
				className="flex flex-col md:flex-row justify-between items-start w-full h-full z-50 relative"
			>
				<div className="flex flex-col justify-center items-center w-full h-full">
					<h1
						className="!font-fancy font-extrabold text-[clamp(3rem,5vw,5rem)] text-[#DFB968] font-normal text-left"
					>
						Crafting the visual <br /> side of your business
					</h1>
				</div>
				<div
					className="flex flex-col lg:flex-row items-center justify-around w-full h-full z-50 relative"
				>
					<div className="">
						<h2 className="text-4xl mb-4">what's your business?</h2>
						<div className="flex flex-col gap-4">
							<a
								href="https://form.typeform.com/to/jfXTmXan"
								target="_blank"
								className="bg-[#965D24] p-4 text-sm flex gap-2 items-center cursor-pointer hover:bg-[#DFB968] rounded-lg"
							><Utensils /> Restaurant

							</a
							>
							<a
								href="/form"
								className="bg-[#965D24] p-4 text-sm flex gap-2 items-center cursor-pointer hover:bg-[#DFB968] rounded-lg"
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
