import { FaHome } from "react-icons/fa";

const Breadcrumb = () => {
  return (
    <div
      className="pq-breadcrumb bg-cover"
      style={{ backgroundImage: "url('images/breadcrumb.jpg')" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <div className="pq-breadcrumb-title">
                <h2>Contact Us</h2>
              </div>
              <div className="pq-breadcrumb-container mt-2">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <FaHome className="mr-2" /> Home
                    </a>
                  </li>
                  <li className="breadcrumb-item active">Contact Us</li>
                </ol>
              </div>
            </nav>
          </div>
          <div className="col-lg-4">
            <div className="pq-breadcrumb-img text-right wow fadeInRight"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
