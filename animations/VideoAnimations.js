import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoAnimation = () => {
	const video = document.getElementsByTagName("video");

	gsap.timeline({
		scrollTrigger: {
			trigger: video,
			pin: video,
			pinSpacing: false,
			endTrigger: ".video-text",
			start: "top top",
			end: "bottom 60%",
		},
	}).to(".overlay", {
		scrollTrigger: {
			trigger: ".video-container",
			scrub: 0.5,
			start: "top 90%",
			end: "20% 90%",
		},
		opacity: 0,
		duration: 2,
	});

	const targets = document.querySelectorAll(".video-text li");

	targets.forEach(target => {
		gsap.timeline({
			defaults: { duration: 1 },
			scrollTrigger: {
				trigger: target,
				scrub: 0.5,
				snap: 0.4,
				start: "top 65%",
				end: "50% 40%",
				ease: "power3.out",
			},
		})
			.fromTo(target, { y: 20 }, { y: -30, duration: 1 })
			.from(target, { opacity: 0, duration: 0.4 }, 0)
			.to(target, { opacity: 0, duration: 1.5, y: -100 }, 2);
	});
};

export default VideoAnimation;
