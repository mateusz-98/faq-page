document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".faq-block");

    accordions.forEach(accordion => {
        
        const header = accordion.querySelector(".faq-question");
        
        header.addEventListener("click", (e) => {
            
            const question = e.target.closest("button");
            const block = e.target.closest(".faq-block");

            if(question.getAttribute("aria-expanded") === "true") {
                question.setAttribute("aria-expanded", "false");
                block.classList.remove("active");
            } else {
                question.setAttribute("aria-expanded", "true");
                block.classList.add("active");
            }

        });
    });

});