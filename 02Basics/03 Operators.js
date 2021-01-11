//D = (L - S)/L * 100;

var sellingrPrice = 199;
var listingPrice = 799;

var discountPercent = ((listingPrice-sellingrPrice) / listingPrice) * 100;

console.log("Discount percentage is :" + discountPercent);

displayDiscountPercentage = Math.round(discountPercent);

console.log(displayDiscountPercentage + "% off");

var result = listingPrice > sellingrPrice;

console.log(typeof result);