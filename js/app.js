const arr = [
  {
    id: 1,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/global.png',
    title: 'Global Fortune Company Limited Website',
    description: "In this project I made the landing page, contact form and subscription functionalities and also the admin panel for managing the website. I used PHP for the backend and MySQL for the database. I also used Figma for the design.",
    live: 'https://aidan-bn.github.io/global/',
    source: 'https://github.com/Aidan-bn/global/tree/final',
    tech: ['Figma', 'HTML', 'CSS', 'Javascript', 'PHP'],
    status: "Completed project",
    finished: true,
   },
  {
    id: 3,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/champion-agro-world.png',
    title: 'Champion Agro World Limited.',
    description: "Website for a company committed to provide cutting-edge agricultural solutions for farmer and agribusinesses. It is a collaborative project, I contributes to the landing page, contact form and subscription functionalities",
    live: 'https://aidan-bn/',
    source: 'https://github.com/chimwemwe007/Champion_Agro_World',
    tech: ['HTML', 'Javascript', 'Bootstrap', 'PHP'],
    status: "Under Progress project",
    finished: false,
  },
  {
    id: 4,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/fast-pizza.png',
    title: 'Fast Pizza Application',
    description: "A project for learning purposes. user can view available pizza and order according to their preference. List of pizza are being loaded with an API",
    live: 'https://aidan-bng/',
    source: 'https://github.com/Aidan-bn/fast-pizza/',
    tech: ['HTML', 'CSS', 'Javascript', 'ReactJS', 'Tillwindcss', 'Redux', 'Context API', 'API'],
    status: "Under Progress project",
    finished: false
  },
  {
    id: 4,
    imageDesk: 'image/popup-desk.jpg',
    imageMob: 'image/baptism.png',
    title: 'Baptism Application',
    description: "A project for learning purposes. church can register online their belivers after being baptised",
    live: 'https://aidan-bng/',
    source: 'https://github.com/Aidan-bn/Auth/',
    tech: ['HTML', 'Taillwindcss', 'Javascript', 'React', 'NodeJS', 'Codepen'],
    status: "Under Progress project",
    finished: false
  },
];
let htmlstring = '';
arr.forEach((item) => {
  let string = `
    <div class="work-item">
      <div class="div-wrapper">
      <img src="${item.imageMob}" alt="champion-agro-world" class="img-demo"/>
      </div>
      <div class="bottom-part">
          <h4>${item.title}</h4>
          <ul>`;
  let string1 = " ";
  item.tech.forEach((li) => {
    string1 += `<li><a>${li}</a></li>`;
  });
  string += `${string1}
          </ul>
          <a id="${item.id}" class="btn-primary">See Project</a>
      </div>
    </div>
    `;
  htmlstring += string;
  string = '';
});
const getCard = document.querySelector('.card');
getCard.innerHTML = htmlstring;
const getheader = document.querySelector('header');
const getmenu = document.querySelector('.humburger-wrapper');
const getclose = document.querySelector('nav ul .closeclass');
const getli = document.querySelectorAll('nav ul .li-links');
const getprojbtn = document.querySelectorAll('.work .work-item .btn-primary');
const getpopupclose = document.querySelector('.popup .closeclass');
getmenu.addEventListener('click', () => {
  getheader.classList.toggle('active');
});
getclose.addEventListener('click', () => {
  getheader.classList.remove('active');
});
getli.forEach((item) => {
  item.addEventListener('click', () => {
    getheader.classList.remove('active');
  });
});
getprojbtn.forEach((item) => {
  item.addEventListener('click', (e) => {
    const getId = e.currentTarget.id;
    const result = arr.find((item1) => item1.id === Number(getId));
    let popupHtml = '';
    popupHtml = `
              <div class="image-wrapper popup-align">
                  <strong>${result.status}</strong>
                  <hr />
                  <p>${result.description}</p>
              </div>
              <div class="title-and-btn">
                  <h2>${result.title}</h2>
                  <div class="btn-wrapper">
                      <a href="${result.finished ? result.live : '' }" class="btn-primary" type="submit">${result.finished ? 'See live <img src="image/popup-see.svg">' : 'No demo'} </a>
                      <a href="${result.source}" class="btn-primary" type="submit">See source<img src="image/popup-GitHub.svg"></a>
                  </div>
              </div>
              <div class="work">
                  <ul>`;
    let string1 = '';
    result.tech.forEach((li) => {
      string1 += `<li><a>${li}</a></li>`;
    });
    popupHtml += `${string1}
                  </ul>
              </div>
              <p>
                  Technologies used in this Project
              </p>
              `;
    getpopupclose.insertAdjacentHTML('afterend', popupHtml);
    document.querySelector('body').classList.add('no-scroll');
  });
});
getpopupclose.addEventListener('click', () => {
  document.querySelector('body').classList.remove('no-scroll');
  while (getpopupclose.nextElementSibling) {
    getpopupclose.nextElementSibling.remove();
  }
});
const getformbtn = document.querySelector('.form form');
const geterror = document.querySelector('.errorclass');
getformbtn.addEventListener('submit', (e) => {
  if (getformbtn.useremail.value !== getformbtn.useremail.value.toLowerCase()) {
    geterror.style.display = 'block';
    e.preventDefault();
  }
});
