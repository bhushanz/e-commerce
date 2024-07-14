
let productContainer = document.querySelector(".productContainer");

const cardData = [
    {
        "iteamImage" : "img/pink top.webp",
        "iteamName": "Glorial pinkk",
        "price": 20

    },
    {
        "iteamImage" : "img/2nd.webp",
        "iteamName": "Bec Low-Rise Micro Mini Skort",
        "price": 19

    },
    {
        "iteamImage" : "img/3rd.webp",
        "iteamName": "Seamless Longline Tube Top",
        "price": 22

    },
    {
        "iteamImage" : "img/4th.webp",
        "iteamName": "Out From Under Bec Mini Dress",
        "price": 20

    },
    {
        "iteamImage" : "img/5th.webp",
        "iteamName": "Printed Mesh Tube Top",
        "price": 16

    }
    , {
        "iteamImage" : "img/6th.webp",
        "iteamName": "BDG Universal Shrunken Tee",
        "price": 17

    }
]


cardData.forEach((element , i)=>{ 
// creat card 
 const card = document.createElement("div");
 card.classList= "iteam";    
//  created iteam div

// created template and saved it into a variable named productainfo
 const productInfo =
 `
   <div class="iteam" id="cardsValue">
                <div class="iteamImag"> <img src="${cardData[i].iteamImage} " alt="" class="iteamImage"></div>
                <div class="iteamName">
                    <h4> ${cardData[i].iteamName} </h4>
                    <p>$ ${cardData[i].price} </p>
                </div>
              </div>
 `
 card.innerHTML += productInfo;
 productContainer.appendChild(card);
})
// card end here


let sliderContainer = document.querySelector(".slider");

let productData =[
    {
        "image" : "img/slide1.webp",
        "productName": "Satin Crop Sleeveless Top OL408",
        "product-price": 30

    },
    {
        "image" : "img/slide2.webp",
        "productName": "Satin Crop Sleeveless Top white",
        "product-price":33

    },
    {
        "image" : "img/slide3.webp",
        "productName": "Graphic Zip-Up Hoodie OL408",
        "product-price": 28

    },
    {
        "image" : "img/slide4.webp",
        "productName": "Summer Oversize Buttoned Shirt OL408",
        "product-price": 22

    },
    {
        "image" : "img/slide5.webp",
        "productName": "Washed Wide Leg Jeans CL404",
        "product-price": 32

    },
    {
        "image" : "img/slide6.webp",
        "productName": "Cat Knitted Hat CO327",
        "product-price": 20

    },
  
]
productData.forEach((data ,i) =>{

    
     const infodiv =document.createElement("div");
     infodiv.classList = "product";

     const slideDetails =
     ` <div class="image">
          <img src="${productData[i].image}" alt="">
        </div>
        <div class="product-name">
        <h4>${productData[i].productName}</h4>
        </div>
        <div class="product-price">
          <h5>$ ${productData[i]["product-price"]}</h5>
        </div>
        `

        infodiv.innerHTML+=slideDetails; 
        sliderContainer.appendChild(infodiv);
})



// slider logic starts from here
const product = [...document.querySelectorAll('.slider')];
 const prev=[...document.querySelectorAll(".prev-btn")];
 const nextbtn= [...document.querySelectorAll(".next-btn")];

 product.forEach((item , i) => {
    let containerDimension=item.getBoundingClientRect();
    let containerWidth =containerDimension.width;

     nextbtn[i].addEventListener('click',() => {
      item.scrollLeft += containerWidth;
     })
     prev[i].addEventListener('click',() => {
        item.scrollLeft -= containerWidth;
       })

 })
//  slider end here 
   
 