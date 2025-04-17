document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const directory = document.querySelector("#directory");
    const gridBtn = document.querySelector("#gridView");
    const listBtn = document.querySelector("#listView");

    fetch("data/members.json")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch members.json");
            }
            console.log("JSON fetched successfully:", response);
            return response.json();
        })
        .then((data) => {
            console.log("Received data:", data);
            displayMembers(data.members);
        })
        .catch((error) => {
            console.error("Error loading members:", error);
        });

    function displayMembers(members) {
        console.log("Displaying members...");
        if (!directory) return;
        directory.innerHTML = "";

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

    gridBtn?.addEventListener("click", () => {
        directory?.classList.add("grid-view");
        directory?.classList.remove("list-view");
    });

    listBtn?.addEventListener("click", () => {
        directory?.classList.add("list-view");
        directory?.classList.remove("grid-view");
    });
});