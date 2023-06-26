import './App.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCog} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import article1 from './images/article1.jpg';
import article2 from './images/article2.jpg';
import article3 from './images/article3.jpg';
import homebg1 from './images/homebg1.jpg';
import homebg2 from './images/homebg2.jpg';
import homebg3 from './images/homebg3.jpg';
import leftimg1 from './images/leftimg1.jpg';
import home2 from './images/home2.jpg';
import productrow1 from './images/productrow1.jpg';
import productrow12 from './images/productrow12.jpg';
import productrow13 from './images/productrow13.jpg';
import productrow14 from './images/productrow14.jpg';
import productrow15 from './images/productrow15.jpg';
import productrow16 from './images/productrow16.jpg';
import productrow17 from './images/productrow17.jpg';
import productrow18 from './images/productrow18.jpg';
import productrow2 from './images/productrow2.jpg';
import productrow21 from './images/productrow21.jpg';
import productrow22 from './images/productrow22.jpg';
import productrow23 from './images/productrow23.jpg';
import icon1 from './images/icon1.jpg';
import icon2 from './images/icon2.jpg';
import icon3 from './images/icon3.jpg';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ImageSlider />
      <TextSection />
      <ProductSection />
      <AdditionalService/>
      <Portfolio/>
      <ProductCard/>
      <Card/>
      <ProgressCircles/>
      <SponsorLogosSlider/>
      <Emailbox/>
      <Footer/>
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>Home</li>
        <li>
          Shop
          <ul className="dropdown">
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
          </ul>
        </li>
        <li>
          Bag
          <ul className="dropdown">
            <li>View Bag</li>
            <li>Checkout</li>
          </ul>
        </li>
        <li>
          Shoes
          <ul className="dropdown">
            <li>Sneakers</li>
            <li>Boots</li>
            <li>Heels</li>
          </ul>
        </li>
        <li>Pages</li>
      </ul>
    </nav>
  );
}

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="slider">
      <div className="slider-images">
        <img src={homebg1} alt="Image 1" className={activeIndex === 0 ? 'active' : ''} />
        <img src={homebg2} alt="Image 2" className={activeIndex === 1 ? 'active' : ''} />
        <img src={homebg3} alt="Image 3" className={activeIndex === 2 ? 'active' : ''} />
      </div>
      <div className="slider-dots">
        <span className={activeIndex === 0 ? 'dot active' : 'dot'} onClick={() => handleDotClick(0)}></span>
        <span className={activeIndex === 1 ? 'dot active' : 'dot'} onClick={() => handleDotClick(1)}></span>
        <span className={activeIndex === 2 ? 'dot active' : 'dot'} onClick={() => handleDotClick(2)}></span>
      </div>
    </div>
  );
};


function TextSection() {
  return (
    <div className="text-section">
      <img src={leftimg1} alt="Left Image"/>
      <p className='text'>
      <h1>Welcome to our Shop</h1>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed massa at enim hendrerit scelerisque at ut nulla. Fusce pharetra consectetur lacus sed eleifend. Ut dolor sapien, posuere id turpis non, venenatis ultrices est. Nullam hendrerit at nisl sit amet scelerisque. Vestibulum nec dolor ac quam fringilla rhoncus nec vel dolor. </h2>
      <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed massa at enim hendrerit scelerisque at ut nulla. Fusce pharetra consectetur lacus sed eleifend. Ut dolor sapien, posuere id turpis non, venenatis ultrices est. Nullam hendrerit at nisl sit amet scelerisque. Vestibulum nec dolor ac quam fringilla rhoncus nec vel dolor. </h3>
      </p>
      <img src={home2} alt="Right Image"/>
    </div>
  );
}

function ProductSection() {
  return (
    <div className="product-section">
      <div className="product-box">
        <img src={productrow1} alt="Product 1" />
        <img src={productrow12} alt="Product 1 Hover" className="hover-image" />
        <p>Product Name 1</p>
        <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
        </div>
        <p>$49.99</p>
        <div className="color-box">
          <div className="color color1"></div>
          <div className="color color2"></div>
        </div>
      </div>
      <div className="product-box">
        <img src={productrow13} alt="Product 2" className='fist-image'/>
        <img src={productrow14} alt="Product 2 Hover" className="hover-image" />
        <p>Product Name 2</p>
        <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
        </div>
        <p>$39.99</p>
        <div className="color-box">
          <div className="color color1"></div>
          <div className="color color3"></div>
        </div>
      </div>
      <div className="product-box">
        <img src={productrow15} alt="Product 3" className='first-image' />
        <img src={productrow16} alt="Product 3 Hover" className="hover-image" />
        <p>Product Name 3</p>
        <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
        </div>
        <p>$59.99</p>
        <div className="color-box">
          <div className="color color2"></div>
          <div className="color color3"></div>
        </div>
      </div>
      <div className="product-box">
        <img src={productrow17} alt="Product 4" className='first-image' />
        <img src={productrow18} alt="Product 4 Hover" className="hover-image" />
        <p>Product Name 4</p>
        <div className="rating">
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9733;</span>
          <span>&#9734;</span>
          <span>&#9734;</span>
        </div>
        <p>$69.99</p>
        <div className="color-box">
          <div className="color color1"></div>
          <div className="color color2"></div>
        </div>
      </div>
    </div>
  );
}


