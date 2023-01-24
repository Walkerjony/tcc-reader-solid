import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import '/style.css';

function About ()  {
    return (
      <div style={"width: 100%"} class='w-full mt-96 w-10 bg-gray-100 flex justify-center items-center'>
         <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <h1 class='text-center font-bold text-dark text-4xl'>What is ReadER?</h1> <br />
          <p class='text-center font-bold text-dark text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat eveniet </p>      
        </SwiperSlide>
        

        <SwiperSlide>
          <h1 class='text-center font-bold text-dark text-4xl'>Why you should use it</h1> <br />
          <p class='text-center font-bold text-dark text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat eveniet </p>      
        </SwiperSlide>

        <SwiperSlide>
          <h1 class='text-center font-bold text-dark text-4xl'>Find new books</h1> <br />
          <p class='text-center font-bold text-dark text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus quaerat eveniet </p>      
        </SwiperSlide>
        </Swiper>
      </div>
    );
}export default About