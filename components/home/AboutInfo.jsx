import { Swiper, SwiperSlide } from 'swiper/solid';
import 'swiper/css';
import '/style.css';

function About ()  {
    return (
      <div style={"width: 100%"} class='w-full h-96 mt-96 w-10 bg-gray-100 flex justify-center items-center'>
         <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <section class="bg-white  ml-40 ">
    <div class="grid  px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-1xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-dark">O que é o Reader?</h1> <br />
            <p class="max-w-2xl mb-6 font-dark text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">O Reader é muito mais do que apenas uma plataforma de pesquisa de livros; ele é um portal que convida os amantes da leitura a embarcar em uma jornada extraordinária pelo vasto mundo literário. Com uma gama de recursos e funcionalidades cuidadosamente projetados, esta plataforma é uma ferramenta essencial para qualquer pessoa apaixonada por livros.</p>
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Get started
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_23-2149341898.jpg?w=360" alt="mockup"/>
        </div>                
    </div>
</section>        
</SwiperSlide>
        

        <SwiperSlide>
        <section class="bg-white mt-10 ml-80">
    <div class="grid px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-dark">Seus escritores preferidos</h1> <br />
            <p class="max-w-2xl mb-6 font-dark text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-900">Da busca por seus escritores prediletos à exploração de uma biblioteca virtual personalizada, a plataforma oferece uma experiência envolvente para que você encontre e acompanhe seus autores preferidos. Navegar pela plataforma é como folhear as páginas de uma biblioteca gigante. Utilize nossos recursos de pesquisa intuitiva para localizar seus autores favoritos por nome, gênero ou palavras-chave específicas</p> 
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0vjO4DzAunAwqgsj4iWbd6fgNjCVKa2dBGHo1Y1CihKTrT0J4Iixs84yiYAEO3UEHWqQ&usqp=CAU" alt="mockup"/>
        </div>                
    </div>
</section>       
        </SwiperSlide>

        <SwiperSlide>
        <section class="bg-white">
  <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
      <figure class="max-w-screen-md mx-auto">
          <svg class="h-12 mx-auto mb-3 text-dark-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" fill="currentColor"/>
          </svg> 
          <blockquote>
              <p class="font-medium text-dark-900 dark:text-dark">A plataforma Reader é um espaço virtual que reúne uma impressionante coleção de livros, desde os clássicos da literatura até as obras mais contemporâneas. Seu acervo é verdadeiramente vasto e abrangente, abrindo as portas para um universo de histórias, conhecimentos e perspectivas. Os usuários têm a oportunidade de explorar diferentes gêneros, desde romances épicos e policiais intrigantes até não-ficção instrutiva e poesia reflexiva.</p>
          </blockquote>
          <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
              <img class="w-40 h-40 rounded-full" src="https://static.wixstatic.com/media/826a6b_4a87b4d591ab45b0863e9df850b582d4~mv2.jpg/v1/fill/w_640,h_770,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/826a6b_4a87b4d591ab45b0863e9df850b582d4~mv2.jpg" alt="profile picture"/>

              </div>
          </figcaption>
      </figure>
  </div>
</section>
        </SwiperSlide>
        </Swiper>
      </div>
    );
}export default About