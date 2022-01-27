import { gsap } from "gsap";

const HeroAimation = () => {
	const hero = gsap.timeline({ ease: "power1.out" });

	/**
	 * (<) means the start of previous animation
	 * (<0.6) means 0.6s past the start of previous animation
	 */

	hero.from(".hero-img img", {
		duration: 0.4,
		opacity: 0,
		delay: 0.5,
	})
		.from(
			".hero-img img",
			{
				duration: 1.2,
				scale: 1.5,
			},
			"<"
		)
		.from(
			".hero-text img",
			{
				duration: 1.5,
				opacity: 0,
			},
			"<0.6"
		);
};
export default HeroAimation;
