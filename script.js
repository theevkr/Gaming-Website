// for arrow slider
const arrows=document.querySelectorAll(".arrow");
// we use querySelectorAll instead of only querySelector to refernce all 4 arrows class
const gamelist=document.querySelectorAll(".game-list");

arrows.forEach((arrow,i)=>{
    const itemNumber=gamelist[i].querySelectorAll("img").length;
    let clickcounter=0;
    arrow.addEventListener("click",()=>{
        const ratio=Math.floor(window.innerWidth/210);
        // ratio is for mobile view
        clickcounter++;
        if(itemNumber-(5+clickcounter)+(5-ratio)>=0){
            // +(5-ratio) is for mobile view sliding 
            gamelist[i].style.transform=`translateX(${gamelist[i].computedStyleMap().get("transform")[0].x.value-240}px)`;
        }else{
            gamelist[i].style.transform="translateX(0)";
            clickcounter=0;
        }
    });
    // console.log(Math.floor(window.innerWidth/210));
    // for mobile view slider
});

// for toogle ball
const ball=document.querySelector(".toogle-ball");
const items=document.querySelectorAll(".container,.navbar-container,.sidebar,.left-menu-icon,.featured-content1,.featured-content2,.feature-desc,.credit,.featured-content1,.featured-content2");
ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active");
    })
    ball.classList.toggle("active");
})
