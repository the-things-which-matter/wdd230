// scripts/links.js
const linksURL = "data/links.json";
const learningLinks = document.getElementById("learningLinks");

fetch(linksURL)
  .then(response => response.json())
  .then(data => {
    learningLinks.innerHTML = ""; // Clear "Loading..." text

    data.lessons.forEach(lesson => {
      const lessonContainer = document.createElement("div");
      lessonContainer.classList.add("lesson");

      const title = document.createElement("h3");
      title.textContent = lesson.lesson;
      lessonContainer.appendChild(title);

      const ul = document.createElement("ul");
      lesson.links.forEach(link => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.title;
        a.target = "_blank";
        li.appendChild(a);
        ul.appendChild(li);
      });

      lessonContainer.appendChild(ul);
      learningLinks.appendChild(lessonContainer);
    });
  })
  .catch(error => {
    console.error("Error loading learning activities:", error);
    learningLinks.textContent = "Unable to load learning activities.";
  });