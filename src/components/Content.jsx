import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";
import product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import product2Thumbnail from "../assets/image-product-2-thumbnail.jpg";
import product3Thumbnail from "../assets/image-product-3-thumbnail.jpg";
import product4Thumbnail from "../assets/image-product-4-thumbnail.jpg";
import plusIcon from "../assets/icon-plus.svg";
import minusIcon from "../assets/icon-minus.svg";
import cartIcon from "../assets/icon-cart.svg";
import closeIcon from "../assets/icon-close.svg";
import nextIcon from "../assets/icon-next.svg";
import previousIcon from "../assets/icon-previous.svg";
import { ReactSVG } from "react-svg";
import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export default function Content({ setItems }) {
  const [count, setCount] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentMainImage, setCurrentMainImage] = useState(0);
  const [isPhoneSize, setIsPhoneSize] = useState(false);
  const productsImage = [product1, product2, product3, product4];
  const productsThumbnail = [
    product1Thumbnail,
    product2Thumbnail,
    product3Thumbnail,
    product4Thumbnail,
  ];

  function onResize() {
    const width = window.innerWidth;
    if (width < 991) {
      setIsPhoneSize(true);
    } else {
      setIsPhoneSize(false);
    }
  }

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const thumbnailsElement = productsThumbnail.map((img, ind) => {
    return (
      <div key={ind} className={ind === currentMainImage ? "active" : ""}>
        <img
          src={img}
          alt="An image of the product"
          onClick={() => {
            changeMainImage(ind);
          }}
        />
      </div>
    );
  });

  function changeMainImage(index) {
    setCurrentMainImage(index);
  }
  function nextImg() {
    setCurrentMainImage((prevImg) => {
      if (prevImg === productsImage.length - 1) return prevImg;
      return prevImg + 1;
    });
  }
  function prevImg() {
    setCurrentMainImage((prevImg) => {
      if (prevImg === 0) return prevImg;
      return prevImg - 1;
    });
  }
  function handleAddingToCart() {
    setItems((prevCount) => prevCount + count);
    setCount(0);
  }

  return (
    <>
      <main>
        <div className="gallery">
          <div
            className="main-img"
            onClick={() => {
              if (isPhoneSize) return;
              setShowLightbox(true);
            }}
          >
            <div
              className="right-arrow"
              onClick={() => {
                nextImg();
              }}
            >
              <img src={nextIcon} alt="right arrow icon" />
            </div>
            <img
              src={productsImage[currentMainImage]}
              alt="An image of the Product"
              className="photo"
            />
            <div
              className="left-arrow"
              onClick={() => {
                prevImg();
              }}
            >
              <img src={previousIcon} alt="right arrow icon" />
            </div>
          </div>
          <div className="thumbnails">{thumbnailsElement}</div>
        </div>
        <div className="info">
          <p className="company-name">SNEAKER COMPANY</p>
          <h2 className="product-title">
            Fall Limited Edition <br /> Sneakers
          </h2>
          <p className="product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they{`'`}ll withstand
            everything the weather can offer.
          </p>
          <h2 className="product-price">
            $125.00 <span>50%</span>
          </h2>
          <div className="old-price">$250.00</div>
          <div className="cart-section">
            <div className="counter">
              <img
                src={minusIcon}
                alt="Minus Icon"
                onClick={() =>
                  setCount((prevCount) => {
                    if (prevCount === 0) return prevCount;
                    return prevCount - 1;
                  })
                }
              />
              <div>{count}</div>
              <img
                src={plusIcon}
                alt="Plus Icon"
                onClick={() => setCount((prevCount) => prevCount + 1)}
              />
            </div>
            <button
              className="cart-button"
              onClick={() => {
                handleAddingToCart();
              }}
            >
              <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
              Add To Cart
            </button>
          </div>
        </div>
        {showLightbox && (
          <div className="lightbox">
            <div
              className="overlay"
              onClick={() => {
                setShowLightbox(false);
              }}
            ></div>

            <div className="gallery">
              <div className="main-img">
                <div
                  className="close"
                  onClick={() => {
                    setShowLightbox(false);
                  }}
                >
                  <ReactSVG src={closeIcon} />
                </div>
                <div
                  className="next"
                  onClick={() => {
                    nextImg();
                  }}
                >
                  <ReactSVG src={nextIcon} />
                </div>
                <img
                  src={productsImage[currentMainImage]}
                  alt="An image of the Product"
                  className="photo"
                />
                <div
                  className="previous"
                  onClick={() => {
                    prevImg();
                  }}
                >
                  <ReactSVG src={previousIcon} str />
                </div>
              </div>
              <div className="thumbnails">{thumbnailsElement}</div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
