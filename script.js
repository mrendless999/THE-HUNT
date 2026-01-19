/* FLAG PART 2:  @ts_0n_ */

const users = {
    "john": {
        username: "john",
        email: "john@example.com",
        bio: "Just a regular user wandering the web world."
    },
    "admin": {
        username: "admin",
        email: "admin@site.local",
        bio: "Master of secrets. Keeper of keys."
    }
};

const params = new URLSearchParams(window.location.search);
const userParam = params.get("user") || "john";

const user = users[userParam];

// UI update
document.getElementById("username").innerText = user?.username ?? "Unknown";
document.getElementById("email").innerText = user?.email ?? "Unknown";
document.getElementById("bio").innerText = user?.bio ?? "No biography available.";

// Part 3: Console-only surprise when user=admin
if (userParam === "admin") {
    console.log("%c FLAG PART 3: S0lv!ng}", "color: #2aa8ff; font-size:14px;");
    console.log("%c 🧩 Congrats! You found the hidden admin console clue.", "color: #2aa8ff;");
}

