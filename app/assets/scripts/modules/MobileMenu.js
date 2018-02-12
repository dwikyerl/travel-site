import $ from 'jquery/dist/jquery.min';

class MobileMenu {
  constructor(){
    this.menuIcon = $(".site-header__menu-icon");
    this.menuContent = $(".site-header__menu-content");
    this.siteHeader = $(".site-header");
    this.toggleTheMenu = this.toggleTheMenu.bind(this);
    this.events();
  }

  events() {
    this.menuIcon.click(this.toggleTheMenu);
  }

  toggleTheMenu() {
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuIcon.toggleClass("site-header__menu-icon--close-x");
  }
}

export default MobileMenu;