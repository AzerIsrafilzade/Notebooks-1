var ModelTdTag = document.getElementById("model")
var PriceTdTAg = document.getElementById("price")
var StorageTdTag = document.getElementById("storage")




ModelTdTag. innerText = "ASUS"
PriceTdTAg. innerText = "2000 manat"
StorageTdTag. innerText = "500GB"

var stock = 5; 
var availability;

if (stock) {
    availability = "In Stock";
}

document.getElementById("stock-status").innerText = availability;

