// import Image from "next/image";
import { useEffect } from "react";
import { gsap } from "gsap";

const Hero = () => {
	useEffect(() => {
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
	}, []);

	return (
		<main>
			<section className="hero">
				<picture className="hero-img">
					<img src="assets/Hero.png" alt="Airpods Max" />
				</picture>
				<picture className="hero-text" style={{ zIndex: -9 }}>
					<img src="/assets/Herotext.jpeg" alt="Airpods" />
				</picture>
			</section>
			<p>
				Introducing AirPods Max — a perfect balance of exhilarating high-fidelity audio and the effortless magic
				of AirPods. The ultimate personal listening experience is here.
			</p>
		</main>
	);
};

export default Hero;
