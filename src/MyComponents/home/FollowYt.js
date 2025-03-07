import React, { useState } from "react";
import "../../assets/css/bootstrap.min.css";

const videos = [
  {
    title: "Difference Between Migraine And Sinus Headache",
    url: "https://www.youtube.com/embed/LRCVizaB4-w",
    thumbnail: "https://img.youtube.com/vi/LRCVizaB4-w/0.jpg",
  },
  {
    title: "What Is Septoplasty Surgery?",
    url: "https://www.youtube.com/embed/PSInQCt-CH4",
    thumbnail: "https://img.youtube.com/vi/PSInQCt-CH4/0.jpg",
  },
  {
    title: "Use Of Audiocentric Hearing Aid",
    url: "https://www.youtube.com/embed/Sn_TtlOqiOE",
    thumbnail: "https://img.youtube.com/vi/Sn_TtlOqiOE/0.jpg",
  },
  {
    title: "Types Of Septoplasty Surgery",
    url: "https://www.youtube.com/embed/kCfQTLN8wMA",
    thumbnail: "https://img.youtube.com/vi/kCfQTLN8wMA/0.jpg",
  },
  {
    title: "Septoplasty Procedure Overview",
    url: "https://www.youtube.com/embed/LUTuAs8SeF4",
    thumbnail: "https://img.youtube.com/vi/LUTuAs8SeF4/0.jpg",
  },
  {
    title: "Post-Septoplasty Recovery Tips",
    url: "https://www.youtube.com/embed/lmOPa-H_c2Q",
    thumbnail: "https://img.youtube.com/vi/lmOPa-H_c2Q/0.jpg",
  },
];

const YouTubeSection = () => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    return (
      <section className="followyt">
        <div className="container">
          <h3 className="text-center mb-3 pq-section-title">
            Follow Us On YouTube
          </h3>
          <div className="row">
            {/* Left Side - Video Player */}
            <div className="col-md-7">
              <div className="card shadow-lg">
                <iframe
                  width="100%"
                  height="400px"
                  src={selectedVideo.url}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen></iframe>
                <div className="p-3">
                  <h5 className="text-success">{selectedVideo.title}</h5>
                </div>
              </div>
            </div>

            {/* Right Side - Video List */}
            <div className="col-md-5">
              <div
                className="list-group overflow-auto card"
                style={{ maxHeight: "466px" }}>
                {videos.map((video, index) => (
                  <button
                    key={index}
                    className={`list-group-item list-group-item-action d-flex align-items-center ${
                      selectedVideo.url === video.url ? "active" : ""
                    }`}
                    onClick={() => setSelectedVideo(video)}>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="img-thumbnail me-2"
                      style={{ width: "80px", height: "65px" }}
                    />
                    {video.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default YouTubeSection;
