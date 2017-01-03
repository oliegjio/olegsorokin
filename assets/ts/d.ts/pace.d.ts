///<reference path="../typings/globals/jquery/index.d.ts" />

interface IPace {
  on: (event: string, callback: () => void) => void,
  start: () => void;
}

declare let Pace: IPace;
