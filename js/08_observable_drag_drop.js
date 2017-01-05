const Observable = Rx.Observable;

const parent = document.getElementById("parent");
const widget = document.getElementById("widget");

// convert DOM events to Observables
const mouseDowns = Observable.fromEvent(widget, "mousedown");
const parentMouseMoves = Observable.fromEvent(parent, "mousemove");
const parentMouseUps = Observable.fromEvent(parent, "mouseup");

Array.prototype.concatAll = function() {
  let results = [];
  this.forEach(subArray => {
    subArray.forEach(item => {
      results.push(item);
    });
  });
  return results;
};

const drags =
  mouseDowns.
    map(e => {
      // throw 'error';
      // notice -> this error will be returned in Observable
      return parentMouseMoves.takeUntil(parentMouseUps)
    }).
      concatAll();

var subscription =
  drags.forEach(
    function onNext(e) {
      widget.style.left = e.clientX + "px";
      widget.style.top = e.clientY + "px";
    },
    // onError and onCompleted here are not neccessary
    // in particular scenario error will not be thrown
    // and neither mouse downs will be completed
    function onError(err) {
      console.log('errror!');
    },
    // never will happen, there can always be more mouse downs
    function onCompleted() {
    }
  );
