import cartIcon from "../assets/icon-cart.svg";
import avatarImg from "../assets/image-avatar.png";
import logo from "../assets/logo.svg";
import burgerIcon from "../assets/icon-menu.svg";
import closeIcon from "../assets/icon-close.svg";
import deleteIcon from "../assets/icon-delete.svg";
import product1Thumbnail from "../assets/image-product-1-thumbnail.jpg";
import { useState } from "react";
import { ReactSVG } from "react-svg";

// eslint-disable-next-line react/prop-types
export default function Header({ setItems, itemsCount }) {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart((prevShowCart) => !prevShowCart);
  }

  return (
    <>
      <header>
        <div className="links">
          <img
            src={burgerIcon}
            alt="Burger icon to open side navbar"
            className="burger-icon"
            onClick={() => {
              setShowNav(true);
            }}
          />
          <img src={logo} alt="Sneakers Logo" className="logo" />
          <div>
            <span>Collections</span>
            <span>Men</span>
            <span>Women</span>
            <span>About</span>
            <span>Contact</span>
          </div>
        </div>
        <div className="images">
          <img
            src={cartIcon}
            alt="Cart Icon"
            className="cart"
            onClick={() => {
              toggleShowCart();
            }}
          />
          <div>
            <img src={avatarImg} alt="Avatar Img" className="avatar" />
          </div>
        </div>
        <div
          className={`overlay${showNav ? " active" : ""}`}
          onClick={() => {
            setShowNav(false);
          }}
        ></div>
        {showCart && (
          <div className="cart-section">
            <h3>Cart</h3>
            <hr />
            <div className="content">
              {itemsCount === 0 ? (
                <div className="empty">Your cart is empty</div>
              ) : (
                <div className="checkout">
                  <div className="item">
                    <div className="thumbnail">
                      <img src={product1Thumbnail} alt="Product thumbnail" />
                    </div>
                    <div className="item-info">
                      <p>Fall Limited Edition Sneakers</p>
                      <p>
                        $125.00 x {itemsCount}{" "}
                        <span>${itemsCount * 125}.00</span>
                      </p>
                    </div>
                    <div
                      className="delete"
                      onClick={() => {
                        setItems(0);
                      }}
                    >
                      <ReactSVG src={deleteIcon} />
                    </div>
                  </div>
                  <button className="checkout-button">Checkout</button>
                </div>
              )}
            </div>
          </div>
        )}
      </header>

      <nav className={showNav ? "active" : ""}>
        <img
          src={closeIcon}
          alt="Close Icon"
          onClick={() => {
            setShowNav(false);
          }}
        />
        <div className="links">
          <span>Collections</span>
          <span>Men</span>
          <span>Women</span>
          <span>About</span>
          <span>Contact</span>
        </div>
      </nav>
    </>
  );
}
