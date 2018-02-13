import $ from 'jquery/dist/jquery.min';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

const mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "75%");
new RevealOnScroll($(".testimonial"), "60%");
const stickyHeader = new StickyHeader();
