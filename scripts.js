const main = () => {
  enableCollapsibles();
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

main(); // code is ran here
