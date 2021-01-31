window.onload = () => {
    const upperDropdown = document.querySelector(".upperDropdown");
    const lowerDropdown = document.querySelector(".lowerDropdown");
    const optionsContainer = document.querySelector(".optionContainer");
    const content = document.querySelector(".content");
    const ECE = document.querySelector(".ECE");
    const ECEsem = document.querySelector(".ECE-Sem");
    const ECEsem1 = document.querySelector(".ECE-Sem1");
    const ECEsem1sub = document.querySelector(".ECE-Sem1Sub");
    const ECEsem2 = document.querySelector(".ECE-Sem2");
    const ECEsem2sub = document.querySelector(".ECE-Sem2Sub");
    const ECEsem3 = document.querySelector(".ECE-Sem3");
    const ECEsem3sub = document.querySelector(".ECE-Sem3Sub");
    const ECEsem4 = document.querySelector(".ECE-Sem4");
    const ECEsem4sub = document.querySelector(".ECE-Sem4Sub");
    const ECEsem5 = document.querySelector(".ECE-Sem5");
    const ECEsem5sub = document.querySelector(".ECE-Sem5Sub");
    const ECEsem6 = document.querySelector(".ECE-Sem6");
    const ECEsem6sub = document.querySelector(".ECE-Sem6Sub");
    const ECEsem7 = document.querySelector(".ECE-Sem7");
    const ECEsem7sub = document.querySelector(".ECE-Sem7Sub");
    const ECEsem8 = document.querySelector(".ECE-Sem8");
    const ECEsem8sub = document.querySelector(".ECE-Sem8Sub");
    const ECEsub = document.querySelector(".ECE-Sub");
    const Branch = document.querySelector(".Branch");
    const illus = document.querySelector(".illustration");
    const folder = document.querySelector(".rightFolder");
    const subject = document.querySelector(".subject");
    const year1 = document.getElementById("2016");

    subject.addEventListener("click",()=>{
        illus.classList.toggle("active");
        folder.classList.toggle("active");
        var temp = subject.id;
        // console.log(temp);
        // year1.onclick=function(){
            year1.setAttribute("href", "pdf/STARTUPNEW.pdf");
        // };
    });

    year1.addEventListener("click",()=>{
        document.querySelector('a').setAttribute("href", "pdf/STARTUPNEW.pdf");
    });

    upperDropdown.addEventListener("click",()=>{
        optionsContainer.classList.toggle("active");
        content.classList.toggle("active");
        upperDropdown.classList.toggle("active");
    });

    ECE.addEventListener("click",()=>{
        ECEsem.classList.toggle("active");
        ECE.classList.toggle("active");
    });

    ECEsem.addEventListener("click",()=>{
        ECEsub.classList.toggle("active");
    });

    ECEsem1.addEventListener("click",()=>{
        ECEsem1sub.classList.toggle("active");
        ECEsem1.classList.toggle("active");
    });

    ECEsem2.addEventListener("click",()=>{
        ECEsem2sub.classList.toggle("active");
        ECEsem2.classList.toggle("active");
    });
    
    ECEsem3.addEventListener("click",()=>{
        ECEsem3sub.classList.toggle("active");
        ECEsem3.classList.toggle("active");
    });
    
    ECEsem4.addEventListener("click",()=>{
        ECEsem4sub.classList.toggle("active");
        ECEsem4.classList.toggle("active");
    });
    
    ECEsem5.addEventListener("click",()=>{
        ECEsem5sub.classList.toggle("active");
        ECEsem5.classList.toggle("active");
    });
    
    ECEsem6.addEventListener("click",()=>{
        ECEsem6sub.classList.toggle("active");
        ECEsem6.classList.toggle("active");
    });
    
    ECEsem7.addEventListener("click",()=>{
        ECEsem7sub.classList.toggle("active");
        ECEsem7.classList.toggle("active");
    });
    
    ECEsem8.addEventListener("click",()=>{
        ECEsem8sub.classList.toggle("active");
        ECEsem8.classList.toggle("active");
    });
    
}