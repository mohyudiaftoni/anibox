import { bannerCarouselItem, section } from "./components/components.js";
// import { banner } from "./data.js";
// import { banner, trending } from './data.js'; //? hapus setelah mendapatkan data dari API
import { initialSetup } from "./index.js";

initialSetup();

const setBannerCarouselItem = (banner) => {
  const bannerContainer = document.getElementById("banner-container");

  const carouselItems = banner.map((item) =>
    bannerCarouselItem({
      id: item.id,
      title: item.title.romaji,
      description: item.description,
      banner: item.bannerImage,
      year: item.year,
      genre: item.genres[0],
      format: item.format,
    })
  );

  bannerContainer.innerHTML = carouselItems.join("");

  const items = [];
  let index = 0;
  for (const item of bannerContainer.children) {
    items.push({
      position: index++,
      el: item,
    });
  }

  const carousel = new Carousel(items);
  carousel.cycle();

  const prevButton = document.querySelector("[data-carousel-prev]");
  const nextButton = document.querySelector("[data-carousel-next]");

  prevButton.onclick = () => {
    carousel.prev();
  };

  nextButton.onclick = () => {
    carousel.next();
  };
};

//? ambil data dari API
// const getDetail = async () => {
//   try {
//     const res = await fecth("https://animeapi-askiahnur1.b4a.run/anime?sort=popularity");
//     const popular = await res.json();
//     console.log(popular);

//     const res2 = await fecth("https://animeapi-askiahnur1.b4a.run/anime?sort=trending");
//     const trending = await res2.json();

//     const res3 = await fecth("https://animeapi-askiahnur1.b4a.run/anime?sort=top");
//     const top = await res3.json();

//     console.log (popular,trending,top)
//   } catch (error) {}
// };


// const listSection = [
//   {
//     name: "Popular",
//     data: popular, //? ganti dengan data yang sudah diambil
//   },
//   {
//     name: "Trending",
//     data: trending, //? ganti dengan data yang sudah diambil
//   },
//   {
//     name: "Top",
//     data: top, //? ganti dengan data yang sudah diambil
//   },
//   // tambahkan section lain
// ];

// setBannerCarouselItem(result);
// // menampilkan data ke halaman HTML
// document.querySelector("main").innerHTML = listSection.map((item) => section(item)).join("");

// // memberi action pada button scroll kiri dan kanan
// listSection.forEach((item) => {
//   const sectionName = item.name.toLowerCase();

//   const prev = document.querySelector("#" + sectionName + " button[data-carousel-prev]");
//   prev.onclick = () => {
//     document.getElementById(sectionName + "-container").scrollLeft -= 1000;
//   };

//   const next = document.querySelector("#" + sectionName + " button[data-carousel-next]");
//   next.onclick = () => {
//     document.getElementById(sectionName + "-container").scrollLeft += 1000;
//   };
// });

const popular = fetch("https://animeapi-askiahnur1.b4a.run/anime?sort=popularity")
.then((res) => res.json())
.then((result) => {
  const listSection = [
    {
      name: "Popular",
      data: result, //? ganti dengan data yang sudah diambil
    },
    // tambahkan section lain
  ];

    setBannerCarouselItem(result);
    // menampilkan data ke halaman HTML
    document.querySelector("main").innerHTML = listSection.map((item) => section(item)).join("");

    // memberi action pada button scroll kiri dan kanan
    listSection.forEach((item) => {
      const sectionName = item.name.toLowerCase();

      const prev = document.querySelector("#" + sectionName + " button[data-carousel-prev]");
      prev.onclick = () => {
        document.getElementById(sectionName + "-container").scrollLeft -= 1000;
      };

      const next = document.querySelector("#" + sectionName + " button[data-carousel-next]");
      next.onclick = () => {
        document.getElementById(sectionName + "-container").scrollLeft += 1000;
      };
    });
  });

//? ambil data dari API
const trending = fetch("https://animeapi-askiahnur1.b4a.run/anime?sort=trending")
  .then((res) => res.json())
  .then((result) => {
    const listSection = [
      {
        name: "Trending",
        data: result, //? ganti dengan data yang sudah diambil
      },
      // tambahkan section lain
    ];

    setBannerCarouselItem(result);
    // menampilkan data ke halaman HTML
    document.querySelector(".trending").innerHTML = listSection.map((item) => section(item)).join("");

    // memberi action pada button scroll kiri dan kanan
    listSection.forEach((item) => {
      const sectionName = item.name.toLowerCase();

      const prev = document.querySelector("#" + sectionName + " button[data-carousel-prev]");
      prev.onclick = () => {
        document.getElementById(sectionName + "-container").scrollLeft -= 1000;
      };

      const next = document.querySelector("#" + sectionName + " button[data-carousel-next]");
      next.onclick = () => {
        document.getElementById(sectionName + "-container").scrollLeft += 1000;
      };
    });
  });

//? ambil data dari API
const top = fetch("https://animeapi-askiahnur1.b4a.run/anime?sort=top")
  .then((res) => res.json())
  .then((result) => {
    const listSection = [
      {
        name: "top",
        data: result, //? ganti dengan data yang sudah diambil
      },
      // tambahkan section lain
    ];

    setBannerCarouselItem(result);
    // menampilkan data ke halaman HTML
    document.querySelector(".top").innerHTML = listSection.map((item) => section(item)).join("");

    // memberi action pada button scroll kiri dan kanan
    listSection.forEach((item) => {
      const sectionName = item.name.toLowerCase();

      const prev = document.querySelector("#" + sectionName + " button[data-carousel-prev]");
      prev.onclick = () => {
        document.getElementById(sectionName + "-container").scrollLeft -= 1000;
      };

      const next = document.querySelector("#" + sectionName + " button[data-carousel-next]");
      next.onclick = () => {
        document.getElementById(sectionName + "-container").scrollLeft += 1000;
      };
    });
  });
