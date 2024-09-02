import React, { useState, useEffect } from 'react';
import '../css/Carousel.css';

function WomenCategory() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [wishList, setWishList] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        const womenProducts = data.filter(product => product.category === "women's clothing");
        const wishListInit = womenProducts.reduce((acc, product) => {
          acc[product.title] = false;
          return acc;
        }, {});
        setProducts(womenProducts);
        setWishList(wishListInit);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleWishList = (title) => {
    setWishList((prevWishList) => ({
      ...prevWishList,
      [title]: !prevWishList[title],
    }));
  };

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) => (prevActiveIndex + 1) % 2);
  };

  const handlePrev = () => {
    setActiveIndex((prevActiveIndex) => (prevActiveIndex - 1 + 2) % 2);
  };

  return (
    <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className={activeIndex === 0 ? 'active' : ''} />
        <li data-target="#myCarousel" data-slide-to="1" className={activeIndex === 1 ? 'active' : ''} />
      </ol>
      <div className="carousel-inner">
        {Array(2)
          .fill(0)
          .map((_, index) => (
            <div key={index} className={`item carousel-item ${activeIndex === index ? 'active' : ''}`}>
              <div className="row">
                {products
                  .slice(index * 4, (index + 1) * 4)
                  .map((product) => (
                    <div key={product.id} className="col-sm-3">
                      <div className="thumb-wrapper">
                        <span className="wish-icon">
                          <i
                            className={`fa ${wishList[product.title] ? 'fa-heart' : 'fa-heart-o'}`}
                            onClick={() => handleWishList(product.title)}
                          />
                        </span>
                        <div className="img-box">
                          <img src={product.image} className="img-fluid" alt={product.title} />
                        </div>
                        <div className="thumb-content">
                          <h4>{product.title}</h4>
                          <div className="star-rating">
                            <ul className="list-inline">
                              {Array(5)
                                .fill(0)
                                .map((_, index) => (
                                  <li key={index} className="list-inline-item">
                                    <i
                                      className={`fa ${
                                        index < Math.floor(product.rating.rate) ? 'fa-star' : index < Math.ceil(product.rating.rate) ? 'fa-star-half-o' : 'fa-star-o'
                                      }`}
                                    />
                                  </li>
                                ))}
                            </ul>
                          </div>
                          <p className="item-price">
                            <strike>${product.price + 50}</strike> <b>${product.price}</b>
                          </p>
                          <a href="#" className="btn btn-primary">
                            Add to Cart
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
      </div>
      <a className="carousel-control-prev" href="#myCarousel" data-slide="prev" onClick={handlePrev}>
        <i className="fa fa-angle-left" />
      </a>
      <a className="carousel-control-next" href="#myCarousel" data-slide="next" onClick={handleNext}>
        <i className="fa fa-angle-right" />
      </a>
    </div>
  );
}

export default WomenCategory;
