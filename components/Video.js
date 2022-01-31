const Video = () => {
	return (
		<section>
			<div className="video-container">
				<div className="overlay"></div>
				<muted autoPlay loop src="./assets/mainVideo.mp4" />
				<div className="video-text">
					<div>
						<h1>High-fidelity audio</h1>
					</div>
					<div>
						<h1>Active Noise Cancellation with Transparency mode.</h1>
					</div>
					<div>
						<h1>Spatial audio for theatre‑like sound that surrounds you</h1>
					</div>
					<div>
						<h1>Stunning design with exceptional fit</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Video;
