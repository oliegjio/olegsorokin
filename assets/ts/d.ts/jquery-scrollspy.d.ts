interface JQuery {
  scrollspy(settings: {
    min?: number,
    onEnter?: (element: JQuery, position: number) => void,
    onLeave?: (element: JQuery, position: number) => void
  }): void;
}
