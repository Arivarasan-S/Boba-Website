// GSAP Animation
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrambleTextPlugin, ScrollTrigger)
    // Coffee image
    const mm = gsap.matchMedia();
    mm.add("(min-width:1322px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '206% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "80",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "160",
                x: "-84",
                rotate: '-37'
            })
    })
    mm.add("(min-width:1200px) and (max-width:1321px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '206% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "280",
                x: "-84",
                rotate: '-37'
            })
    })
    mm.add("(min-width:1000px) and (max-width:1199px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '230% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "60",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=75",
                x: "-50",
                rotate: '-40'
            })
    })
    mm.add("(min-width:901px) and (max-width:1000px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '254% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "50",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=150",
                x: "40",
                rotate: '-37'
            })
    })
    mm.add("(min-width:800px) and (max-width:900px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '430% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "160",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=40",
                x: "-30",
                rotate: '-37',
                scale: 1.3
            })
    })
    mm.add("(min-width:765px) and (max-width:799px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '400% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "170",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=150",
                x: "-20",
                rotate: '-37',
                scale: 1.2
            })
    })
    mm.add("(min-width:666px) and (max-width:766px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '490% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "30",
            rotate: '0'
        })
            .to('.coffeeBox', {
                y: "+=50",
                x: "-50",
                rotate: '-37',
                scale: 1.2
            })
    })

    mm.add("(min-width:601px) and (max-width:665px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '490% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "30",
            rotate: '0'
        })
            .to('.coffeeBox', {
                y: "+=100",
                x: "-100",
                rotate: '-37',
                scale:1.2,
            })
    })
    mm.add("(min-width:584px) and (max-width:600px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '650% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "30",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=100",
                x: "-40",
                rotate: '0',
                scale: 1.5
            })
    })
    mm.add("(min-width:490px) and (max-width:583px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '880% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "30",
            rotate: '36',
            scale: 1.2
        })
            .to('.coffeeBox', {
                y: "+=100",
                x: "-40",
                rotate: '0',
                scale: 1.5
            })
    })
    mm.add("(min-width:436px) and (max-width:489px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '860% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "30",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=150",
                x: "-25",
                rotate: '-20',
                scale:1.5
            })
    })
    mm.add("(min-width:419px) and (max-width:435px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '+=920% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "150",
            x: "30",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=150",
                x: "-30",
                rotate: '-30',
                scale:1.5
            })
             
    })
    mm.add("(min-width:344px) and (max-width:418px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '+=946% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "100",
            x: "30",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=150",
                x: "-30",
                rotate: '-30',
                scale:1.5
            })
        })     
        mm.add("(min-width:300px) and (max-width:343px)", () => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.coffeeBox',
                start: 'top top',
                end: '+=966% top',
                scrub: true,
                pin: true,
            }
        });
        tl.to('.coffeeBox', {
            y: "100",
            x: "30",
            rotate: '36'
        })
            .to('.coffeeBox', {
                y: "+=150",
                x: "-30",
                rotate: '-30',
                scale:1.5
            })
        })   

    // Home 
    gsap.from('#homeLeft', {
        scrollTrigger: {
            trigger: '#homeLeft',
            trat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",

        },
        scale: 0.8,
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out'
    })
    gsap.from('.hp-cards', {
        scrollTrigger: {
            trigger: '.hp-cards',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 1,
        stagger: 0.2
    })
    gsap.from('.point', {
        scrollTrigger: {
            trigger: '.point',
            strat: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.5,
        duration: 3.5,
        stagger: 3.5
    })
    gsap.from('.TPright', {
        scrollTrigger: {
            trigger: '.TPright',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 1,
        stagger: 0.2
        // scall:'0.9'
    })
    gsap.from('.fav', {
        scrollTrigger: {
            trigger: '.fav',
            strat: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
    })

    gsap.from('.imageBox1', {
        scrollTrigger: {
            trigger: '.imageBox1',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 2,
    })

    gsap.from('.imageBox2', {
        scrollTrigger: {
            trigger: '.imageBox2',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 2,
    })
    gsap.from('.imageBox3', {
        scrollTrigger: {
            trigger: '.imageBox3',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 2,
    })
    gsap.from('.imageBox4', {
        scrollTrigger: {
            trigger: '.imageBox4',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 2,
    })
    gsap.from('.imageBox5', {
        scrollTrigger: {
            trigger: '.imageBox5',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 2,
    })

    gsap.from('.imageBox6', {
        scrollTrigger: {
            trigger: '.imageBox6',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '-100%',
        duration: 2,
    })
    gsap.from('.imageBox7', {
        scrollTrigger: {
            trigger: '.imageBox7',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '-100%',
        duration: 2,
    })
    gsap.from('.imageBox8', {
        scrollTrigger: {
            trigger: '.imageBox8',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '-100%',
        duration: 2,
    })
    gsap.from('.imageBox9', {
        scrollTrigger: {
            trigger: '.imageBox9',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '-100%',
        duration: 2,
    })
    gsap.from('.imageBox10', {
        scrollTrigger: {
            trigger: '.imageBox10',
            strat: 'top 90%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '-100%',
        duration: 2,
    })
    gsap.from('.fiveprow1', {
        scrollTrigger: {
            trigger: '.fiveprow1',
            strat: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
    })

    gsap.from('.wfBox2', {
        scrollTrigger: {
            trigger: '.wfBox2',
            strat: 'top 80%',
            end: 'top 68%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
    })

    gsap.from('.wfBox1', {
        scrollTrigger: {
            trigger: '.wfBox1',
            strat: 'top 90%',
            end: 'top 68%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '-100%',
        duration: 1,
    })
    gsap.from('.wfBox3', {
        scrollTrigger: {
            trigger: '.wfBox3',
            strat: 'top 90%',
            end: 'top 68%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        x: '100%',
        duration: 1,
    })
    gsap.from('.rpcontant', {
        scrollTrigger: {
            trigger: '.rpcontant',
            strat: 'top 80%',
            end: 'top 68%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        scale: 0.5,
        duration: 1,
    })
    gsap.from('.fcont', {
        scrollTrigger: {
            trigger: '.fcont',
            strat: 'top 80%',
            end: 'top 30%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        duration: 1,
    })

    gsap.from('.rbox', {
        scrollTrigger: {
            trigger: '.rbox',
            strat: 'top 80%',
            end: 'top 10%',
            scrub: true,
            toggleActions: "play none none none",
        },
        opacity: 0,
        duration: 1,
    })

    ScrollTrigger.matchMedia({
        "(max-width:600)": function () {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.coffeeBox',
                    strat: 'top top',
                    end: '206% top',
                    scrub: true,
                    pin: true,
                }
            });
            tl.to('.coffeeBox', {
                y: 380,
                rotate: '36'
            })
                .to('.coffeeBox', {
                    y: "160",
                    x: "-84",
                    rotate: '-37'
                })
        }
    })

});
// Cookie box
const isMobile = window.innerWidth <= 600;
let cookie = document.querySelector(".cookie");
if (window.innerWidth <= 600) {
    setTimeout(() => {
        cookie.style = "opacity:1 ; top:180px";
    }, 9000)
}
else if (window.innerWidth <= 1321) {
    setTimeout(() => {
        cookie.style = "opacity:1 ; top:300px";
    }, 14000)
}
else {
    setTimeout(() => {
        cookie.style = "opacity:1 ; top:320px";
    }, 14000)
}
const closeCook = () => {
    setTimeout(() => {

        cookie.style = "opacity:0;top: 100%;"
    }, 0);
}
// LogIn Box
document.querySelector(".log").addEventListener('click', () => {

    if (window.innerWidth > 1321) {
        document.querySelector(".logInForm").style = `top:55%; left:50% ; transform:translate(-50%,-50%)`; closePrice();
    }
    else {
        document.querySelector(".logInForm").style = `top:50%; left:50% ; transform:translate(-50%,-50%)`;
    }
})
const closeLogInFrom = () => {
    document.querySelector(".logInForm").style = "top:-100%";
}
// Account Create
const cAccount = document.querySelector(".box");
const AccountCreate = () => {
    cAccount.style = "top:50%; left:50%;transform:translate(-50%,-50%)";
    document.querySelector(".logInForm").style = "top:100px; display:none ;left:40%";
}

// Account Create Back Icon
const back = () => {
    cAccount.style = "top:130px; display:none;left:36%";
    document.querySelector(".logInForm").style = "top:50%; left:50% ; transform:translate(-50%,-50%); display:flex;";
}
// Payment Box
const back1 = () => {
    document.querySelector(".paySuccess").style = "display:none";
    showPrice();
}
const paySuccess = () => {
    if (bill.innerText > 10) {
        if (window.innerWidth <= 600) {
            document.querySelector(".paySuccess").style = "right:6%; top:50px;display:flex";
            closePrice();
        }
        else if (window.innerWidth <= 767) {
            document.querySelector(".paySuccess").style = "right:20%; top:50px;display:flex";
            closePrice();
        }
        else if (window.innerWidth <= 900) {
            document.querySelector(".paySuccess").style = "right:30%; top:50px;display:flex";
            closePrice();
        }
        else if (window.innerWidth <= 1000) {
            document.querySelector(".paySuccess").style = "right:40%; top:50px;display:flex";
            closePrice();
        }
        else if (window.innerWidth <= 1321) {
            document.querySelector(".paySuccess").style = "right:40%; top:50px;display:flex";
            closePrice();
        }
        else {
            document.querySelector(".paySuccess").style = "display:flex";
            closePrice();
        }
    }
    else {
        alert("Sorry, No product is there so Please add the product ")
    }

}
// Pay Icon 
const payIcon = document.getElementById("payIcon");
payIcon.addEventListener("ready", () => {
    payIcon.playerInstance.lottie.goToAndStop(0, true);
});
document.querySelector(".orderbtn").addEventListener("click", () => {
    payIcon.playerInstance.lottie.goToAndPlay(0, true);
});


//------------Add to cart---------

let addCart = document.getElementById("addCart");
let PriceBox = document.querySelector(".pricediv"),
    DowAngle = document.getElementById("downAngle"),
    CloseIcon = document.querySelector("#downAngle"),
    dates = document.getElementById("date"),
    time = document.getElementById("timing"),
    proCount = document.querySelector(".procount1"),
    isMobileBill=document.querySelector(".procount2");
let items = document.querySelector(".imageBoxes"),
    totalAmount = document.getElementById("totalAmount"),
    total = document.querySelector(".totalAmount");
let box = document.querySelector(".imageBoxes");
let bill = document.getElementById("payAmount");
let product = document.querySelector(".cardBox");

// ADD cart 
let CatBox = () => {
    addCart.style = "right:0px";
}
let clossCatBox = () => {
    addCart.style = "right:-100%";
    back1();
}
// Price box
const showPrice = () => {
    if (window.innerWidth <= 600) {
        PriceBox.style = "top:10px;right:6%"
    }
    else if (window.innerWidth <= 767) {
        PriceBox.style = "top:0px;right:20%";
    }
    else if (window.innerWidth <= 900) {
        PriceBox.style = "top:15px;right:30%";
    }
    else if (window.innerWidth <= 1000) {
        PriceBox.style = "top:15px;right:40%";
    }
    else if (window.innerWidth <= 1321) {
        PriceBox.style = "top:15px;right:40%";
    }
    else {
        PriceBox.style = "right:40%";
    }

}
const closePrice = () => {
    PriceBox.style = "right:-100%";
    CloseIcon.style = "transform: rotate(0deg)";
}


// Local Date & Time
time.innerText = new Date().toLocaleString();

// Product Detailes
let details = [{
    id: 1,
    name: "Sweet Blush",
    price: 250,
    image: "./strawberry.png",
    quantity: 0,
}, {
    id: 2,
    name: "Caramel Pearl",
    price: 250,
    image: "./caramelPearl.png",
    quantity: 0,
}, {
    id: 3,
    name: "Taro Delight",
    price: 250,
    image: "./taroDelight.png",
    quantity: 0,
}, {
    id: 4,
    name: "Mango Passion",
    price: 250,
    image: "./MangoPassion.png",
    quantity: 0,
},
{
    id: 5,
    name: "Brown sugar",
    price: 250,
    image: "./Brownsugar.jpg",
    quantity: 0,
},
{
    id: 6,
    name: "Thai milk tea",
    price: 250,
    image: "./ThaiMilkTea.jpg",
    quantity: 0,
},
{
    id: 7,
    name: "Honeydew",
    price: 250,
    image: "./Honeydew.jpg",
    quantity: 0,
},
{
    id: 8,
    name: "Oreo",
    price: 250,
    image: "./Oreo.jpg",
    quantity: 0,
},
{
    id: 9,
    name: "Winter melon",
    price: 250,
    image: "./WinterMelon.jpg",
    quantity: 0,
},
{
    id: 10,
    name: "Horchata",
    price: 250,
    image: "./Horchata.jpg",
    quantity: 0,
},
]

// Product Box

details.forEach((data, position) => {
    box.innerHTML += `
    
    <div class="imageBox imageBox${data.id}" style="background-image: url(${data.image});">
                    <h2>${data.name}</h2>
                    <div class="imgaCont">
                        <h3>Rs.${data.price}</h3>
                        <button onclick="AddToCartButton(${position})" class="add"><i class="fa-solid fa-circle-plus"></i></button>
                    </div>
                </div>
    `
})
let storage = [];
let AddToCartButton = (id) => {
    if (storage[id] == null) {
        storage[id] = details[id];
        storage[id].quantity += 1;
    } else if (storage[id].quantity >= 1) {
        storage[id].quantity += 1;
    }
    cartProductLoad();
}
let cartProductLoad = () => {
    let count = 0, totalCount = 0;
    product.innerHTML = "";
    storage.forEach((data, position) => {
        count += data.quantity;
        totalCount += data.price * data.quantity;
        product.innerHTML += `
       <div class="addCont py-3 ">
            <div class="imageAndCont">
            <img src="${data.image}" width="90px" height="100px"alt="">
            <div class="cont">
                <h4>${data.name}</h4>
                <h6>Rs. <span>${data.price}</span></h6>
                <p class="add_di"><button onclick="Quantity(${position},${data.quantity + 1})"> + </button> ${data.quantity} <button onclick="Quantity(${position},${data.quantity - 1})"> - </button></p>

            </div>
            </div>
            <button class="trash" onclick="Quantity(${position},${0})"><i class="fa-solid fa-trash-can"></i></button>
        </div>`;
    })
    totalAmount.innerHTML = totalCount;
    total.innerHTML = totalCount + 10;
    bill.innerHTML = totalCount + 10;
    proCount.innerHTML = count;
    isMobileBill.innerHTML=count;

    if (window.screen.width<=991) {
        if (isMobileBill.innerHTML==0) {
             isMobileBill.style = "display:none";
        } else {
            isMobileBill.style = "display:inline";
        }
    }
    else{
         if (proCount.innerHTML == 0 ) {
        proCount.style = "display:none"; 
    }
    else {
        proCount.style = "display:inline";
    }
    }
   
}
let Quantity = (key, qty) => {
    if (qty == 0) {
        storage[key].quantity = 0;
        delete storage[key];
    } else {
        storage[key].quantity = qty;
    }
    cartProductLoad();
}
// console.log(storage);

