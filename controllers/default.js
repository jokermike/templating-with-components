exports.install = function () {
  ROUTE("GET /", indexview);
};

function indexview() {
  const data = [
    {
      cardname: "card1",
      classname: "classe1",
    },
    {
      cardname: "card2",
      classname: "classe2",
    },
  ];
  this.view("index",data);
}
