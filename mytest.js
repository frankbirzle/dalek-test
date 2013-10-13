module.exports = {

  'Lets test some Zando functionality': function (test) {
    test.open('http://www.zando.co.za')
      .screenshot('zando.png')
      .done();
  }
};
