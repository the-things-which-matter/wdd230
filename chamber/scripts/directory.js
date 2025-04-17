document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    const menuToggle = document.getElementById("menuToggle");
    const nav = document.querySelector("nav");

    menuToggle.addEventListener("click", () => {
        nav.style.display = nav.style.display === "block" ? "none" : "block";
        menuToggle.textContent = nav.style.display === "block" ? "✖" : "≡";
    });

    const darkModeToggle = document.getElementById("darkModeToggle");
    const body = document.body;

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", body.classList.contains("dark-mode"));
    });

    if (localStorage.getItem("darkMode") === "true") {
        body.classList.add("dark-mode");
    }

    const googleMapIframe = document.querySelector("iframe.google-map");
    if (googleMapIframe) {
        googleMapIframe.setAttribute("loading", "lazy");
    }

    const images = document.querySelectorAll("img");
    images.forEach((img) => {
        img.setAttribute("loading", "lazy");
    });

    const directory = document.querySelector("#directory");
    const gridBtn = document.querySelector("#gridView");
    const listBtn = document.querySelector("#listView");

    // ✅ Correct path to JSON file (from root level)
    fetch("../data/members.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error('Failed to fetch members.json');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data); // Check the output of the JSON data
            displayMembers(data.members);
        })
        .catch((error) => {
            console.error("Error loading members:", error);
        });

        function displayMembers(members) {
            if (!directory) return;
        
            directory.innerHTML = ""; // Clear existing
        
            members.forEach((member) => {
                const card = document.createElement("div");
                card.classList.add("card");
        
                card.innerHTML = `
                    <img src="${member.image}" alt="${member.name} logo" loading="lazy">
                    <h3>${member.name}</h3>
                    <p><strong>Address:</strong> ${member.address}</p>
                    <p><strong>Phone:</strong> ${member.phone}</p>
                    <p><a href="${member.website}" target="_blank">Visit Website</a></p>
                    <p><strong>Membership:</strong> ${member.membership}</p>
                    <p>${member.description}</p>
                `;
        
                directory.appendChild(card);
            });
        }
        

    // Toggle Views
    gridBtn?.addEventListener("click", () => {
        directory?.classList.add("grid-view");
        directory?.classList.remove("list-view");
    });

    listBtn?.addEventListener("click", () => {
        directory?.classList.add("list-view");
        directory?.classList.remove("grid-view");
    });
});