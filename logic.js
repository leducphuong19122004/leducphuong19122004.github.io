const button_skill_1 = document.querySelector(".button_skill_1");
const button_skill_2 = document.querySelector(".button_skill_2");
const button_skill_3 = document.querySelector(".button_skill_3");

const text_skill_content = document.querySelectorAll(".text-skill-content");

button_skill_2.addEventListener("click", () => {
    if (button_skill_2.textContent == "See Less") {
        text_skill_content[1].textContent = "My proficiency in backend development is unmatched, with a strong command of server-side programming languages like Node.js and C# and also with frameworks backend like Express and .NET, and...";
        button_skill_2.textContent = "Read More";
    } else {
        text_skill_content[1].textContent = "My proficiency in backend development is unmatched, with a strong command of server-side programming languages like Node.js and C# and also with frameworks backend like Express and .NET, and my ability to build scalable and robust server-side applications is unparalleled. I am always looking for ways to optimize performance and am constantly striving to improve the efficiency and reliability of my backend code."
        button_skill_2.textContent = "See Less";
    }
});

button_skill_1.addEventListener("click", () => {
    if (button_skill_1.textContent == "See Less") {
        text_skill_content[0].textContent = "I had experience in frontend development, with extensive experience in HTML, CSS, JavaScript, React and Vue. My ability to create beautiful and responsive user interfaces is unmatched...";
        button_skill_2.textContent = "Read More";
    } else {
        text_skill_content[0].textContent = "I had experience in frontend development, with extensive experience in HTML, CSS, JavaScript, React and Vue. My ability to create beautiful and responsive user interfaces is unmatched. I am constantly keeping up with the latest trends in frontend development and am always looking for new ways to improve my skills. "
        button_skill_1.textContent = "See Less";
    }
});

button_skill_3.addEventListener("click", () => {
    if (button_skill_3.textContent == "See Less") {
        text_skill_content[2].textContent = "My excellent communication and problem-solving skills allow me to collaborate effectively with my team and clients alike. I have a strong sense of empathy, which enables me to understand the needs of others and...";
        button_skill_2.textContent = "Read More";
    } else {
        text_skill_content[2].textContent = "My excellent communication and problem-solving skills allow me to collaborate effectively with my team and clients alike. I have a strong sense of empathy, which enables me to understand the needs of others and work towards finding solutions that meet their requirements. You are a natural leader who inspires and motivates those around you, and you have a knack for bringing out the best in people."
        button_skill_3.textContent = "See Less";
    }
});