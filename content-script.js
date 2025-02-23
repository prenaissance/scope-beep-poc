function addIconsToTrelloCard({ element, warning = false, error = false }) {
  // Avoid adding duplicate icons if already present
  if (element.querySelector(".scope-creep-icons")) return;
  // Create a container for the icons
  const iconContainer = document.createElement("span");
  iconContainer.className = "scope-creep-icons";
  iconContainer.style.width = "100%";
  iconContainer.style.display = "flex";
  iconContainer.style.justifyContent = "flex-end";

  const scopeBeepText = document.createElement("span");
  scopeBeepText.textContent = "Scope Beep:";
  scopeBeepText.style.marginRight = "auto";
  scopeBeepText.style.marginLeft = "16px";
  scopeBeepText.style.color = "red";
  scopeBeepText.style.fontWeight = "900";
  scopeBeepText.style.fontSize = "0.9em";
  iconContainer.appendChild(scopeBeepText);

  if (warning) {
    // Create warning icon with tooltip
    const warningIcon = document.createElement("span");
    warningIcon.textContent = "⚠️";
    warningIcon.title = "Ambiguous requirements";
    warningIcon.style.cursor = "default";
    warningIcon.style.marginRight = "3px";

    iconContainer.appendChild(warningIcon);
  }

  if (error) {
    // Create error icon with tooltip
    const errorIcon = document.createElement("span");
    errorIcon.textContent = "❌";
    errorIcon.title = "Out of scope";
    errorIcon.style.cursor = "default";

    iconContainer.appendChild(errorIcon);
  }
  // Append the icon container to the card title element
  element.appendChild(iconContainer);
}

/**
 * Adds warning and error icons to Trello cards matching a specific title.
 */
function addIconsToTrelloCards() {
  const cardTitleElements = document.querySelectorAll(
    "[data-testid='trello-card']"
  );

  cardTitleElements.forEach((cardTitle) => {
    if (cardTitle.textContent.trim() === "Add wheels to the device prototype") {
      addIconsToTrelloCard({
        element: cardTitle,
        warning: true,
        error: true,
      });
    }

    if (cardTitle.textContent.trim() === "Add extra sensors") {
      addIconsToTrelloCard({
        element: cardTitle,
        warning: true,
      });
    }
  });
}

function init() {
  console.log("Loaded Scope Beep script");
  addIconsToTrelloCards();
}

// Run init immediately if the document is already loaded, otherwise wait for DOMContentLoaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Observe DOM changes (useful for Trello's dynamic content)
const observer = new MutationObserver(() => {
  addIconsToTrelloCards();
});

observer.observe(document.body, { childList: true, subtree: true });
