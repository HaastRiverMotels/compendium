const main = () => {
  enableCollapsibles();
  enableTabs();
  enableModal();
};

const enableCollapsibles = () => {
  const collapsibles = document.getElementsByClassName("collapsible");

  for (const collapsible of collapsibles) {
    collapsible.onclick = () => toggleCollapsible(collapsible);
  }
};

const toggleCollapsible = (collapsible) => {
  collapsible.classList.toggle("active");

  const collapsibleIcon =
    collapsible.getElementsByClassName("collapsible-icon")[0];

  const content = collapsible.nextElementSibling;
  const isOpen = content.style.display === "block";

  if (isOpen) {
    collapsibleIcon.className = collapsibleIcon.className.replace("up", "down");

    content.style.display = "none";
    content.style.maxHeight = "0px";
  } else {
    collapsibleIcon.className = collapsibleIcon.className.replace("down", "up");

    content.style.display = "block";
    content.style.maxHeight = content.scrollHeight + "px";
  }
};

const enableTabs = () => {
  const tabButtons = document.getElementsByClassName("tab-button");
  for (const tabButton of tabButtons) {
    const tabContentId = tabButton.id.replace("button", "content");
    tabButton.onclick = (event) => openTab(event, tabContentId);
  }

  const defaultOpenTabs = document.getElementsByClassName("default-open");
  if (defaultOpenTabs.length > 0) {
    defaultOpenTabs[0].click();
  }
};

const openTab = (event, tabContentId) => {
  deactivateAllTabButtons();
  hideAllTabs();

  event.currentTarget.className += " active";
  document.getElementById(tabContentId).style.display = "block";
  scrollToTop();
};

const scrollToTop = () => {
  // reference: https://stackoverflow.com/a/26158508
  const interval = window.setInterval(() => {
    var position = window.scrollY;

    if (position > 0) {
      window.scrollTo(0, position - 50);
    } else {
      window.clearInterval(interval);
    }
  }, 10); // how fast to scroll
};

const deactivateAllTabButtons = () => {
  const tabButtons = document.getElementsByClassName("tab-button");
  for (const tabButton of tabButtons) {
    tabButton.className = tabButton.className.replace(" active", "");
  }
};

const hideAllTabs = () => {
  const tabContents = document.getElementsByClassName("tab-content");
  for (const tabContent of tabContents) {
    tabContent.style.display = "none";
  }
};

const enableModal = () => {
  const modalButton = document.getElementById("modal-button");
  const modalBackground = document.getElementById("modal-background");

  if (!modalButton) {
    return;
  }

  const openModal = () => {
    modalBackground.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const closeModal = (event) => {
    if (event.target === modalBackground) {
      modalBackground.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  modalButton.onclick = openModal;
  window.onclick = closeModal;
  window.ontouchend = closeModal;
};

main(); // code is ran here
