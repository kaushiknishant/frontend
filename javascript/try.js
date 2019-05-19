function doSomething() {
  var msg, value;
  msg = document.getElementById("msg");
  msg.innerHTML = "";

  x = document.getElementById("some").value;
  try {
    if (x == "") throw "please enter a number";
    if (isNaN(x)) throw "Only number are allowed";
    if (x < 4) throw "choose a number greater than 3";
  }
  catch (err) {
    msg.innerHTML = " error " + err;
  }
  finally {
    document.getElementById("some").value = "";
  }

}