// object constructor
function product(productName, productCatch, productDesc) {
  this.productName = productName;
  this.productCatch = productCatch;
  this.productDesc = productDesc;
}

// object constructor
function newProduct() {
  this.validInputs = function() {
    var i = 0;
    // checks if all inputs are filled
    $("input").each(function() {
      return $(this).val().length ? i : i++;
    });
    return i; // i = 0 if all inputs are filled
  };
  this.createProduct = function() {
    // creates a new product object if all inputs are filled
    if (!this.validInputs()) {
      var newProd = new product($("input").eq(0).val(), $("input").eq(1).val(), $("input").eq(2).val());
      this.dispalyProduct(newProd);
      $("input").each(function() { $(this).val(""); });
    } else {
      alert("Not all inputs are filled.");
    }
  };
  this.dispalyProduct = function(prod) {
    // displays the product display div and adds the new product infos
    Object.values(prod).forEach(function(elem, index) {
      $(".box").removeClass("d-none");
      $(".box p span").eq(index).text(elem);
    });
  }
}

// on click or return key press attempts to create a new object
var newProd = new newProduct();
$("button").click(function() {
  newProd.createProduct();
});

$(document).keypress(function(e) {
  if (e.which == 13) {
    newProd.createProduct();
  }
})
