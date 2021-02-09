window.onload = () => {
    const upperDropdown = document.querySelector(".upperDropdown");
    const lowerDropdown = document.querySelector(".lowerDropdown");
    const optionsContainer = document.querySelector(".optionContainer");
    const IPU = document.querySelector(".IPU");
    const BTE = document.querySelector(".BTE");
    const content = document.querySelector(".content");
    const ECE = document.querySelectorAll(".ECE");
    const Sems = document.querySelectorAll(".Sems");
    const ECEsem1 = document.querySelectorAll(".ECE-Sem1");
    const ECEsem1sub = document.querySelectorAll(".ECE-Sem1Sub");
    const ECEsem2 = document.querySelectorAll(".ECE-Sem2");
    const ECEsem2sub = document.querySelectorAll(".ECE-Sem2Sub");
    const ECEsem3 = document.querySelectorAll(".ECE-Sem3");
    const ECEsem3sub = document.querySelectorAll(".ECE-Sem3Sub");
    const ECEsem4 = document.querySelectorAll(".ECE-Sem4");
    const ECEsem4sub = document.querySelectorAll(".ECE-Sem4Sub");
    const ECEsem5 = document.querySelectorAll(".ECE-Sem5");
    const ECEsem5sub = document.querySelectorAll(".ECE-Sem5Sub");
    const ECEsem6 = document.querySelectorAll(".ECE-Sem6");
    const ECEsem6sub = document.querySelectorAll(".ECE-Sem6Sub");
    const ECEsem7 = document.querySelectorAll(".ECE-Sem7");
    const ECEsem7sub = document.querySelectorAll(".ECE-Sem7Sub");
    const ECEsem8 = document.querySelectorAll(".ECE-Sem8");
    const ECEsem8sub = document.querySelectorAll(".ECE-Sem8Sub");
    const ECEsub = document.querySelectorAll(".ECE-Sub");
    const IPU_Branch = document.querySelector(".IPU_Branch");
    const BTE_Branch = document.querySelector(".BTE_Branch");
    const illus = document.querySelector(".illustration");
    const folder = document.querySelector(".rightFolder");
    const subject = document.querySelectorAll(".subject");
    const year1 = document.getElementById("2016");

    subject.forEach(sub =>{
        sub.addEventListener("click",()=>{
            illus.classList.add("active");
            folder.classList.add("active");
            var temp = sub.id;
            console.log(temp);
        })
    })

    year1.addEventListener("click",()=>{
        document.querySelector('a').setAttribute("href", "pdf/STARTUPNEW.pdf");
    });

    upperDropdown.addEventListener("click",()=>{
        optionsContainer.classList.toggle("active");
        content.classList.toggle("active");
        upperDropdown.classList.toggle("active");
        for(let i=0;i<ECE.length;i++){
            ECE[i].classList.remove("active");
            Sems[i].classList.remove("active");
            Sems[6].classList.remove("active");
            ECEsem1[i].classList.remove("active");
            ECEsem1sub[i].classList.remove("active");
        }
        IPU.classList.remove("active");
        IPU_Branch.classList.remove("active");
        BTE.classList.remove("active");
        BTE_Branch.classList.remove("active");
        illus.classList.remove("active");
        folder.classList.remove("active");
    });

    IPU.addEventListener("click",()=>{
        IPU_Branch.classList.toggle("active");
        IPU.classList.toggle("active");
        ECEsem1[0].classList.remove("active");
        ECEsem1sub[0].classList.remove("active");
        Sems[0].classList.remove("active");
    });
    BTE.addEventListener("click",()=>{
        BTE_Branch.classList.toggle("active");
        BTE.classList.toggle("active");
        ECEsem1[1].classList.remove("active");
        ECEsem1sub[1].classList.remove("active");
        Sems[6].classList.remove("active");
    });

    ECE.forEach(ece => {
        ece.addEventListener("click",()=>{
            console.log(ece.id);
            if(ece.id === "IPU_ECE"){
                Sems[0].classList.toggle("active");
                ECE[0].classList.toggle("active");
                ECEsem1[0].classList.remove("active");
                ECEsem1sub[0].classList.remove("active");
                illus.classList.remove("active");
                folder.classList.remove("active");
            }else if(ece.id === "BTE_ECE"){
                console.log("hello world");
                Sems[6].classList.toggle("active");
                ECE[1].classList.toggle("active");
                ECEsem1[1].classList.remove("active");
                ECEsem1sub[1].classList.remove("active");
                illus.classList.remove("active");
                folder.classList.remove("active");
            }
        })
    })

    // ECEsem.forEach(e => {
    //     e.addEventListener("click",()=>{
    //         ECEsub.classList.toggle("active");
    //     })
    // })

    ECEsem1.forEach(e => {
        e.addEventListener("click",()=>{
            console.log(e.id);
            if(e.id == "IPU_ECE-sem1"){
                console.log("nijo mann");
                ECEsem1sub[0].classList.toggle("active");
                ECEsem1[0].classList.toggle("active");
    
                var check = ECEsem1[0].classList.contains("active");
                if(!check){
                folder.classList.remove("active");
                illus.classList.remove("active");
                }
            }else{
                ECEsem1sub[1].classList.toggle("active");
                ECEsem1[1].classList.toggle("active");
    
                var check = ECEsem1[1].classList.contains("active");
                if(!check){
                folder.classList.remove("active");
                illus.classList.remove("active");
                }
            }
        })  
    })

    ECEsem2.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem2sub.classList.toggle("active");
            ECEsem2.classList.toggle("active");
        })
    })
    
    ECEsem3.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem3sub.classList.toggle("active");
            ECEsem3.classList.toggle("active");
        })
    })

    ECEsem4.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem4sub.classList.toggle("active");
            ECEsem4.classList.toggle("active");
        })
    })

    ECEsem5.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem5sub.classList.toggle("active");
            ECEsem5.classList.toggle("active");
        }) 
    })

    ECEsem6.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem6sub.classList.toggle("active");
            ECEsem6.classList.toggle("active");
        })
    })

    ECEsem7.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem7sub.classList.toggle("active");
            ECEsem7.classList.toggle("active");
        })
    })

    ECEsem8.forEach(e => {
        e.addEventListener("click",()=>{
            ECEsem8sub.classList.toggle("active");
            ECEsem8.classList.toggle("active");
        })
    })
    
}
