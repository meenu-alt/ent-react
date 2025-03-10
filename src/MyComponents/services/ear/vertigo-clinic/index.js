import React from 'react'


export default function index() {
  return (
    <div>
        <main>
   <div className="pq-breadcrumb" >
      <div className="container">
         <div className="row align-items-center">
            <div className="col-lg-12">
               <nav aria-label="breadcrumb">
                  <div className="pq-breadcrumb-title">
                     <h2>Angioplasty services</h2> </div>
                  <div className="pq-breadcrumb-container mt-2">
                     <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html"><i className="fas fa-home mr-2"></i>Home</a></li>
                        <li className="breadcrumb-item active">Angioplasty Services</li>
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
        </main>
    </div>
  )
}
