import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Nature",
    img_src: "https://cdn.singulart.com/artworks/v2/cropped/33666/main/carousel/1563881_6946568f57a08fb7b0d73e972a401cac.jpeg",
    banner_img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg",

  },

  {
    _id: uuid(),
    categoryName: "Portrait",
    img_src: "https://cdn.singulart.com/artworks/v2/cropped/10801/main/zoom/1387023_70a06b872ad30f26deca1bcd9dbfc5e1.jpeg",
    banner_img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Landscape",
    img_src: "https://cdn.singulart.com/artworks/v2/cropped/26417/main/zoom/1228143_6728de7993de436e49f0e0cf10738c49.jpeg",
    banner_img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Digital Art",
    img_src: "https://cdn.singulart.com/artworks/pictures/cropped/4475/13249/carousel/serie_13249_7ba9a7f02c0adb995f039d693a641d11.jpeg",
    banner_img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/digital.b3f87a7c.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Abstraction",
    img_src: "https://cdn.singulart.com/artworks/v2/cropped/4465/main/fhd/1264235_d9a50ca5720fbde6d1eda5150b9c6316.jpeg",
    banner_img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/nature.90ad9bf4.jpg",

  },
  {
    _id: uuid(),
    categoryName: "Street Art",
    img_src: "https://cdn.singulart.com/artworks/v2/cropped/7701/main/carousel/1395091_8664f84d39f23a4f5590912db432c62d.jpeg",
    banner_img: "https://d17h7hjnfv5s46.cloudfront.net/assets/build/images/banners/search/desktop/categorie/street_art.aeb58ffa.jpg",

  },
];

  // const category_list = [
  //   "Abstraction",
  //   "Nature",
  //   "Landscape",
  //   "urban",
  //   "Street",
  //   "Medival",
  //   "Pop Culture",
  //   "Portrait",
  // ];