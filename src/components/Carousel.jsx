import projectsList from "../helpers/projectsList";
import Slider from "react-slick";
import '../style/Carousel.css';

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    adaptiveHeight: true,
    rows: 2,
    arrows: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
  };

  return (
    <Slider { ...settings }>
      {
        projectsList.map((item, index) => {
          const { name, linkRepo, image } = item;
          return (
            <div className="carousel-container" key={ index }>
              <a className="carousel-card" href={ linkRepo } target="_blanck">
                <img className="carousel-image" src={ image } alt="icon" />
                <h3 className="carousel-title">{ name }</h3>
              </a>
            </div>
          )
        })
      }
    </Slider>
  )
}

export default Carousel;