const learningLinksContainer = document.getElementById("learningLinks");

fetch("data/links.json")
    .then(response => response.json())
    .then(data => {
        let html = "";
        data.weeks.forEach(week => {
            html += `<h3>${week.week}</h3><ul>`;
            week.links.forEach(link => {
                html += `<li><a href="${link.url}" target="_blank">${link.title}</a></li>`;
            });
            html += "</ul>";
        });
        learningLinksContainer.innerHTML = html;
    })
    .catch(error => {
        console.error("Error loading learning activities:", error);
        learningLinksContainer.innerHTML = "<p>Failed to load activities.</p>";
    });