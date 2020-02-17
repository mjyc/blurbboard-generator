if (process.argv.length < 3) throw new Error("process.argv.length < 3");

const fs = require("fs-extra");

const htmlOrig = fs.readFileSync("./index.html", "utf8");

// get this from data
const htmlPosts = `
          <div class="flex flex-wrap justify-between -mx-6">
            <div
              class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://cdn.hackaday.io/images/6882881547054338212.jpg"
                    class="object-cover h-64 w-full rounded-t pb-6"
                  />
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div class="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
            </div>

            <div
              class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/3106804/800x600"
                    class="h-64 w-full rounded-t pb-6"
                  />
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div class="w-full font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    at ip Aliquam at ipsum eu nunc commodo posuere et sit amet
                    ligula.
                  </p>
                </a>
              </div>
            </div>

            <div
              class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="#"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="https://source.unsplash.com/collection/539527/800x600"
                    class="h-64 w-full rounded-t pb-6"
                  />
                  <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    GETTING STARTED
                  </p>
                  <div class="w-full  font-bold text-xl text-gray-900 px-6">
                    Lorem ipsum dolor sit amet.
                  </div>
                  <p class="text-gray-800 font-serif text-base px-6 mb-5">
                    Lorem ipsum eu nunc commodo posuere et sit amet ligula.
                  </p>
                </a>
              </div>
            </div>
          </div>
`;

const htmlOut = htmlOrig.replace("<!-- {posts} -->", htmlPosts);

fs.writeFileSync(process.argv[2], htmlOut);
