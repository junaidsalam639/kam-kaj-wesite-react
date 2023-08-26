import React from 'react'


function Footer(){
  return (
    <div>
      <div className="container-fluid mt-5 footer-img">
        <div className="container mt-5">
            <div className="footer-main">
            <div className="footer">
                <div className="footer-one">
                    <img src="https://www.kamkaj.pk/Content/images/kamkajV2/logo.png" alt="" />
                    <p>When it comes to Kam Kaj, the object of the word 'Kam' reflects our motive to add value to our customers' lives by providing all the essential services in their day-to-day lives. On the other hand, the word 'Kaj' highlights our motive to reduce the unemployment from Pakistan by hiring in-house staff whom we train in any given skills.</p>
                    <div className="d-flex icon">
                        <h4>Follow Us</h4>
                        <i class="fa-brands fa-facebook p-2"></i>
                        <i class="fa-brands fa-twitter p-2"></i>
                        <i class="fa-brands fa-linkedin p-2"></i>
                        <i class="fa-brands fa-youtube p-2"></i>
                    </div>
                </div>
                <div className="footer-two">
                    <h2 className='fw-bold'>company</h2>
                    <p>Blog</p>
                    <p>Customer</p>
                    <p>About us</p>
                    <p>carees</p>
                    <p>videos</p>
                    <p>press</p>
                </div>
                <div className="footer-three">
                    <h2 className='fw-bold'>Customers</h2>
                    <p>Blog</p>
                    <p>How Its work</p>
                    <p>login</p>
                    <p>singup</p>
                    <p>iphone</p>
                    <p>Android</p>
                </div>
                <div className="footer-four">
                    <h2 className='fw-bold'>support</h2>
                    <p>contact us</p>
                    <p>0304-111-1526</p>
                    <p>support@kamkaj.pk</p>
                </div>
            </div>
            </div>
        </div>
        <p className='text-white-50 bg-dark'>Copyright © 2017 - 2023 Kam Kaj. Kam Kaj logo and related marks are registered Trademarks of Kam Kaj.</p>
      </div>
    </div>
  )
}

export default Footer
