import $ from 'jquery/dist/jquery.min';
import waypoints from 'waypoints/lib/noframework.waypoints.min';
const smoothScroll = require('jquery-smooth-scroll');

class StickyHeader {
  constructor(){
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSection = $(".page-section");
    this.headerLinks = $(".primary-nav a");
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
  }

  addSmoothScrolling(){
    this.headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    const that = this;

    new Waypoint({
      element: that.headerTriggerElement[0],
      handler: function(direction){
        if(direction === "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    const that = this;

    this.pageSection.each(function(){
      const currentPageSection = this;

      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction === 'down') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: '10%'
      });

      new Waypoint({
        element: currentPageSection,
        handler: function(direction){
          if(direction === 'up') {
            const matchingHeaderLink = currentPageSection.getAttribute('data-matching-link');
            that.headerLinks.removeClass("is-current-link");
            $(matchingHeaderLink).addClass("is-current-link");
          }
        },
        offset: '-40%'
      });
    });
  }
}

export default StickyHeader;