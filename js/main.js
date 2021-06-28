// create menu itme

const menuphase1 = [
  {
    id: "product",
    display: "product",
    subCategory: true,
    parentId: null,
    link: "#",
  },
  {
    id: "servicess",
    display: "Servicess",
    subCategory: true,
    parentId: null,
    link: "#",
  },
  {
    id: "blog",
    display: "Blog",
    subCategory: false,
    parentId: null,
    link: "#",
  },
];

const menuphase2 = [
  {
    id: "paint",
    display: "Paint",
    subCategory: true,
    parentId: "product",
    link: "#",
  },
  {
    id: "building_materials",
    display: "Building Materials",
    subCategory: true,
    parentId: "product",
    link: "#",
  },
  {
    id: "desing_services",
    display: "Desing Services",
    subCategory: false,
    parentId: "servicess",
    link: "#",
  },
  {
    id: "window_door_services",
    display: "Window & Door Services",
    subCategory: false,
    parentId: "servicess",
    link: "#",
  },
];

const menuphase3 = [
  {
    id: "interior_paint",
    display: "Interior Paint",
    subCategory: true,
    parentId: "paint",
    link: "#",
  },
  {
    id: "design_decor",
    display: "Design & Decor",
    subCategory: true,
    parentId: "paint",
    link: "#",
  },
  {
    id: "exterior",
    display: "Exterior",
    subCategory: false,
    parentId: "paint",
    link: "#",
  },
  {
    id: "lamber",
    display: "Lamber",
    subCategory: false,
    parentId: "building_materials",
    link: "#",
  },
  {
    id: "insulation",
    display: "Insulation",
    subCategory: true,
    parentId: "building_materials",
    link: "#",
  },
];

const menuphase4 = [
  {
    id: "Interior_primers",
    display: "Interior Primers",
    subCategory: false,
    parentId: "interior_paint",
    link: "#",
  },
  {
    id: "wall_paint",
    display: "wall Paint",
    subCategory: false,
    parentId: "interior_paint",
    link: "#",
  },
  {
    id: "hunter_douglas",
    display: "Hunter Douglas",
    subCategory: false,
    parentId: "design_decor",
    link: "#",
  },
  {
    id: "butcher_block",
    display: "Butcher Block",
    subCategory: false,
    parentId: "design_decor",
    link: "#",
  },
  {
    id: "fiberglass_insulation",
    display: "Fiberglass Insulation",
    subCategory: false,
    parentId: "insulation",
    link: "#",
  },
];
console.log("hello");

const menu1_slider = document.querySelector(".menu_slide_1");
const menu2_slider = document.querySelector(".menu_slide_2");
const menu3_slider = document.querySelector(".menu_slide_3");
const menu4_slider = document.querySelector(".menu_slide_4");

function createMenuList(menuList, slide_element) {
  menuList.forEach((item) => {
    // create menu container element
    let menu_container = document.createElement("div");
    //add class to the container
    menu_container.classList.add("menu_container");
    menu_container.setAttribute("id", item.id);
    menu_container.setAttribute("parentId", item.parentId);
    menu_container.setAttribute("display", item.display);
    menu_container.setAttribute("subCategory", item.subCategory);
    //create link element
    let link = document.createElement("a");
    //add class and set link
    link.classList.add("menu__text");
    link.href = item.link;
    menu_container.append(link);
    link.append(item.display);
    //crete svg and use  elemet and add data

    if (item.subCategory) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg',"svg");
      svg.classList.add("icon", "icon--secondery");

      const use = document.createElementNS('http://www.w3.org/2000/svg',"use");
      use.setAttributeNS(
        "http://www.w3.org/1999/xlink",
        "xlink:href",
        "images/sprite.svg#downarrow"
      );
      svg.append(use);
      menu_container.append(svg);
    }

    //add event linstner to every eleimet
    menu_container.addEventListener("click", nextmenu);
    slide_element.append(menu_container);
  });
}

const slider = document.querySelector(".slider");

let sectionIndex = 0;
function nextmenu() {
  let navigat = this.getAttribute("subCategory");
  if (navigat === "false") return;

  const next_slde = this.closest(".slider_section").nextElementSibling;
  const current_Id = this.getAttribute("id");
  const next_menu_list = [
    ...menuphase1,
    ...menuphase2,
    ...menuphase3,
    ...menuphase4,
  ].filter((item) => item.parentId === current_Id);
  createMenuList(next_menu_list, next_slde);
  const back_btn = next_slde.querySelector(".back");
  back_btn.innerText = this.getAttribute("display");

  sectionIndex = sectionIndex < 3 ? sectionIndex + 1 : 3;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}
function previousmenu() {
  const current_slider = this.closest(".slider_section");
  const previousMenuList = current_slider.querySelectorAll("[display]");
  previousMenuList.forEach((item) => item.remove());

  sectionIndex = sectionIndex < 1 ? 0 : sectionIndex - 1;
  slider.style.transform = "translate(" + sectionIndex * -25 + "%)";
}

createMenuList(menuphase1, menu1_slider);
const back_arrow = slider.querySelectorAll(".back_arrow");
back_arrow.forEach((item) => item.addEventListener("click", previousmenu));

// search bar

var x = document.getElementById("input");
const new_header = document.querySelector(".new_header");
x.addEventListener("focusin", FocusFunction);
x.addEventListener("focusout", BlurFunction);

function FocusFunction() {
  if (
    window.matchMedia(
      "(max-width: 844px) and (min-width: 541px), (max-width: 470px) and (min-width: 250px)"
    ).matches
  ) {
    new_header.classList.remove("show_cart");
    new_header.classList.remove("show_sidenav");
    new_header.classList.add("long_search");
  }
}

function BlurFunction() {
  new_header.classList.remove("long_search");
}

// show hide side menu and cart

const menu_icon_container = document.querySelectorAll(".menu_icon_container");
const cart_icon_container = document.querySelectorAll(".cart_icon_container");

const close_element = [...menu_icon_container, ...cart_icon_container];

close_element.forEach((item) => {
  item.addEventListener("click", function () {
    if (this.classList.contains("menu_icon_container")) {
      let header_class = document.querySelector(".new_header");
      if (header_class.classList.contains("show_sidenav"))
        return header_class.classList.remove("show_sidenav");
      header_class.classList.remove("show_cart");
      header_class.classList.add("show_sidenav");
    }
    if (this.classList.contains("cart_icon_container")) {
      let header_class = document.querySelector(".new_header");
      if (header_class.classList.contains("show_cart"))
        return header_class.classList.remove("show_cart");
      header_class.classList.remove("show_sidenav");
      header_class.classList.add("show_cart");
    }
  });
});


// show and hide top bar
const topBar = document.querySelector('.top_bar');

window.addEventListener(
  "scroll",
  function () {
    
    var st = window.pageYOffset || document.documentElement.scrollTop;
    console.log(st)
    if (st > 0)
      return topBar.style.display = "none";
    
    topBar.style.display = "flex";
  },
  false
);
