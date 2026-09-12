import { stickyHeader } from "./modules/sticky-header";
import { mainNavigation } from "./modules/main-navigation";
import { parallax } from "./modules/parallax";
import { scrollToSection } from "./modules/scroll-to-section";
import { initModals } from "./modules/modals";
import { forms } from "./modules/forms";
import { initSiteInfo } from "../config/site-info.js";


document.addEventListener('DOMContentLoaded', () => {

   initSiteInfo();
   stickyHeader();
   mainNavigation();
   parallax();
   scrollToSection();
   initModals();
   forms();

  });
