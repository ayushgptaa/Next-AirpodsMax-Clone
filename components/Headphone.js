import HeadphoneAimation from "animations/HeadphoneAnimation";
import { useEffect } from "react";

const Headphone = () => {
	useEffect(() => {
		HeadphoneAimation();
	}, []);

	return (
		<section className="headphone-animation">
			<div className="sticky-container">
				<div className="sticky-wrapper">
					<canvas id="canvas"></canvas>
					<picture className="hp-wrapper">
						<img src="./assets/1.png" alt="Airpods Max" className="animation-img" />
						<img className="frame-img animation-img" src="./assets/2.png" alt="Airpods Max" />
					</picture>
				</div>
			</div>
		</section>
	);
};

export default Headphone;
