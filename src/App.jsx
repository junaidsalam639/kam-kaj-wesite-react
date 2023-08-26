import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import './index.css'
import Footer from './Component/Footer';


function App() {
  return (
    <>
    <div className="root">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-8 col-md-12 col-sm-12 mt-5 first">
            <h1 className='mt-5 fw-bold h1'><span>Skilled Professional</span>  At Your Doorstep.</h1>
            <p><span className='fw-bold'> Kam Kaj is a leading multiple service provider company catering to your 360 needs with quality guaranteed. </span> The aim and priority of Kam Kaj are to add value to our consumers' lives by providing smart solutions to all their problems. Our pride is providing the most extensive range of services. From home maintenance to personal assistance. We make sure that your safety is never compromised. This is why we hire all the staff under the roof of Kam Kaj, just for your satisfaction.</p>
            <div class="input-group mb-3">
              <span class="input-group-text">
                <button className='border-0'>karachi</button>
              </span>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" placeholder='Choose a type of service' />
              <span class="input-group-text">
                <i class="fa-solid fa-magnifying-glass"></i>
              </span>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 second">
            <h2 className='fw-bold mt-1'>Book your service</h2>
            <div class="">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
            </div>
            <div class="">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="number" class="form-control" id="exampleFormControlInput1" placeholder="03xxxxxxxx" />
            </div>
            <div class="">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="select service" />
            </div>
            <div class="">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="select city" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"></label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Adress" />
            </div>
            <div class="d-grid gap-2 mb-3">
              <button class="btn fw-bold" type="button">Request a call</button>
            </div>
          </div>
        </div>
      </div>
      {/* first page end */}

      <hr />


      {/* circle  start */}
      <div className="container mt-5 mb-5">
        <div className="row">
          <h1 className='text-center fw-bold mt-4'>Our Top Services</h1>
          <p className='text-center'>Kam Kaj provides ultimate installations, repairs, maintenance, and grooming services at your doorstep.</p>
          <div className="col">
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/55c9e57ab87e4926bd0be4a27e4001b6.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/326c1719a1c24d41b6a6c924a23b3fd9.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/375cfb9cd9494d26942295416bfa2eec.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/8216d4a5dc1849e0a9481a3296ac8c0b.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/394db4b7c2d743d2b21fad2bd81b00ed.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/b2d7a5dda363450b850acf0fdfc472df.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/577817227d6c478e85ee7183669f1485.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
            <div className="circle-card">
              <div className="circle-img">
                <img src="https://kamkaj.azureedge.net/image/4d8de69df07d489782f51f5e45826bd3.png" alt="" />
                <p>Home</p>
                <p>Appliance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/* circle end */}

      {/* card start */}


<div className="container mt-5">
<div className="row">
  <h2 className='fw-bold text-center mt-5'>Recommended Services</h2>
  <p className='text-center'>Services highly recommended by our valuable customers.</p>
    <div className="img">
        <div className="oneimg">
            <button>Book Now</button>
        </div>
        <div className="secondimg">
        <button>Book Now</button>
        </div>
        <div className="thirdimg">
        <button>Book Now</button>
        </div>
        <div className="fourthimg">
        <button>Book Now</button>
        </div>
    </div>
    <div className="img">
        <div className="oneimg">
            <button>Book Now</button>
        </div>
        <div className="secondimg">
        <button>Book Now</button>
        </div>
        <div className="thirdimg">
        <button>Book Now</button>
        </div>
        <div className="fourthimg">
        <button>Book Now</button>
        </div>
    </div>
    <div className="img">
        <div className="oneimg">
            <button>Book Now</button>
        </div>
        <div className="secondimg">
        <button>Book Now</button>
        </div>
        <div className="thirdimg">
        <button>Book Now</button>
        </div>
        <div className="fourthimg">
        <button>Book Now</button>
        </div>
    </div>
</div>
</div>
<hr />
      {/* card end */}



      {/* end start */}
            {/* <img src=" https://www.kamkaj.pk/Content/images/kamkajV2/slider-bg-gray.png" alt="" /> */}

       <div className="container">
        <div className="row ending">
          <div className="col-lg-6 col-md-12 col-sm-12 ending-one">
            <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-tools.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
              <h2 className='fw-bold'>Why Choose Kam Kaj?</h2>
              <p className='fw-bold'>Kam Kaj is a value addition which covers all 360 services under one platform. Our motive is to provide best services to our corporate, commercial, and residential customers. Our main key components to success are :</p>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-1.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-2.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-3.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-4.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-5.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-6.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
              <div className="d-flex">
                <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-make-unique-7.png" alt="" />
                <p className='fw-bold'> Vetted and background-checked in house staff</p>
              </div>
          </div>
        </div>
       </div>
       <hr />
      {/* end - end */}


{/* images-start */}
{/* https://www.kamkaj.pk/Content/images/kamkajV2/home-mobile.png */}
{/* https://www.kamkaj.pk/Content/images/offer/deep-cleaning/barcode.png */}
{/* https://www.kamkaj.pk/Content/images/offer/deep-cleaning/home-app-store.png */}
{/* https://www.kamkaj.pk/Content/images/offer/deep-cleaning/home-play-store.png */}

<div className="container mb-5">
  <div className="row kam-kaj mb-5">
    <div className="col-lg-4 col-md-12 col-sm-12 text-center kam-kaj-img1">
      <img src="https://www.kamkaj.pk/Content/images/kamkajV2/home-mobile.png" alt="" />
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 mt-3 text-center kam-kaj-img">
      <h4 className='fw-bold'>Download Kam Kaj App</h4>
      <p className='fw-bold'>Make Your Life Easier by Downloading Kam Kaj App.</p>
        <img src="https://www.kamkaj.pk/Content/images/offer/deep-cleaning/home-play-store.png" alt="" />
        <img src="https://www.kamkaj.pk/Content/images/offer/deep-cleaning/home-app-store.png" alt="" />
    </div>
    <div className="col-lg-4 col-md-12 col-sm-12 mt-3 mb-5 qr-code text-center">
      <img src="https://www.kamkaj.pk/Content/images/offer/deep-cleaning/barcode.png" alt="" />
      <p className='fw-bold text-center mb-5'>scan QR code</p>
    </div>
  </div>
</div>
<hr />

{/* images-end */}

<div className="container mt-5">
  <h2 className='fw-bold text-center leading'>Trusted by Leading Organizations</h2>
  <div className="row">
    <div className="col-image-circle1 mt-5">
      <div className="circle-one mt-5">
      <img src="https://www.kamkaj.pk/Content/images/offer/service-logo.png" alt="" />
      </div>
      <div className="circle-two mt-5">
      <img src="https://www.kamkaj.pk/Content/images/offer/Sindheducationfoundation-logo.png" alt="" />
      </div>
      <div className="circle-three mt-5">
      <img src="https://www.kamkaj.pk/Content/images/offer/suparco-logo.png" alt="" />
      </div>
      <div className="circle-four mt-5">
      <img src="https://www.kamkaj.pk/Content/images/offer/toyota-logo.png" alt="" />
      </div>
    </div>
  </div>
</div>
<hr />
{/* footer start */}
<Footer/>

{/* footer end */}
    </div>
    </>
  );
}

export default App;



