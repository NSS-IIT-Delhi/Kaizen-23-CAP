import React from 'react'
import './Cap.css'
const WhyCAP = ({id}) => {
  return (
    <div id={id}>
<section id="services" className="services section-show __web-inspector-hide-shortcut__">
    <div className="container">
      <div className="section-title whysp mt-5">
          <h1 className='text-center text-gradient'>Why CAP?</h1>
          {/* <div className="hrx">
          <hr/>
          </div> */}
          <hr/>
      </div>
    <div className="container">
      {/* <div className="row2 row"> */}
      <div className="row2">
      <div className="col-lg-4 col-md-6 col-sm-10 col-xs-10 d-flex mt-4">
          <div className="icon-box   cap-cards">
            <div className="icon"><i class="fa-solid fa-star"></i></div>
            <h4 className="text-gradient">IIT Delhi events</h4>
            <p>Top performing CAs will get a chance to visit IIT Delhi Campus and attend Kaizen'24.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 col-xs-10 d-flex mt-4">
          <div className="icon-box   cap-cards">
            <div className="icon"><i class="fa-solid fa-trophy"></i></div>
            <h4 className="text-gradient">Prizes</h4>
            <p>Exciting prizes along with Vouchers and discount coupons of top brands.
            </p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 col-xs-10 d-flex mt-4">
          <div className="icon-box   cap-cards">
            <div className="icon"><i class="fa-solid fa-file-shield"></i></div>
            <h4 className="text-gradient">Get Certificate & LOR</h4>
            <p>Certificate of Appreciation, LOR from NSS, IIT Delhi bearing its signature.</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-10 col-xs-10  d-flex mt-4">
          <div className="icon-box   cap-cards">
            <div className="icon"><i class="fa-brands fa-nfc-symbol"></i></div>
            <h4 className="text-gradient">Interconnectivity</h4>
            <p>Better interconnectivity between IITD and the rest of the Delhi students</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-10 col-xs-10  d-flex mt-4">
          <div className="icon-box   cap-cards">
            <div className="icon"><i class="fa-solid fa-calendar-check"></i></div>
            <h4 className="text-gradient">Organize events</h4>
            <p>Chance to organize events and workshops in collaboration with NSS in your college.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-10 col-xs-10 d-flex mt-4">
          <div className="icon-box   cap-cards">
            <div className="icon"><i class="fa-solid fa-graduation-cap"></i></div>
            <h4 className="text-gradient">Internship Opportunities</h4>
            <p>Top Performers get Internship Opportunities and Exclusive Merchandise.
            </p>
          </div>
        </div>
      </div>
      </div>
      </div>
  </section>
  </div>
  )
}

export default WhyCAP
