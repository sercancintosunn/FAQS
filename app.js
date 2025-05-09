const iconMinus = document.querySelectorAll(".img");



const paragraphs = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! ",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
];


iconMinus.forEach((icon, index ) =>{
    icon.addEventListener("click",() =>{
        
        const textDiv = icon.parentElement.parentElement;
        const paragrafVarsa = textDiv.querySelector(".answer");
        const isAlreadyOpen = !!paragrafVarsa;

        document.querySelectorAll(".answer").forEach(a => a.remove());
        document.querySelectorAll(".img").forEach(i => i.src = "./images/icon-plus.svg");
        

        if(isAlreadyOpen) return;
        
        
        icon.src = "./images/icon-minus.svg";
        
        const answer = document.createElement("div");
        const p = document.createElement("p");
        answer.className = "answer";
        p.textContent = paragraphs[index];
        answer.appendChild(p);
        textDiv.appendChild(answer);
        


    });
})






