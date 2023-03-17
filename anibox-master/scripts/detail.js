import { detail as data } from "./data.js"; //? hapus setelah data sudah didapat dari API
import { initialSetup } from "./index.js";

initialSetup();

const titleEl = document.getElementById("title");
const descriptionEl = document.getElementById("description");
const bannerImageEl = document.getElementById("banner-image");
const coverImageEl = document.getElementById("cover-image");
const infoEl = document.getElementById("info");

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");

//? fetch data dari API
// const data = ....

//? masukkan data ke masing-masing element
// contoh
// element selanjutnya ......
const getDetail = async (id) => {
  try {
    const res = await fetch("https://animeapi-askiahnur1.b4a.run/anime/" + id);
    const detail = await res.json();
    console.log(detail);

    return detail;
  } catch (error) {}
};

const render = async () => {
  const data = await getDetail(id);

  titleEl.innerHTML = data.title.romaji;
  bannerImageEl.src= data.bannerImage;
  coverImageEl.src = data.coverImage;
  descriptionEl.innerText=data.description;
  

  const info = [
    data.year, 
    data.format, 
    data.episodes ? +`${data.episodes} Episodes` : ""
  ];

  let result = "";
  info.forEach((item) => {
    if (item) {
      result += `<span class="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">${item}</span>`;
    }
  });

  infoEl.innerHTML = result;
};

render();

//? tambahkan script untuk menampilkan daftar genre
// .....
