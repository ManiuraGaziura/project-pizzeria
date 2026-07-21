import { select, templates } from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element) {
    const thisHome = this;

    const generatedHTML = templates.homeWidget();

    element.innerHTML = generatedHTML;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.carousel = thisHome.dom.wrapper.querySelector(select.home.carousel);
  }

  initWidgets() {
    const thisHome = this;

    thisHome.carousel = new Flickity(thisHome.dom.carousel, {
      autoPlay: 3000,
      wrapAround: true,
      prevNextButtons: false,
      pageDots: true,
      cellAlign: 'left',
      contain: true,
    });
  }
}

export default Home;
