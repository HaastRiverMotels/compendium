const main = () => {
  enableCollapsibles();
};

const enableCollapsibles = () => {
  const collapsibles = document.getElementsByClassName("collapsible");

  for (const collapsible of collapsibles) {
    collapsible.onclick = () => toggleCollapsible(collapsible);

    // const collapsibleIcon = collapsible.getElementsByClassName("collapsible-icon")
  }
};

const toggleCollapsible = (collapsible) => {
  collapsible.classList.toggle("active");

  const content = collapsible.nextElementSibling;
  const isOpen = content.style.display === "block";

  if (isOpen) {
    content.style.display = "none";
    content.style.maxHeight = "0px";
  } else {
    content.style.display = "block";
    content.style.maxHeight = content.scrollHeight + "px";
  }
};

main(); // code is ran here
