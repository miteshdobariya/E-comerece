import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ShopByCategory = () => {
  const options = {
     loop: true,
        margin: 10,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 800,
        responsive: {
            0: { items: 1 },
            600: { items: 3 },
            1000: { items: 5 },
        },
        navText: [
            '<span class="button-prev-slide">Prev</span>',
            '<span class="button-next-slide">Next</span>',
        ],
  };

  return (
    <div className="category">
    <div className="container">
      <div className="section-title">
      <span class="pad-right">Dive In</span>
      </div>
      <div className="item-row">
        <div className="owl-wrapper-outer">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item">
          <div className="catcontent">
            <a href="#" class="hover-btn btn btn-primary">
          <img src="assets1/img/3_thumb.jpg" alt="Fashion" />
            </a>  
          </div>
          <a href="#">
              <p class="caption">Fashion</p>
          </a>
        </div>
        <div className="item">
          <div className="catcontent">
            <a href="#" class="hover-btn">
          <img src="assets1/img/6_thumb.jpg" alt="Mobiles" />
            </a>
          </div>
          <a href="#">
              <p class="caption">Mobiles</p>
          </a>
        </div>
        <div className="item">
          <div className="catcontent">
            <a href="#" class="hover-btn btn btn-primary">
          <img src="assets1/img/7_thumb.jpg" alt="Sports" />
            </a>
          </div>
          <a href="#">
              <p class="caption">Sports</p>
          </a>
        </div>
        <div className="item">
          <div className="catcontent">
            <a href="#" class="hover-btn btn btn-primary">
          <img src="assets1/img/8_thumb.jpg" alt="Jewellery" />
            </a>
          </div>
          <a href="#">
              <p class="caption">Jwellery</p>
          </a>
        </div>
        <div className="item">
          <div className="catcontent">
            <a href="#" class="hover-btn btn btn-primary">
          <img src="assets1/img/27_thumb.jpg" alt="Cameras" />
            </a>
          </div>
          <a href="#">
              <p class="caption">Cameras</p>
          </a>
        </div>
      </OwlCarousel>
      </div>
      </div>
    </div>
    </div>
  );
};

export default ShopByCategory;
