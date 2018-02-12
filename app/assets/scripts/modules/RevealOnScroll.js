import $ from 'jquery/dist/jquery.min';
import waypoints from 'waypoints/lib/noframework.waypoints.min';

class RevealOnScroll {
  constructor(els, offset) {
    this.itemsToReveal = els;
    this.offsetPercentage = offset;
    this.hideIntially();
    this.createWaypoints();
  }

  hideIntially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    const that = this;
    this.itemsToReveal.each(function(){
      const currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      });
    });
  }
}

export default RevealOnScroll;