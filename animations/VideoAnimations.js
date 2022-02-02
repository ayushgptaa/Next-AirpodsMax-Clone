import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const VideoAnimation = () => {
	gsap.registerPlugin(ScrollTrigger);

	const video = document.getElementsByTagName("video");

	gsap.timeline({
		scrollTrigger: {
			trigger: video,
			pin: video,
			pinSpacing: false,
			endTrigger: ".video-text",
			start: "top top",
			end: "bottom 90%",
			markers: true,
		},
	}).to(".overlay", {
		scrollTrigger: {
			trigger: ".video-container",
			scrub: 0.5,
			start: "top 90%",
			end: "20% 90%",
		},
		opacity: 0,
	});

	// const targets = document.querySelectorAll(".video-text div");

	// targets.forEach(target => {
	// 	gsap.timeline({
	// 		defaults: { duration: 1 },
	// 		scrollTrigger: {
	// 			trigger: target,
	// 			scrub: true,
	// 			start: "top 50%",
	// 			end: "50% center",
	// 			pin: true,
	// 			pinSpacing: false,
	// 			// markers: true,
	// 		},
	// 	})
	// 		.fromTo(target, { y: 25, opacity: 0 }, { y: -50, opacity: 1, duration: 1 })
	// 		.from(target, { opacity: 0, duration: 0.2 })
	// 		.to(target, { opacity: 0, duration: 1 }, 0.8);
	// });
};

export default VideoAnimation;
