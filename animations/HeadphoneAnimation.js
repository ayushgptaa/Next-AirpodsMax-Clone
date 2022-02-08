import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeadphoneAimation = () => {
	const wrapper = document.querySelector(".sticky-wrapper");
	const canvas = document.getElementById("canvas");
	const context = canvas.getContext("2d");
	// const hpwrapper = document.querySelector(".hp-wrapper");
	const animationimg = document.querySelector(".animation-img");
	const frameimg = document.querySelector(".frame-img");

	const frameCount = 45;
	const currentFrame = index => `./assets/Animation_images/medium_${index.toString().padStart(4, "0")}.jpg`;
	canvas.width = 600;

	const images = [];
	const airpods = {
		frame: 0,
	};

	function render() {
		const h = images[0].naturalHeight;
		const w = images[0].naturalWidth;
		const aspect = h / w;
		canvas.height = aspect * canvas.width;
		context.drawImage(images[airpods.frame], 0, 0, canvas.width, canvas.height);
	}

	for (let i = 0; i <= frameCount; i += 1) {
		const img = new Image();
		img.src = currentFrame(i);
		images.push(img);
	}

	images[0].onload = render;

	const t1 = gsap.timeline({
		scrollTrigger: {
			trigger: ".sticky-wrapper",
			scrub: 0.5,
			start: "top 45%",
			end: "center 49px",
			pin: wrapper,
			// markers: true,
		},
	});

	t1.to(airpods, {
		snap: "frame",
		frame: frameCount - 1,
		onUpdate: render,
	});
	t1.to(
		".sticky-wrapper",
		{
			onComplete: () => {
				animationimg.style.visibility = "visible";
				frameimg.style.visibility = "visible";
				canvas.style.visibility = "hidden";
			},
			scale: 1.5,
			duration: 1,
		},
		"<"
	);
	t1.to(
		".frame-img",
		{
			top: "40%",
			duration: 1,
			onReverseComplete: () => {
				animationimg.style.visibility = "hidden";
				frameimg.style.visibility = "hidden";
				canvas.style.visibility = "visible";
			},
		},

		">"
	);
};

export default HeadphoneAimation;
