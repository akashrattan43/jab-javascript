function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// make an HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 2000) {
      callback(self.http.responseText)
    } else {
    }
  };

  this.http.send();
};

// make an HTTP POST Request

// make an HTTP PUT Request

// make an HTTP DELETE Request
