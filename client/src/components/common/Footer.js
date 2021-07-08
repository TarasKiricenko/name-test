// SOCIAL MEDIA
//CONTACT INFO + ADDRESS 
//PRIVACY.....SITEMAP 
//COPYRIGHT INFO
//LOGO IMAGE

import React from 'react'
import facebook from '../../assets/footer/facebook.svg'
import instagram from '../../assets/footer/instagramsvg.svg'
import tweeter from '../../assets/footer/twittersvg.png'
import linkedin from '../../assets/footer/linkedinsvg.png'
import { Link } from 'react-router-dom'
// import facebook from '../../assets/footer/facebook.png'
// import instagram from '../../assets/footer/instagram.png'
// import tweeter from '../../assets/footer/tweeter.png'
// import linkedin from '../../assets/footer/linkedin.png'
// import { Link } from 'react-router-dom'






const Footer = () => {

  return (
    <>

      <footer className="text-center text-lg-start bg-light text-muted">

        <section
          className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
        >

          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <img src={facebook} width="36" height="36" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
              <img src={linkedin} width="36px" height="36px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
              <img src={tweeter} width="36px" height="36px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
              <img src={instagram} width="36px" height="36px"></img>
            </a>
            {/* <a>
              <i className="fab fa-facebook-f "></i>
              <img src={facebook} width="40px" height="40px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
              <img src={linkedin} width="48px" height="48px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
              <img src={tweeter} width="48px" height="48px"></img>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
              <img src={instagram} width="42px" height="48px"></img>
            </a> */}

          </div>

        </section>



        <section className="">
          <div className="container text-center text-md-start mt-5">

            <div className="row mt-3">

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Company
                </h6>
                <p>
                  <a href="/AboutUs" className="text-reset">ABOUT US</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Mission</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Carrer</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Investors</a>
                </p>
              </div>



              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Partnerships
                </h6>
                <p>
                  <a href="#!" className="text-reset">Brokers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Landlords</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Landladies</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Help</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Impact
                </h6>
                <p>
                  <a href="#!" className="text-reset">Brokers</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Landlords</a>
                </p>
                <p>
                  <a href="/filter" className="text-reset">Filter</a>
                </p>
                <p>


                  <Link to="/mapone" className="text-reset">Map</Link>

                </p>
              </div>



              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                <h6 className="text-uppercase fw-bold mb-4">
                  Contact
                </h6>
                <p><i className="fas fa-home me-3"></i> New York, NY 10012, US</p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  TheTeam@BestCoders.com
                </p>
                <p><i className="fas fa-phone me-3"></i> 0044 1774 5678 878</p>
                <p><i className="fas fa-print me-3"></i> 0044 7574 5678 878</p>
              </div>

            </div>

          </div>
        </section>



        <div className="text-center p-4" styles="background-color: rgba(0, 0, 0, 0.05);">
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">TheTeam.com</a>
        </div>

      </footer>

    </>
  )
}

export default Footer




