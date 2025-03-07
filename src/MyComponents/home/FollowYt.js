import React, { useState } from "react";
import "../../assets/css/bootstrap.min.css";

const videoData = [
  {
    id: 1,
    title: "Difference Between Migraine and Sinus Headache",
    thumbnail: "https://via.placeholder.com/300", // Replace with actual thumbnail
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    id: 2,
    title: "What is Septoplasty Surgery?",
    thumbnail: "https://via.placeholder.com/300",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    id: 3,
    title: "Use of Audocentric Hearing Aid",
    thumbnail: "https://via.placeholder.com/300",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
  {
    id: 4,
    title: "Types of Septoplasty Surgery",
    thumbnail: "https://via.placeholder.com/300",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_4",
  },
];

const YouTubeSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videoData[0]); // Default video

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">FOLLOW US ON YOUTUBE</h2>
      <div className="row">
        {/* Left Side - Main Video */}
        <div className="col-md-7">
          <div className="video-container p-3 bg-white shadow rounded">
            <iframe
              width="100%"
              height="350"
              src={selectedVideo.videoUrl}
              title="YouTube video"
              frameBorder="0"
              allowFullScreen
              className="rounded"></iframe>
            <h5 className="mt-3 text-success">{selectedVideo.title}</h5>
          </div>
        </div>

        {/* Right Side - Video List */}
        <div className="col-md-5">
          <div
            className="video-list-container p-3 bg-white shadow rounded overflow-auto"
            style={{ maxHeight: "400px" }}>
            {videoData.map((video) => (
              <div
                key={video.id}
                className="d-flex align-items-center mb-3 p-2 video-item rounded"
                style={{
                  cursor: "pointer",
                  background:
                    selectedVideo.id === video.id ? "#eafaf1" : "white",
                }}
                onClick={() => setSelectedVideo(video)}>
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="img-fluid rounded me-3"
                  style={{ width: "80px" }}
                />
                <div>
                  <h6 className="text-success mb-0">{video.title}</h6>
                  <small className="text-muted">Click to watch</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouTubeSection;
