import React, { useEffect, useState } from "react";

const Counter = ({ end, text }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 3000;
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [end]);

  return (
    <div className="pq-counter pq-style-2 text-center">
      <div className="pq-counter-contain">
        <div className="pq-counter-info">
          <div className="pq-counter-num-prefix">
            <h5>
              {count}
              {end >= 1000 ? "+" : ""}
            </h5>
          </div>
          <p className="pq-counter-description">{text}</p>
        </div>
      </div>
    </div>
  );
};

const NumCounter = () => {
  return (
    <section className="pq-counter-60 pq-bg-primary-dark pq-py-2">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <Counter end={40} text="Daily OPD" />
          </div>
          <div className="col-lg-3 col-md-6 mt-lg-0 mt-md-0 mt-4">
            <Counter end={30} text="Years Of Experience" />
          </div>
          <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
            <Counter end={4.9} text="Google Reviews Rating" />
          </div>
          <div className="col-lg-3 col-md-6 mt-lg-0 mt-4">
            <Counter end={100000} text="Happy Patients" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NumCounter;
