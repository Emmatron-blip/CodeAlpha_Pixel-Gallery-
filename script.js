// ========================================
// PixelGallery — Main JavaScript
const images = [
  // =========================
  // NATURE — 8 IMAGES
  // =========================
  {
    title: "Mountain Sunrise",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    alt: "Mountain peaks illuminated by sunlight"
  },
  {
    title: "Forest Path",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80",
    alt: "A peaceful path through a green forest"
  },
  {
    title: "Ocean Waves",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    alt: "Blue ocean waves along a sandy beach"
  },
  {
    title: "Misty Mountains",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1000&q=80",
    alt: "Mountain landscape surrounded by mist"
  },
  {
    title: "Waterfall",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=1000&q=80",
    alt: "Water cascading down a natural waterfall"
  },
  {
    title: "Desert Landscape",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1000&q=80",
    alt: "Golden sand dunes in a desert"
  },
  {
    title: "Green Valley",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1000&q=80",
    alt: "Natural landscape with wildlife and greenery"
  },
  {
    title: "Autumn Forest",
    category: "Nature",
    url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80",
    alt: "Sunlight passing through a forest"
  },

  // =========================
  // ARCHITECTURE — 8 IMAGES
  // =========================
  {
    title: "Modern Architecture",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    alt: "Modern building with clean architectural lines"
  },
  {
    title: "City Buildings",
    category: "Architecture",
    url: "https://plus.unsplash.com/premium_photo-1693966067602-9ca1f56695c0?auto=format&fit=crop&fm=jpg&q=80&w=1000",
    alt: "Tall modern buildings viewed from below"
  },
  {
    title: "Urban Geometry",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1000&q=80",
    alt: "Geometric shapes in modern architecture"
  },
  {
  title: "Glass Tower",
  category: "Architecture",
  url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
  alt: "A tall modern building with many windows"
},
  {
  title: "Concrete Structure",
  category: "Architecture",
  url: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=80",
  alt: "Modern architectural structure with geometric forms"
},
  {
    title: "City Skyline",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1000&q=80",
    alt: "Urban skyline with illuminated buildings"
  },
  {
  title: "Modern Building Exterior",
  category: "Architecture",
  url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80",
  alt: "Contemporary building exterior"
},
  {
    title: "Architectural Lines",
    category: "Architecture",
    url: "https://images.unsplash.com/photo-1759899564526-ed590258cb4d?auto=format&fit=crop&w=1000&q=80",
    alt: "Strong lines and geometric architectural forms"
  },

  // =========================
  // TECHNOLOGY — 8 IMAGES
  // =========================
  {
    title: "Computer Technology",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1000&q=80",
    alt: "Electronic circuit board and computer components"
  },
  {
    title: "Workspace",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80",
    alt: "Computer and equipment on a developer's desk"
  },
  {
    title: "Digital Collaboration",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1000&q=80",
    alt: "People collaborating around computers"
  },
  {
    title: "Computer Hardware",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1000&q=80",
    alt: "Computer hardware and electronic components"
  },
  {
    title: "Laptop Workspace",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=80",
    alt: "Laptop computer on a workspace"
  },
  {
  title: "Programming Workspace",
  category: "Technology",
  url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1000&q=80",
  alt: "Programming code displayed on a computer screen"
},
  {
    title: "Digital Devices",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?auto=format&fit=crop&w=1000&q=80",
    alt: "Electronic devices and digital technology"
  },
  {
    title: "Developer Setup",
    category: "Technology",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    alt: "Computer screen displaying programming code"
  }
];

// 2. SELECT HTML ELEMENTS
const gallery = document.getElementById("gallery");
const filterButtons = document.querySelectorAll(".filter-btn");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");

const closeBtn = document.getElementById("closeBtn");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");


// 3. APPLICATION STATE
let currentImageIndex = 0;
let visibleImages = images;
let lastFocusedElement = null;


