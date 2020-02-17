if (process.argv.length < 3) throw new Error("process.argv.length < 3");

const fs = require("fs-extra");
const https = require("https");

const url =
  "https://rds.theconstructsim.com/r/?search=fetch&ami=&order=-updated_on";
const transform = data =>
  data.results.reduce(
    (prev, x) =>
      (prev += `
            <div
              class="w-full lg:w-1/3 p-6 flex flex-col flex-grow flex-shrink"
            >
              <div
                class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg"
              >
                <a
                  href="${x.url}"
                  class="flex flex-wrap no-underline hover:no-underline"
                >
                  <img
                    src="${x.picture}"
                    class="object-cover h-64 w-full rounded-t pb-6"
                  />
                  <p class="w-full text-gray-600 text-xs lg:text-sm px-6">
                    ${x.updated_on}
                  </p>
                  <div class="w-full font-bold text-xl text-gray-900 px-6">
                    ${x.name}
                  </div>
                  <p class="text-gray-800 font-serif text-base px-6 mb-5">
                    ${x.description}
                  </p>
                </a>
              </div>
            </div>
`),
    ""
  );

https.get(url, res => {
  res.setEncoding("utf8");
  let body = "";
  res.on("data", data => {
    body += data;
  });
  res.on("end", () => {
    body = JSON.parse(body);
    // get this from data
    const htmlPosts = transform(body);
    const htmlOrig = fs.readFileSync("./template/index.html", "utf8");
    const htmlOut = htmlOrig.replace("<!-- {posts} -->", htmlPosts);
    fs.writeFileSync(process.argv[2], htmlOut);
  });
});
