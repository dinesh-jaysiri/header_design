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

// menu list

const menulist1 = document.querySelectorAll(".menu1");
const menulist4 = document.querySelectorAll(".menu4");
const backbtn = document.querySelector(".back--button");

menulist1.forEach((item) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("next")) return;
    menulist1.forEach((item) => item.classList.remove("show"));
    backbtn.classList.add("show");

    if (this.classList.contains("product")) {
      let product_menu = document.querySelectorAll(".menu2.product");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("service")) {
      let product_menu = document.querySelectorAll(".menu2.service");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("literature")) {
      let product_menu = document.querySelectorAll(".menu2.literature");
      product_menu.forEach((item) => item.classList.add("show"));
    }
  });
});

const menulist2 = document.querySelectorAll(".menu2");

menulist2.forEach((item) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("next")) return;
    menulist2.forEach((item) => item.classList.remove("show"));
    if (this.classList.contains("paint")) {
      let product_menu = document.querySelectorAll(".menu3.paint");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("tools")) {
      let product_menu = document.querySelectorAll(".menu3.tools");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("building_materials")) {
      let product_menu = document.querySelectorAll(".menu3.building_materials");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("hardware")) {
      let product_menu = document.querySelectorAll(".menu3.hardware");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("landscape_&_outdoors")) {
      let product_menu = document.querySelectorAll(
        ".menu3.landscape_&_outdoors"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("moulding")) {
      let product_menu = document.querySelectorAll(".menu3.moulding");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("savings")) {
      let product_menu = document.querySelectorAll(".menu3.savings");
      product_menu.forEach((item) => item.classList.add("show"));
    }
  });
});

const menulist3 = document.querySelectorAll(".menu3");

menulist3.forEach((item) => {
  item.addEventListener("click", function () {
    if (!this.classList.contains("next")) return;
    menulist3.forEach((item) => item.classList.remove("show"));
    if (this.classList.contains("interior_paint")) {
      let product_menu = document.querySelectorAll(".menu4.interior_paint");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("design_&_decor")) {
      let product_menu = document.querySelectorAll(".menu4.design_&_decor");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("exterior")) {
      let product_menu = document.querySelectorAll(".menu4.exterior");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("primer_paint")) {
      let product_menu = document.querySelectorAll(".menu4.primer_paint");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("Paint_sprayers_&_equipment")) {
      let product_menu = document.querySelectorAll(
        ".menu4.Paint_sprayers_&_equipment"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("spray_paint")) {
      let product_menu = document.querySelectorAll(".menu4.spray_paint");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("specialty_&_all_other_paint")) {
      let product_menu = document.querySelectorAll(
        ".menu4.specialty_&_all_other_paint"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("flux_finishes")) {
      let product_menu = document.querySelectorAll(".menu4.flux_finishes");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("interior_wood_Stains_&_sealers")) {
      let product_menu = document.querySelectorAll(
        ".menu4.interior_wood_Stains_&_sealers"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("paint_tools_&_supplies")) {
      let product_menu = document.querySelectorAll(
        ".menu4.paint_tools_&_supplies"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("patch_caulk_&_sealants")) {
      let product_menu = document.querySelectorAll(
        ".menu4.patch_caulk_&_sealants"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("glues_epoxies")) {
      let product_menu = document.querySelectorAll(".menu4.glues_epoxies");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("cleaning_supplies")) {
      let product_menu = document.querySelectorAll(".menu4.cleaning_supplies");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("hand_tools")) {
      let product_menu = document.querySelectorAll(".menu4.hand_tools");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("power_tools")) {
      let product_menu = document.querySelectorAll(".menu4.power_tools");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("power_tool_accessories")) {
      let product_menu = document.querySelectorAll(
        ".menu4.power_tool_accessories"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("wet_dry_vacuums")) {
      let product_menu = document.querySelectorAll(".menu4.wet_dry_vacuums");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("tool_storage_and_stands")) {
      let product_menu = document.querySelectorAll(
        ".menu4.tool_storage_and_stands"
      );
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("lamber")) {
      let product_menu = document.querySelectorAll(".menu4.lamber");
      product_menu.forEach((item) => item.classList.add("show"));
    }
    if (this.classList.contains("insulation")) {
      let product_menu = document.querySelectorAll(".menu4.insulation");
      product_menu.forEach((item) => item.classList.add("show"));
    }
  });
});

backbtn.addEventListener("click", backnavigation);

function backnavigation() {
  const showing_element = document.querySelectorAll(".show")[1];

  if (showing_element.classList.contains("menu2")) {
    menulist1.forEach((item) => item.classList.add("show"));
    menulist2.forEach((item) => item.classList.remove("show"));
    backbtn.classList.remove("show");
  }
  if (showing_element.classList.contains("menu3")) {
    let clss = [...showing_element.classList]
      .filter((e) => e != "menu_container")
      .filter((e) => e != "menu3")
      .filter((e) => e != "show")[0];
    let filter_class = [...document.querySelector(`.menu2.${clss}`).classList]
      .filter((e) => e != "menu_container")
      .filter((e) => e != "menu2")
      .filter((e) => e != `${clss}`)[0];
    menulist3.forEach((item) => item.classList.remove("show"));
    clss = document.querySelectorAll(`.menu2.${filter_class}`);
    clss.forEach((item) => item.classList.add("show"));
  }
  if (showing_element.classList.contains("menu4")) {
    let clss = [...showing_element.classList]
      .filter((e) => e != "menu_container")
      .filter((e) => e != "menu4")
      .filter((e) => e != "next")
      .filter((e) => e != "show")[0];
    let filter_class = [...document.querySelector(`.menu3.${clss}`).classList]
      .filter((e) => e != "menu_container")
      .filter((e) => e != "menu3")
      .filter((e) => e != "next")
      .filter((e) => e != `${clss}`)[0];
    menulist4.forEach((item) => item.classList.remove("show"));
    clss = document.querySelectorAll(`.menu3.${filter_class}`);
    clss.forEach((item) => item.classList.add("show"));
  }
}
