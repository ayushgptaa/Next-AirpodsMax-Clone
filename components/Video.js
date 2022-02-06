import { useEffect } from "react";
import VideoAnimation from "animations/VideoAnimations";

const Video = () => {
	useEffect(() => {
		VideoAnimation();
	}, []);

	return (
		<section>
			<div className="video-container">
				<div className="overlay"></div>
				<video muted autoPlay loop src="/assets/mainVideo.mp4" />
				<ul className="video-text">
					<li>
						<p>High-fidelity audio</p>
					</li>
					<li>
						<p>Active Noise Cancellation with Transparency mode</p>
					</li>
					<li>
						<p>Spatial audio for theatre‑like sound that surrounds you</p>
					</li>
					<li>
						<p>Stunning design with exceptional fit</p>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default Video;
