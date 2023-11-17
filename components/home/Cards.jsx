import "/style.css";

function Cards() {
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://external-preview.redd.it/C_CiG8pX9aqvTXoPgvczL8ZQNGmFaAhTgWDUguvNLsQ.jpg?auto=webp&s=50e9c124f2440c4bccb9fa6479e27f6225d72ff9"
              >
                {" "}
              </img>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <p
                  class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
                  href="#"
                >
                  {" "}
                  <br />
                  Aventura e Ficção
                </p>
                Prepare-se para embarcar em jornadas emocionantes ao lado de aventureiros destemidos. Explore antigas ruínas em busca de tesouros perdidos, participe de batalhas épicas contra forças das trevas e desvende segredos ocultos que mudarão o curso da história. Nossos autores talentosos criaram histórias que farão o seu coração acelerar e a sua mente se perder em mundos de maravilha e perigo.
              </h1>
            </header>

            <footer class="flex items-center justify-between duration-500 hover:scale-105 hover:shadow-xl leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <p class="ml-2 text-sm">Tolkien / J.K. Rowling / G.R.R Martin</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://c4.wallpaperflare.com/wallpaper/138/776/863/minimalism-monochrome-black-background-men-greek-philosophers-hd-wallpaper-thumb.jpg"
              >
                {" "}
              </img>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <p
                  class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
                  href="#"
                >
                  {" "}
                  <br />
                  Filosofia
                </p>
                Se você é um estudante ávido de filosofia, um curioso explorador de ideias ou alguém que busca respostas para perguntas profundas, esta seção de Filosofia oferece um oceano de conhecimento para navegar. Descubra as teorias que influenciaram a cultura, a política e a moral, e desafie seu próprio pensamento enquanto mergulha nas mentes dos maiores filósofos da história.
              </h1>
            </header>

            <footer class="flex items-center justify-between duration-500 hover:scale-105 hover:shadow-xl leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p class="ml-2 text-sm">Aristoteles / Platão / Socrates</p>
              </a>
              <p
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </p>
            </footer>
          </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://img.freepik.com/premium-photo/financial-concept-dollars-banknotes-red-background-money_325845-2603.jpg?w=2000"
              >
                {" "}
              </img>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <p
                  class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
                  href="#"
                >
                  {" "}
                  <br />
                  Economia
                </p>
                Onde o mundo dos números, mercados e finanças se desdobra diante de você. Aqui, você encontrará uma riqueza de conhecimento que o guiará pelo intricado universo da economia, revelando os segredos por trás das decisões financeiras globais e individuais.
              </h1>
            </header>

            <footer class="flex items-center justify-between duration-500 hover:scale-105 hover:shadow-xl leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>

                <p class="ml-2 text-sm">Carl Menger / Keynes / Mises / Hayek</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2DLyG0pfml_ZCEQbUZJHgaEkMHyNARz3OA&usqp=CAU"
              >
                {" "}
              </img>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <p
                  class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
                  href="#"
                >
                  {" "}
                  <br />
                  Poesia
                </p>
                "Não lemos e escrevemos poesia porque é bonitinho. Lemos e escrevemos poesia porque somos membros da raça humana e a raça humana está repleta de paixão. E medicina, advocacia, administração e engenharia, são objetivos nobres e necessários para manter-se vivo. Mas a poesia, beleza, romance, amor... é para isso que vivemos." - John Keating

              </h1>
            </header>

            <footer class="flex items-center justify-between duration-500 hover:scale-105 hover:shadow-xl leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>{" "}
                <p class="ml-2 text-sm">
                  Shakespeare / Edgar Allan Poe / Drummond / Frost / Neruda
                </p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </a>
            </footer>
          </article>
        </div>

        <div class="my-1 px-1 b w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://i.pinimg.com/originals/53/b1/82/53b18237f98dfb46c8e4b8f0626e4861.png"
              >
                {" "}
              </img>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <p
                  class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
                  href="#"
                >
                  {" "}
                  <br />
                  Terror
                </p>
                <p>
                "Erguendo-se das profundezas abissais, uma cidade morta, R'lyeh, com seus monólitos antigos e sua arquitetura incompreensível, emergirá novamente quando as estrelas estiverem certas. E com ela, despertará o grande e terrível Cthulhu." -  H.P Lovecraft
                </p>
              </h1>
            </header>

            <footer class="flex items-center justify-between duration-500 hover:scale-105 hover:shadow-xl leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>{" "}
                <p class="ml-2 text-sm">
                  Stephen King / Lovecraft / Clive Barker / Bram Stoker
                </p>
              </a>
            </footer>
          </article>
        </div>

        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
          <article class="overflow-hidden duration-500 hover:scale-105 hover:shadow-xl rounded-lg shadow-lg">
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full"
                src="https://img.atlasobscura.com/uACpB4FgGJTIkYRJlT1uWBTWTPCYoRHoM8de7QD-e94/rt:fit/w:600/c:600:400:nowe:9:80/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy83OGVmNTkyMTM0/ZWRhNTJmMjBfaGVu/cmlldHRhLWh5ZGUu/anBn.jpg"
              >
                {" "}
              </img>
            </a>

            <header class="flex items-center justify-between leading-tight p-2 md:p-4">
              <h1 class="text-lg">
                <p
                  class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase"
                  href="#"
                >
                  {" "}
                  <br />
                  Época
                </p>
                Viaje no tempo e mergulhe em um mundo de elegância, romance e intriga com as nossas obras de época. Nestas páginas, você será transportado para épocas passadas, onde a sociedade é governada por rígidas convenções, os trajes são deslumbrantes, e os segredos escondidos por trás das cortinas são tão fascinantes quanto perigosos.
              </h1>
            </header>

            <footer class="flex items-center justify-between duration-500 hover:scale-105 hover:shadow-xl leading-none p-2 md:p-4">
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
                <p class="ml-2 text-sm">
                  Diana Gabaldon / Philippa Gregory / Sarah Waters / Colson
                  Whitehead
                </p>
              </a>
            </footer>
          </article>
        </div>
      </div>
    </div>
  );
}
export default Cards;
