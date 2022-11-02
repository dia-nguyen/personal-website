"use strict";

const PROJECT_IMG_PATH = "./assets";
const PROJECT_URL_PATH = "https://dianguyen95.github.io";
const projectsList = ["meme-generator", "memory-game"];

/** Changes subheading text in a cycle */
function changeSubheader() {
  let heading = [
    "an aspiring software engineer",
    "a cat mom",
    "a video gamer lover",
    "a designer",
  ];
  let count = 0;

  // loops through headdings and changes subheading text every 2000ms
  setInterval(function () {
    document.querySelector(".alt-text").innerHTML = heading[count];
    if (count == heading.length - 1) {
      count = 0;
    } else {
      count++;
    }
  }, 2000);
}

/** A lightswitch button that toggles between light/dark themes using css attributes */
function lightSwitch() {
  const toggleBtn = document.querySelector("#light-switch i");
  let currentMode = document.body.getAttribute("theme");

  // when button is clicked, dark/light attributes are toggled on body and button icons change to represent state
  toggleBtn.addEventListener("click", function () {
    if (currentMode === "light") {
      document.body.setAttribute("theme", "dark");
      currentMode = "dark";
      toggleBtn.classList.toggle("fas");
      toggleBtn.classList.toggle("far");
    } else {
      document.body.setAttribute("theme", "light");
      currentMode = "light";

      toggleBtn.classList.toggle("fas");
      toggleBtn.classList.toggle("far");
    }
  });
}

/** Creates divs and appends to projects section per project in projectsList */
function generateProjects() {
  projectsList.forEach((project) => {
    let div = document.createElement("div");
    let title = project.replace(/-/g, " ");
    div.classList.add(project, "project");
    div.innerHTML = `
      <a href="#${project}" class="img-preview"><img src="${PROJECT_IMG_PATH}/${project}.png" alt=""></a>
      <a href="${PROJECT_URL_PATH}/${project}" target="_blank" class="btn">${title}</a>
      <a href="#projects" class="light-box" id="${project}">
      <span style="background-image: url('${PROJECT_IMG_PATH}/${project}.png')"></span>
    </a>
    `;
    let projects = document.querySelector(".projects-wrapper");
    projects.append(div);
  });
}

/** Initialize functions when DOM is loaded */
document.addEventListener("DOMContentLoaded", function (event) {
  changeSubheader();
  lightSwitch();
  generateProjects();
});
