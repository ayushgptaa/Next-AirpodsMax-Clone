// import Image from "next/image";
import { useEffect } from "react";

import HeroAimation from "animations/HeroAnimation";

const Hero = () => {
	useEffect(() => {
		HeroAimation();
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
