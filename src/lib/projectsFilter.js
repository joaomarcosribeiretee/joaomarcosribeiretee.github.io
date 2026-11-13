// Lets other sections pick the Projects filter without owning its state.
// Projects listens for this event; anything can dispatch it with a filter id
// (one of PROJECT_FILTERS in src/data/projects.js).

export const FILTER_EVENT = "portfolio:projects-filter";

export const requestProjectsFilter = (filter) =>
  window.dispatchEvent(new CustomEvent(FILTER_EVENT, { detail: filter }));
