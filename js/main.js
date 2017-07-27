function product(productName, productCatch, productDesc) {
  this.productName = productName;
  this.productCatch = productCatch;
  this.productDesc = productDesc;
}

function newProduct() {
  this.validInputs = function() {
    var i = 0;
    $("form input").each(function() {
      return $(this).val().length ? i : i++;
    });
    return i;
  };
  this.createProduct = function() {
    if (!this.validInputs()) {
      var newProd = new product($("form input").eq(0).val(), $("form input").eq(1).val(), $("form input").eq(2).val());
      this.dispalyProduct(newProd);
    } else {
      alert("Not all inputs are filled.");
    }
  };
  this.dispalyProduct = function(prod) {
    Object.values(prod).forEach(function(elem, index) {
      $(".box").removeClass("d-none");
      $(".box p span").eq(index).text(elem);
    });
  }
}

var newProd = new newProduct();
$("button").click(function() {
  newProd.createProduct();
});
