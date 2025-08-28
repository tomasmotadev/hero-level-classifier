<footer class="py-10 text-sm text-gray-500">© <span id="year"></span> Tomás Mota LLC. All Rights Reserved.</footer>
  
//
// Mobile Menu
//
// Menu mobile toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

// Dropdown Photography
const mobilePhotoBtn = document.getElementById('mobile-photography-btn');
const mobilePhotoMenu = document.getElementById('mobile-photography-menu');

mobilePhotoMenu.style.display = 'none';
mobilePhotoBtn.classList.remove('active');

mobilePhotoBtn.addEventListener('click', () => {
  const isOpen = mobilePhotoMenu.style.display === 'block';
  mobilePhotoMenu.style.display = isOpen ? 'none' : 'block';
  mobilePhotoBtn.classList.toggle('active', !isOpen);
});

// Dropdown Contact
const mobileContactBtn = document.getElementById('mobile-contact-btn');
const mobileContactMenu = document.getElementById('mobile-contact-menu');

mobileContactMenu.style.display = 'none';
mobileContactBtn.classList.remove('active');

mobileContactBtn.addEventListener('click', () => {
  const isOpen = mobileContactMenu.style.display === 'block';
  mobileContactMenu.style.display = isOpen ? 'none' : 'block';
  mobileContactBtn.classList.toggle('active', !isOpen);
});

// **Hero Classifier Logic (JavaScript)**
function classifyHero() {
    const name = document.getElementById('heroName').value;
    const xp = parseInt(document.getElementById('heroXp').value);
    const resultDiv = document.getElementById('result');

    if (!name.trim() || isNaN(xp)) {
        resultDiv.textContent = "Please enter a valid name and XP.";
        resultDiv.style.color = "var(--c-red)";
        return;
    }

    let level;

    // The same classification logic as your Python code.
    if (xp < 1000) {
        level = "Iron";
    } else if (xp >= 1001 && xp <= 2000) {
        level = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        level = "Silver";
    } else if (xp >= 5001 && xp <= 7000) {
        level = "Gold";
    } else if (xp >= 7001 && xp <= 8000) {
        level = "Platinum";
    } else if (xp >= 8001 && xp <= 9000) {
        level = "Ascendant";
    } else if (xp >= 9001 && xp <= 10000) {
        level = "Immortal";
    } else {
        level = "Radiant";
    }

    resultDiv.textContent = `The Hero named ${name} is at the level of ${level}`;
    resultDiv.style.color = "var(--c-blue)";
}
