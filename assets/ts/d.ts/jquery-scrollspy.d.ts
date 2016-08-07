interface JQuery {
  scrollspy(settings: {
    min?: number,
    max?: number,
    onEnter?: (element: JQuery, position: number) => void,
    onLeave?: (element: JQuery, position: number) => void,
    container?: JQuery | HTMLElement
  }): void;
}
