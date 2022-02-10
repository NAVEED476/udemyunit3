// , days, hours, minutes, seconds
const timer = (time) => {
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }
  function initializeClock(id, endtime) {
    function updateClock() {
      var t = getTimeRemaining(endtime);
      time.innerHTML = `Ends in ${("0" + t.hours).slice(-2)}h ${(
        "0" + t.minutes
      ).slice(-2)}m ${("0" + t.seconds).slice(-2)}s.`;
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();

    var timeinterval = setInterval(updateClock, 1000);
  }

  var deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
  initializeClock("clockdiv", deadline);
};

export default timer;
