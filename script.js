// 1. Fake Data - Маалымат объекттердин массивинде
const skillsData = [
    { name: "HTML5", icon: "🌐", desc: "Сайттын структурасы" },
    { name: "CSS3", icon: "🎨", desc: "Сайттын дизайны" },
    { name: "JavaScript", icon: "⚡", desc: "Сайттын логикасы" },
    { name: "Bootstrap", icon: "🚀", desc: "Ыкчам верстка" }
];

// 2. DOM аркылуу маалыматты баракчага чыгаруу (map/forEach)
const skillsList = document.getElementById('skills-list');

function renderSkills() {
    skillsData.forEach(skill => {
        const cardHTML = `
            <div class="col-md-3 col-sm-6">
                <div class="card p-4 h-100 border-0 shadow-sm rounded-4">
                    <div class="display-4">${skill.icon}</div>
                    <h4 class="mt-2 text-primary">${skill.name}</h4>
                    <p class="text-muted small">${skill.desc}</p>
                </div>
            </div>
        `;
        skillsList.innerHTML += cardHTML;
    });
}

// Функцияны иштетүү
renderSkills();

// 3. Form Validation (Текшерүү)
const contactForm = document.getElementById('contactForm');
const statusMsg = document.getElementById('statusMsg');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const msg = document.getElementById('msg').value;

    if (name === "" || email === "" || msg === "") {
        statusMsg.style.color = "red";
        statusMsg.innerText = "Ката: Бардык талааларды толтуруңуз!";
    } else {
        // 4. localStorage колдонуу
        const feedbackData = {
            userName: name,
            userEmail: email,
            time: new Date().toLocaleString()
        };
        localStorage.setItem('lastFeedback', JSON.stringify(feedbackData));

        statusMsg.style.color = "green";
        statusMsg.innerText = "Ийгиликтүү! Сиздин билдирүүңүз жөнөтүлдү.";
        
        // Timer - 
        setTimeout(() => {
            statusMsg.innerText = "";
            contactForm.reset();
        }, 4000);
    }
});

// Сайт ачылганда localStorage'ден маалыматты консолго чыгаруу (текшерүү үчүн)
console.log("Акыркы жөнөткөн колдонуучу:", JSON.parse(localStorage.getItem('lastFeedback')));