/**
 * Switches the visible page in the popup.
 * @param {string} pageId - The id of the page to display.
 */
function switchPage(pageId) {
  const pages = ["dashboard-page", "overview-page", "linking-page"];
  pages.forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      if (id === pageId) {
        element.classList.remove("hidden");
      } else {
        element.classList.add("hidden");
      }
    }
  });
}

/**
 * Initializes event listeners for the dashboard page.
 */
function initDashboard() {
  const aquawatchBtn = document.getElementById("aquawatch-btn");
  if (aquawatchBtn) {
    aquawatchBtn.addEventListener("click", () => {
      // Set the project name in the overview page
      const projectNameElement = document.getElementById("project-name");
      if (projectNameElement) {
        projectNameElement.textContent = "AquaWatch";
      }
      switchPage("overview-page");
    });
  }
  // You can add similar logic for the Test Project if needed.
}

/**
 * Initializes event listeners for the project overview page.
 */
function initOverview() {
  const overviewBack = document.getElementById("overview-back");
  if (overviewBack) {
    overviewBack.addEventListener("click", () => {
      switchPage("dashboard-page");
    });
  }

  const goToProjectBtn = document.getElementById("go-to-project-btn");
  if (goToProjectBtn) {
    goToProjectBtn.addEventListener("click", () => {
      // Customize the link redirection here
      const projectUrl = "https://trello.com/b/jbrPld57/aquawatch-issues";
      window.open(projectUrl, "_blank");
    });
  }

  const trelloWorkspaceBtn = document.getElementById("trello-workspace-btn");
  if (trelloWorkspaceBtn) {
    trelloWorkspaceBtn.addEventListener("click", () => {
      // Customize the Trello workspace link here
      const trelloUrl = "https://trello.com/b/jbrPld57/aquawatch-issues";
      window.open(trelloUrl, "_blank");
    });
  }

  const linkWorkspaceBtn = document.getElementById("link-workspace-btn");
  if (linkWorkspaceBtn) {
    linkWorkspaceBtn.addEventListener("click", () => {
      switchPage("linking-page");
    });
  }
}

/**
 * Initializes event listeners for the workspace linking page.
 */
function initLinking() {
  const linkingBack = document.getElementById("linking-back");
  if (linkingBack) {
    linkingBack.addEventListener("click", () => {
      switchPage("overview-page");
    });
  }

  const linkingForm = document.getElementById("linking-form");
  if (linkingForm) {
    linkingForm.addEventListener("submit", (event) => {
      event.preventDefault(); // Do nothing for the PoC
      // Placeholder for future logic
      alert("Not available for the PoC");
    });
  }
}

// Initialize all pages once the DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  initDashboard();
  initOverview();
  initLinking();
});
