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
                  Adventure and Fiction
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                molestias debitis nihil dolore aspernatur! Vitae molestias ipsum
                maiores laboriosam veritatis dignissimos dolore aperiam, nihil
                libero. Temporibus vel culpa dolor reiciendis?
              </h1>
              <p class="text-grey-darker text-sm">11/1/19</p>
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
                  Philosophy and the search for the truth
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                molestias debitis nihil dolore aspernatur! Vitae molestias ipsum
                maiores laboriosam veritatis dignissimos dolore aperiam, nihil
                libero. Temporibus vel culpa dolor reiciendis?
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
                <p class="ml-2 text-sm">Aristoteles / Plato / Socrates</p>
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
                  Economics
                </p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
                molestias debitis nihil dolore aspernatur! Vitae molestias ipsum
                maiores laboriosam veritatis dignissimos dolore aperiam, nihil
                libero. Temporibus vel culpa dolor reiciendis?
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
                  Poetry
                </p>
                "We don't read and write poetry because it's cute. We read and
                write poetry because we are members of the human race. And the
                human race is filled with passion. And medicine, law, business,
                engineering, these are noble pursuits and necessary to sustain
                life."
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
                  Horror
                </p>
                <p>
                  “If I am mad, it is mercy! May the gods pity the man who in
                  his callousness can remain sane to the hideous end!” - H.P
                  Lovecraft
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
                  Époque
                </p>
                Looking for an exciting story envolving romance, betrayal and/or
                conflicts?
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
