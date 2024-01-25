import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props: CustomArrowProps) {
  const { onClick, className, style } = props;
  return (
    <img
      className={className}
      style={style}
      src='/arrow_left.svg'
      alt=''
      onClick={onClick}
    />
  );
}

function NextArrow(props: CustomArrowProps) {
  const { onClick, className, style } = props;
  return (
    <img
      className={className}
      style={style}
      src='/arrow_right2.svg'
      alt=''
      onClick={onClick}
    />
  );
}

export function Testimonials() {
  const slides = [
    {
      text: "Working with your design agency was a game-changer for us. The creativity and attention to detail you brought to our branding elevated our company image. Emily Johnson, CEO of Tech Innovations Ltd.",
      img: "/user2.svg",
      user: "Emily Johnson",
      position: "CEO, Tech Innovations Ltd."
    },
    {
      text: "I can't express how impressed we are with the design solutions provided by your agency. The visual storytelling and cohesive branding strategies have significantly boosted our marketing efforts. Alex Turner, Marketing Director at Global Ventures Inc.",
      img: "/user1.svg",
      user: "Alex Turner",
      position: "Marketing Director, Global Ventures Inc."
    },
    {
      text: "The design expertise and innovative ideas your agency brought to the table have been instrumental in shaping our brand identity. Your team's commitment to excellence truly stands out. Sophia Rodriguez, Founder of Creative Minds Startup.",
      img: "/user3.svg",
      user: "Sophia Rodriguez",
      position: "Founder, Creative Minds Startup"
    },
    {
      text: "Our experience with your design agency has been nothing short of exceptional. The professionalism and creativity displayed in every project have added significant value to our brand. David Mitchell, CFO at Financial Solutions Group.",
      img: "/user4.svg",
      user: "Laura Mitchel",
      position: "CFO, Financial Solutions Group"
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <section>
      <div className="py-14 sm:px-14 md:px-20 flex justify-between flex-col">
        <h2 className="text-dark-green font-medium text-lg mb-3">TESTIMONIALS</h2>
        <p className="font-semibold sm:text-2xl md:text-3xl">See What Our Customer<br /> Say About Us</p>
        <Slider
          {...settings}
        >
          <div className="flex flex-col justify-between border-2 border-black my-4 p-8 rounded-lg">
            <p>{slides[0].text}</p>
            <span className='flex items-center mt-4'>
              <img src={slides[0].img} alt="" />
              <span className='ml-4 flex flex-col justify-center'>
                <h3 className='font-semibold text-xl mt-4'>{slides[0].user}</h3>
                <p>{slides[0].position}</p>
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-between border-2 border-black my-4 p-8 rounded-lg">
            <p>{slides[1].text}</p>
            <span className='flex items-center mt-4'>
              <img src={slides[1].img} alt="" />
              <span className='ml-4 flex flex-col justify-center'>
                <h3 className='font-semibold text-xl mt-4'>{slides[1].user}</h3>
                <p>{slides[1].position}</p>
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-between border-2 border-black my-4 p-8 rounded-lg">
            <p>{slides[2].text}</p>
            <span className='flex items-center mt-4'>
              <img src={slides[2].img} alt="" />
              <span className='ml-4 flex flex-col justify-center'>
                <h3 className='font-semibold text-xl mt-4'>{slides[2].user}</h3>
                <p>{slides[2].position}</p>
              </span>
            </span>
          </div>
          <div className="flex flex-col justify-between border-2 border-black my-4 p-8 rounded-lg">
            <p>{slides[3].text}</p>
            <span className='flex items-center mt-4'>
              <img src={slides[3].img} alt="" />
              <span className='ml-4 flex flex-col justify-center'>
                <h3 className='font-semibold text-xl mt-4'>{slides[3].user}</h3>
                <p>{slides[3].position}</p>
              </span>
            </span>
          </div>
        </Slider>
      </div>
    </section>
  )
}