// 4. IMAGE ERROR PLACEHOLDER
function createImagePlaceholder() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg"
         width="800" height="500" viewBox="0 0 800 500">
      <rect width="800" height="500" fill="#172033"/>
      <text x="400" y="240"
            fill="#cbd5e1"
            font-size="28"
            text-anchor="middle"
            font-family="Arial, sans-serif">
        Image unavailable
      </text>
      <text x="400" y="285"
            fill="#94a3b8"
            font-size="18"
            text-anchor="middle"
            font-family="Arial, sans-serif">
        Please check your internet connection
      </text>
    </svg>
  `;

  return "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(svg);
}


function handleImageError(event) {
  const imageElement = event.currentTarget;

  // Prevent an infinite error loop.
  imageElement.onerror = null;

  // Show a local placeholder instead.
  imageElement.src = createImagePlaceholder();
  imageElement.alt = "Image unavailable";
}


// 5. DISPLAY GALLERY IMAGES
function displayImages(category = "all") {
  const selectedCategory = String(category).trim().toLowerCase();

  const filteredImages = images.filter(image => {
    const imageCategory = image.category.trim().toLowerCase();

    return (
      selectedCategory === "all" ||
      imageCategory === selectedCategory
    );
  });

  // Update the images available to the lightbox.
  visibleImages = filteredImages;

  // Clear the previous gallery.
  gallery.innerHTML = "";

  // Show a message if no images match.
  if (filteredImages.length === 0) {
    gallery.innerHTML =
      '<p class="empty-message">No images found in this category.</p>';
    return;
  }

  // Create a card for every matching image.
  filteredImages.forEach(image => {
    const card = document.createElement("article");
    card.className = "gallery-card";

    const img = document.createElement("img");
    img.src = image.url;
    img.alt = image.alt;
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", handleImageError);

    const title = document.createElement("h2");
    title.textContent = image.title;

    const categoryLabel = document.createElement("p");
    categoryLabel.className = "image-category";
    categoryLabel.textContent = image.category;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(categoryLabel);

    gallery.appendChild(card);
  });
}


// 6. CATEGORY FILTER BUTTONS
filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    // Update the active button.
    filterButtons.forEach(filterButton => {
      filterButton.classList.remove("active");
      filterButton.setAttribute("aria-pressed", "false");
    });

    button.classList.add("active");
    button.setAttribute("aria-pressed", "true");

    // Render images for the selected category.
    displayImages(category);
  });
});


// 7. OPEN LIGHTBOX
function openLightbox(index) {
  if (visibleImages.length === 0) return;

  lastFocusedElement = document.activeElement;
  currentImageIndex = index;

  showLightboxImage();

  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";

  closeBtn.focus();
}


// 8. DISPLAY THE SELECTED LIGHTBOX IMAGE
function showLightboxImage() {
  const image = visibleImages[currentImageIndex];

  if (!image) return;

  // Remove the previous image's error handler.
  lightboxImage.onerror = null;

  lightboxImage.src = image.url;
  lightboxImage.alt = image.alt;

  lightboxImage.onerror = handleImageError;

  lightboxCaption.textContent = image.title;
}


// 9. CLOSE LIGHTBOX
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";

  // Return focus to the element that opened the viewer.
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}


// 10. SHOW PREVIOUS IMAGE
function showPreviousImage() {
  if (visibleImages.length === 0) return;

  currentImageIndex =
    (currentImageIndex - 1 + visibleImages.length) %
    visibleImages.length;

  showLightboxImage();
}


// 11. SHOW NEXT IMAGE
function showNextImage() {
  if (visibleImages.length === 0) return;

  currentImageIndex =
    (currentImageIndex + 1) % visibleImages.length;

  showLightboxImage();
}


// 12. OPEN IMAGE WHEN A GALLERY IMAGE IS CLICKED
gallery.addEventListener("click", event => {
  const clickedImage = event.target.closest("img");

  if (!clickedImage) return;

  const clickedCard = clickedImage.closest(".gallery-card");

  if (!clickedCard) return;

  const clickedTitle =
    clickedCard.querySelector("h2").textContent;

  const index = visibleImages.findIndex(image => {
    return image.title === clickedTitle;
  });

  if (index !== -1) {
    openLightbox(index);
  }
});


// 13. LIGHTBOX BUTTON EVENTS
closeBtn.addEventListener("click", closeLightbox);

prevBtn.addEventListener("click", showPreviousImage);

nextBtn.addEventListener("click", showNextImage);


// 14. CLOSE WHEN THE BACKGROUND IS CLICKED
lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});


// 15. KEYBOARD ACCESSIBILITY
document.addEventListener("keydown", event => {
  if (!lightbox.classList.contains("open")) return;

  // Escape closes the viewer.
  if (event.key === "Escape") {
    closeLightbox();
    return;
  }

  // Left arrow shows the previous image.
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    showPreviousImage();
    return;
  }

  // Right arrow shows the next image.
  if (event.key === "ArrowRight") {
    event.preventDefault();
    showNextImage();
    return;
  }

  // Keep keyboard focus inside the lightbox.
  if (event.key === "Tab") {
    const buttons = lightbox.querySelectorAll(
      "button:not([disabled])"
    );

    if (buttons.length === 0) return;

    const firstButton = buttons[0];
    const lastButton = buttons[buttons.length - 1];

    if (
      event.shiftKey &&
      document.activeElement === firstButton
    ) {
      event.preventDefault();
      lastButton.focus();
    } else if (
      !event.shiftKey &&
      document.activeElement === lastButton
    ) {
      event.preventDefault();
      firstButton.focus();
    }
  }
});


// 16. INITIALIZE THE GALLERY
displayImages();
