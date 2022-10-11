let update = function () {
    document.getElementById("currentDay").innerHTML = moment().format(
      "dddd, MMM Do, h:mm:ss a"
    );
  };
  setInterval(update, 1000);