function AdditionalService() {
  return (
    <div className="service-container">
      <h1 style={{fontSize: "30px", fontWeight: "lighter"}}>Additional Service</h1>
      <p style={{fontSize: "18px", color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className='service'>
      <div className="image-container">
        <img src={icon1} alt="Image 1" />
        <div className="name" style={{fontSize:"25px", fontWeight: "lighter"}}>John Doe</div>
        <div className="description" style={{fontSize: "15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>

      <div className="image-container">
        <img src={icon2} alt="Image 2" />
        <div className="name" style={{fontSize:"25px", fontWeight: "lighter"}}>Jane Smith</div>
        <div className="description" style={{fontSize: "15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>

      <div className="image-container">
        <img src={icon3} alt="Image 3" />
        <div className="name" style={{fontSize:"25px", fontWeight: "lighter"}}>Bob Johnson</div>
        <div className="description" style={{fontSize: "15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
      </div>
      </div>
    </div>
  );
};



function Portfolio() {
  return (
    <div className="shopping-container">
      <h1>PORTFOLIO</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div className="text-container2">
        <div><span>ALL</span></div>
        <div className="separator">|</div>
        <div><span>WALLET</span></div>
        <div className="separator">|</div>
        <div><span>SHOES</span></div>
        <div className="separator">|</div>
        <div><span>BAGS</span></div>
        <div className="separator">|</div>
        <div><span>PURSE</span></div>
        <div className="separator">|</div>
        <div><span>NEW</span></div>
        <div className="separator">|</div>
        <div><span>SALE</span></div>
      </div>
    </div>
  );
};

const ProductCard = () => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={productrow2} alt="Product 1" className="product-image" />
        <div className="product-info">
          <h3 className="product-name">Product 1</h3>
          <p className="product-description">Product Description 1</p>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
      <div className="product-image-container">
        <img src={productrow21} alt="Product 2" className="product-image" />
        <div className="product-info">
          <h3 className="product-name">Product 2</h3>
          <p className="product-description">Product Description 2</p>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
      <div className="product-image-container">
        <img src={productrow22} alt="Product 3" className="product-image" />
        <div className="product-info">
          <h3 className="product-name">Product 3</h3>
          <p className="product-description">Product Description 3</p>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
      <div className="product-image-container">
        <img src={productrow23} alt="Product 4" className="product-image" />
        <div className="product-info">
          <h3 className="product-name">Product 4</h3>
          <p className="product-description">Product Description 4</p>
          <button className="product-button">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};


const Card = () => {
  return (
    <div className="container2">
      <h1 style={{fontSize: "30px", fontWeight: "lighter"}}>FEATURED ARTICLE</h1>
      <p style={{fontSize: "18px", color: "gray"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse urna nibh, viverra non.Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
      <div className="main-box">
        <img src={article1} alt="Card Image" />
        <div className="info-box">
          <div className="info-box-content">
            <div className="info-box-item">Item 1</div>
            <div className="info-box-date">Date 1</div>
            <h3 className="info-box-title">Heading 1</h3>
            <div className="info-box-name">
            <span className="fa fa-user contact-icon" />
              Name 1
            </div>
            <p className="info-box-description">Small paragraph describing the article 1.</p>
            <a className="read-more" href="https://example.com" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
      <div className="main-box">
        <img src={article2} alt="Card Image" />
        <div className="info-box">
          <div className="info-box-content">
            <div className="info-box-item">Item 2</div>
            <div className="info-box-date">Date 2</div>
            <h3 className="info-box-title">Heading 2</h3>
            <div className="info-box-name">
            <span className="fa fa-user contact-icon" />
              Name 2
            </div>
            <p className="info-box-description">Small paragraph describing the article 2.</p>
            <a className="read-more" href="https://example.com" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
      <div className="main-box">
        <img src={article3} alt="Card Image" />
        <div className="info-box">
          <div className="info-box-content">
            <div className="info-box-item">Item 3</div>
            <div className="info-box-date">Date 3</div>
            <h3 className="info-box-title">Heading 3</h3>
            <div className="info-box-name">
            <span className="fa fa-user contact-icon" />
              Name 3
            </div>
            <p className="info-box-description">Small paragraph describing the article 3.</p>
            <a className="read-more" href="https://example.com" target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        </div>
      </div>
    </div>
  );
};


const ProgressCircles = () => {
  useEffect(() => {
    const svgBoxes = document.querySelectorAll('.svg-box');

    svgBoxes.forEach(svgBox => {
      const percent = svgBox.querySelector('.pie').getAttribute('data-percent');
      const bar = svgBox.querySelector('.bar');
      const r = bar.getAttribute('r');
      const c = Math.PI * (r * 2);
      const range = ((100 - percent) / 100) * c;

      bar.style.strokeDashoffset = c;
      bar.style.strokeDasharray = c;

      const animateBar = () => {
        let currentOffset = parseFloat(bar.style.strokeDashoffset);
        if (currentOffset > range) {
          currentOffset -= (c / 100);
          bar.style.strokeDashoffset = currentOffset;
          requestAnimationFrame(animateBar);
        }
      };
      animateBar();

      const text = svgBox.querySelector('.percentage-text');
      let counter = 0;
      const animateText = () => {
        if (counter < percent) {
          counter += 1;
          text.textContent = Math.ceil(counter) + '%';
          requestAnimationFrame(animateText);
        }
      };
      animateText();
    });
  }, []);

  return (
    <div className="container3">
      <h1 className="heading">OUR LEVEL OF BRILLIANCE</h1>
      <p className="paragraph">Professional and Outstanding ideas of our passionate team makes us unique in every sense. Our Services. Our services are delivered by our team with years of experience are passionate about developing business.</p>

      <div className="circle-container">
        <div className="svg-box">
          <svg className="pie" viewBox="0 0 200 200" data-percent={67}>
            <circle r="70" cx="100" cy="100"></circle>
            <circle className="bar" r="70" cx="100" cy="100" style={{ stroke: "orange" }}></circle>
          </svg>
          <div className="percentage-text">0%</div>
          <p className="circle-text" style={{ color: "blue" }}>GRAPHIC DESIGN</p>
        </div>

        <div className="svg-box">
          <svg className="pie" viewBox="0 0 200 200" data-percent={45}>
            <circle r="70" cx="100" cy="100"></circle>
            <circle className="bar" r="70" cx="100" cy="100" style={{ stroke: "blue" }}></circle>
          </svg>
          <div className="percentage-text">0%</div>
          <p className="circle-text" style={{ color: "yellow" }}>WEB DEVELOPMENT</p>
        </div>

        <div className="svg-box">
          <svg className="pie" viewBox="0 0 200 200" data-percent={82}>
            <circle r="70" cx="100" cy="100"></circle>
            <circle className="bar" r="70" cx="100" cy="100" style={{ stroke: "darkgreen" }}></circle>
          </svg>
          <div className="percentage-text">0%</div>
          <p className="circle-text" style={{ color: "blue" }}>WEBS DESIGN</p>
        </div>

        <div className="svg-box">
          <svg className="pie" viewBox="0 0 200 200" data-percent={25}>
            <circle r="70" cx="100" cy="100"></circle>
            <circle className="bar" r="70" cx="100" cy="100" style={{ stroke: "yellow" }}></circle>
          </svg>
          <div className="percentage-text">0%</div>
          <p className="circle-text" style={{ color: "yellow" }}>CUSTOMER SUPPORT</p>
        </div>
      </div>
    </div>
  );
};


const SponsorLogosSlider = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="container4">
      <h2 style={{fontSize:"40px"}}>Our Partners</h2>
      <p style={{fontSize:"20px"}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>
      <Slider {...settings}>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/luxury-letter-e-logo-design_1017-8903.jpg" alt="Logo 1" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/3d-box-logo_1103-876.jpg" alt="Logo 2" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/blue-tech-logo_1103-822.jpg" alt="Logo 3" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/colors-curl-logo-template_23-2147536125.jpg" alt="Logo 4" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/abstract-cross-logo_23-2147536124.jpg" alt="Logo 5" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/football-logo-background_1195-244.jpg" alt="Logo 6" />
        </div>
        <div className="slide">
          <img src="https://image.freepik.com/free-vector/background-of-spots-halftone_1035-3847.jpg" alt="Logo 7" />
        </div>
      </Slider>
    </div>
  );
};

function Emailbox() {
  return (
    <div className="email-box">
      <h1>Centered Heading</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper.</p>
      <div className="email-container">
        <input type="email" className="email-input" placeholder="Enter your email" />
        <span className="send-icon">&#10148;</span>
      </div>
    </div>
  );
}

const Footer = () => {
  return (
    <footer className="footer">
      <div className="column">
        <h3>Column 1</h3>
        <ul>
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>Column 2</h3>
        <ul>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
          <li><a href="#">Link 6</a></li>
        </ul>
      </div>
      <div className="column">
        <h3>Column 3</h3>
        <ul>
          <li><a href="#">Link 7</a></li>
          <li><a href="#">Link 8</a></li>
          <li><a href="#">Link 9</a></li>
        </ul>
      </div>
      <div className="column contact-column">
        <h3>Contact Us</h3>
        <p>123 Main Street, City</p>
        <p>Phone: 123-456-7890</p>
        <div className="social-icons">
          <a href="#"><img src="facebook.png" alt="Facebook" /></a>
          <a href="#"><img src="twitter.png" alt="Twitter" /></a>
          <a href="#"><img src="instagram.png" alt="Instagram" /></a>
        </div>
      </div>
    </footer>
  );
};


export default App;
