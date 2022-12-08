import { render } from './render';
import FilterEventsView from './view/filter-events-view';
import EventsListPresenter from './presenters/events-list-presenter';

const pageHeaderElement = document.querySelector('.page-header');
const pageMainElement = document.querySelector('.page-main');
const tripControlElement = pageHeaderElement.querySelector('.trip-controls__filters');
const tripEventsElement = pageMainElement.querySelector('.trip-events');

render(new FilterEventsView(), tripControlElement);

const eventsListPresenter = new EventsListPresenter({eventsListContainer: tripEventsElement});

eventsListPresenter.init();
