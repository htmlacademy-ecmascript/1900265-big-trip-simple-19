import { createElement } from '../render';
import {html} from '../utils';

function createEventsListTemplate() {
  return (
    html`<ul class="trip-events__list"></ul>`
  );
}


export default class EventsListView {
  getTemplate() {
    return createEventsListTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
