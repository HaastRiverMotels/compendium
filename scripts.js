const main = () => {
  enableCollapsibles();
  enableTabs();
};

const enableTabs = () => {
  const tabButtons = document.getElementsByClassName("tab-button");
  for (const tabButton of tabButtons) {
    const tabContentId = tabButton.id.replace("tab", "content");
    tabButton.onclick = (event) => openTab(event, tabContentId);
  }

  const defaultOpenTabs = document.getElementsByClassName("default-open");
  if (defaultOpenTabs.length > 0) {
    defaultOpenTabs[0].click();
  }
};

const enableCollapsibles = () => {
  const collapsibles = document.getElementsByClassName("collapsible");

  for (const collapsible of collapsibles) {
    collapsible.onclick = () => toggleCollapsible(collapsible);
  }
};

const openTab = (event, tabContentId) => {
  deactivateAllTabButtons();
  hideAllTabs();

  event.currentTarget.className += " active";
  document.getElementById(tabContentId).style.display = "block";
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

main(); // code is ran here
