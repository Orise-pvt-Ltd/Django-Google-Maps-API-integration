









// document.getElementById("menu-button").addEventListener("click", function () {
//     console.log("MENU-BUTTON 1");
//     // document.getElementById("default-sidebar").classList.toggle("menu-open");
//     console.log("MENU-BUTTON 2");
//     rotateMenuButton();
//     // var isLargeLogoHide = document.getElementById("large-logo").classList.contains("hide");
//     // var isSmallLogoHide = document.getElementById("small-logo").classList.contains("hide");




    //Check menu is expanded or not
    // var isMenuOpen = document
    //     .getElementById("default-sidebar")
    //     .classList.contains("menu-open");





    //Hide menu titles when menu bar is collapsed

    // var menu_list = document.getElementsByClassName("menu-title");
    // console.log(menu_list);
    // for (var i = 0; i < menu_list.length; i++) {
    //     menu_list[i].classList.toggle("hide");
    // }

    //Center menu icons when menu bar is collapsed

    // var menu_icon_list = document.getElementsByClassName("menu-icon");

    // for (var i = 0; i < menu_icon_list.length; i++) {
    //     menu_icon_list[i].classList.toggle("menu_icon_center");
    // }

//     var menuItems = document.querySelectorAll("menu-item");

//     if (isMenuOpen) {
//         console.log("Menu is open!");
//         sidebarTransitionIn();
//         rotateMenuButton();
//         //Change navbar width when menu button pressed

//         document
//             .getElementById("main-navbar")
//             .classList.remove("md:ml-[280px]");
//         document.getElementById("main-navbar").classList.add("md:ml-[80px]");

//         ////Change content pading when menu button pressed

//         document
//             .getElementById("main-content")
//             .classList.remove("md:pl-[280px]");
//         document.getElementById("main-content").classList.add("md:pl-[80px]");

//         //Change menu item padding when menu bar is collapsed

//         menuItems.forEach(function (menuItem) {
//             menuItem.classList.toggle("menu-item-padding");
//         });
//     } else {
//         sidebarTransitionOut();
//         rotateMenuButtonBack();
//         //Change navbar width when menu button pressed

//         document.getElementById("main-navbar").classList.add("md:ml-[280px]");
//         document.getElementById("main-navbar").classList.remove("md:ml-[80px]");

//         ////Change content pading when menu button pressed

//         document.getElementById("main-content").classList.add("md:pl-[280px]");
//         document
//             .getElementById("main-content")
//             .classList.remove("md:pl-[80px]");

//         //Change menu item padding when menu bar is expanded

//         menuItems.forEach(function (menuItem) {
//             menuItem.classList.toggle("menu-item-padding");
//         });
//         console.log("Menu is closed!");
//     }
// });





// //Rotate menu button

// function rotateMenuButton() {
//     console.log("MENU-BUTTON 3");
//     document
//         .getElementById("menu-icon")
//         .classList.toggle("rotate-180");
//     // console.log("MENU-BUTTON 4");
//     // var menu_list = document.getElementsByClassName("menu-title");
//     // console.log("MENU-BUTTON 5");
//     // console.log(menu_list);
//     // for (var i = 0; i < menu_list.length; i++) {
//     //     menu_list[i].classList.add("hide");
//     // }
// }

// function rotateMenuButtonBack() {
//     document
//         .getElementById("menu-icon")
//         .classList.remove("rotate-180");
// }

