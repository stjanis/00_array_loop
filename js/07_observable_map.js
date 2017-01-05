let Observable = Rx.Observable;

const obsButton = document.getElementById("obs-button");

let obsClicks = Observable.fromEvent(obsButton, 'click');

// create points stream from clicks stream
let points =
  obsClicks.map(e => ({x: e.clientX, y: e.clientY}));

let subscription = points.forEach(
  function onNext(point) {
    console.log(`clicked: ${JSON.stringify(point)}`);
    subscription.dispose();
  },
  function onError(error) {
    console.log('obs error!');
  },
  function onCompleted() {
    console.log('obs all done!');
  }
);
