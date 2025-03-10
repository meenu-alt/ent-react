import { FaHome } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

const Breadcrumb = () => {
  return (
    <div className=" bg-cover bdcrum">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav aria-label="breadcrumb">
              <div className="pq-breadcrumb-container mt-2">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/" className="mr-2">
                      <FaHome className="mr-1" /> Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item active">Vertigo Clinic</li>
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
