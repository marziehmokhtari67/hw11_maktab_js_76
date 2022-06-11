let arrayOfImage=["https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg",
"https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg"]
let img = document.getElementsByTagName("img")
console.log(img)
for(let i=0; i<8 ; i++){
    img[i].setAttribute("src",arrayOfImage[i])
    
}
