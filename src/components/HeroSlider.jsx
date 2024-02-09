import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {
  const settings = {
    dots: true,
    speed: 4500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="w-full bg-red-100 sm:h-[350px] mt-[90px] ">
      <Slider {...settings}>
        <div>
         <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg" className="w-full sm:h-[350px] h-[140px]" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/6/27/53b4daed-cd2c-4111-86c5-14f737eceb351656325318973-Handbags_Desk.jpg" className="w-full sm:h-[350px] h-[140px]"  alt="" />
        </div>
        <div>
          <img src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/b656a7f4-4688-4997-bb7c-54b78793981e1658752386588-Western-Wear_Desk.jpg" className="w-full sm:h-[350px] h-[140px]"  alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default HeroSlider;
