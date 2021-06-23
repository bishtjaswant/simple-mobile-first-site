function hamBurger() {
    const hamburger= document.querySelector('#hamburger');
    const navList= document.querySelector(".nav-list");

    hamburger.addEventListener("click",(e) => {
        navList.classList.toggle('show');
    });

    //  if ( navList.classList.contains("show")  ) {
    //     window.document.body.addEventListener('click',(params) => {
    //         navList.classList.remove('show');
              
    //       });
    //  }
 
}

hamBurger();