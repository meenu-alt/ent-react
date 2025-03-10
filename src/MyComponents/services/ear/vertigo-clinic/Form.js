import React from 'react'

export default function titleform() {
  return (
    <div>
           <section className="about-us">
            <div className="container">
               <div className="row">
                 
                  <div className="col-xl-7 px-xl-8 mt-4 mt-xl-0">
                     <div className="pq-section pq-style-1 text-left"> <span className="pq-section-sub-title">What About Us</span>
                        <h5 className="pq-section-title">Joining Hands With Techno Easement</h5>
                        <p className="pq-section-description">  nec nulla ullamcorper rhoncus. Donec id libero ac augue sodales tristique. Nunc id nunc nec tortor fermentum lacinia at a justo. Sed vitae lacus a lacus tempor dignissim. Vestibulum feugiat sapien et sapien tincidunLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Phasellus auctor, elit eget varius tincidunt, tortor nulla fermentum orci, ac congue felis ex nec ligula. Mauris vel felis ut eros accumsan condimentum. Integer id nisl ut lorem bibendum tincidunt. Aenean eget felis nec nulla ullamcorper rhoncus. Donec id libero ac augue sodales tristique. Nunc id nunc nec tortor fermentum lacinia at a justo. Sed vitae lacus a lacus tempor dignissim. Vestibulum feugiat sapien et sapien tincidunt, in sollicitudin mi vehicula. Nam sodales justo in turpis rhoncus, vel tristique orci pellentesquet, in sollicitudin mi vehicula. Nam sodales justo in turpis rhoncus, vel tristique orci pellentesque There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                     </div>
                     <div className="col-lg-12">
                        <a className="pq-button pq-button-flat mt-3" href="about-us.html">
                           <div className="pq-button-block"> <span className="pq-button-text">Read More</span> <i className="ion ion-plus-round"></i> </div>
                        </a>
                     </div>
                  </div>
                  <div className="col-xl-5 pe-xl-4">
                  <div className='pq-bg-white pq-form-bg-white p-4'>
                  <div className="pq-applyform-whitebg p-4">
                  <form className="pq-applyform" noValidate>
                    <div className="row">
                      <div className="col-md-12">
                        <label htmlFor="name"><b>Name</b></label>
                        <input
                          type="text"
                          name="your-name"
                          id="name"
                          className="name-field"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="email"><b>Email</b></label>
                        <input
                          type="email"
                          name="your-email"
                          id="email"
                          className="email-field"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="phone-number"><b>Phone Number</b></label>
                        <input
                          type="text"
                          name="phone-number"
                          id="phone-number"
                          className="phone-number-field"
                          placeholder=""
                          required
                        />
                      </div>
                      <div className="col-md-12">
                        <label htmlFor="find-us"><b>How did you find us?</b></label>
                        <select name="your-find" id="find-us" className="form-select" required>
                          <option value="" disabled selected>Select an option</option>
                          <option value="youtube">YouTube</option>
                          <option value="instagram-facebook">Instagram/Facebook</option>
                          <option value="google">Google</option>
                          <option value="reference">Reference</option>
                        </select>
                      </div>
                      <div className="col-md-12 pt-2">
                        <button type="submit" className="pq-button form-btn">
                          <div className="pq-button-block">
                            <span className="pq-button-text me-0">
                              SEND MESSAGE
                            </span>
                          </div>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                  </div>
                     </div>
               </div>
            </div>
         </section> 
    </div>
  )
}