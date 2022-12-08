import { render } from '../render';
import EditEventView from '../view/edit-event-view';
import EventView from '../view/event-view';
import EventsListView from '../view/events-list-view';
import SortView from '../view/sort-view';

export default class EventsListPresenter {
  sortComponent = new SortView();
  eventsListComponent = new EventsListView();

  constructor({eventsListContainer}) {
    this.eventsListContainer = eventsListContainer;
  }

  init() {
    render(this.sortComponent, this.eventsListContainer);
    render(this.eventsListComponent, this.eventsListContainer);
    render(new EditEventView(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new EventView(), this.eventsListComponent.getElement());
    }
  }
}

