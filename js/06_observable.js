let Observable = Rx.Observable;

const button = document.getElementById("button");
const obsButton = document.getElementById("obs-button");

// const handler = e => {
//   alert("test");
//   button.removeEventListener('click', handler);
// };
//
// button.addEventListener('click', handler);

// create collection of all click event that
// would have been sent to your event handler
let clicks = Observable.fromEvent(button, 'click');
// with Observable forEach will execute asynchronously
clicks.forEach(e => {
  alert('clicked!');
});

// arrays, the forEach method always executes synchronously,
// because all of the data in the collection is already there,
// so all forEach has to do is run through it
// Because this operation executes synchronously,
// if any kind of throw expression appears inside of here,
// it will be caught and pumped down to catch.

// by the time we get to the end of the forEach expression,
// we know we've already gone through all of the items in the array.
// If we print out anything we know that it's only going to print out when
// all of the items in the collection have been exhausted.

// e.g.
try {
  [1,2,3].forEach( i => {
    console.log(i);
  });
  console.log('all done!');
}
catch(e) {
  console.log('error!');
}

// with an Observable, forEach executes over time. It executes asynchronously.
// try-catch approach will not work the same way as above
// therefore
// forEach works slightly differntly on Observable
// it accepts 2 callbacks
let obsClicks = Observable.fromEvent(obsButton, 'click');
// subscription object is an object we can use to
// unsubscribe from an Observable
let subscription = obsClicks.forEach(
  function onNext(e) {
    console.log('obs clicked!');
    // throw 'obs error...';
    // subscription.dispose - unsubscribe (e.g. removeEventListener)
    subscription.dispose();
  },
  function onError(error) {
    console.log('obs error!');
  },
  function onCompleted() {
    console.log('obs all done!');
  }
);
