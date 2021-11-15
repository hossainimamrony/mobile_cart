                // Mobile Pricing section
const addPhone = document.getElementById("add_Mobile").addEventListener('click', function(){
incrase ("cart-value");
AddpriceIng("mobile_price", MobilePrice);
AddpriceIng("Subtotal", MobilePrice);
AddpriceIng("Total", MobilePrice);

})

          //  remover section
const removerM = document.getElementById('removeM').addEventListener('click', function(){
    document.getElementById("Mobile_cart").style.display = 'none';
    const MobilePrice = InnerText ("mobile_price");
    const subTotal = InnerText ("Subtotal") - MobilePrice;
    const Total = InnerText ("Total") - MobilePrice;
    document.getElementById("Subtotal").innerText = subTotal;
    document.getElementById("Total").innerText = Total;

})

const removeC = document.getElementById("removeC").addEventListener('click', function(){
    document.getElementById("casing_Cart").style.display = 'none';
    const cartPrice = InnerText ("casing_price");
    const subTotal = InnerText ("Subtotal") - cartPrice;
    const Total = InnerText ("Total") - cartPrice;
    document.getElementById("Subtotal").innerText = subTotal;
    document.getElementById("Total").innerText = Total;
})
            //remove_Mobile
const removeMobile = document.getElementById("remove_Mobile").addEventListener('click', function(){
    discrase ("cart-value",);
    RemovePriceIng("mobile_price", MobilePrice);
    RemovePriceIng("Subtotal",MobilePrice);
    RemovePriceIng("Total",MobilePrice);
    
})

            // Cover Add
 const addCover = document.getElementById("Add_casing").addEventListener('click',function(){
        incrase ("cCart_value");
        AddpriceIng("casing_price",CasingPrice);
        AddpriceIng("Subtotal", CasingPrice);
        AddpriceIng("Total", CasingPrice);



})

            // cover Remove
const removeCasing = document.getElementById("remove_casing").addEventListener('click', function(){
        discrase ("cCart_value");
        RemovePriceIng("casing_price", CasingPrice);
        RemovePriceIng("Subtotal",CasingPrice);
        RemovePriceIng("Total",CasingPrice);

})

const MobilePrice=1219;
const CasingPrice = 59;
            //functions
function InnerText (peram){
    const Price = document.getElementById(peram).innerText;
    const PriceN = parseFloat(Price);
    return PriceN;
}

function AddpriceIng(pricing, Allprice){
    const Price = document.getElementById(pricing).innerText;
    const PriceN = parseFloat(Price);
    const TotalPrice =PriceN + Allprice;
     document.getElementById(pricing).innerText = TotalPrice;
}
function RemovePriceIng(pricing,Allprice){
    const Price = document.getElementById(pricing).innerText;
    const PriceN = parseFloat(Price);
    const TotalPrice =PriceN - Allprice;
    document.getElementById(pricing).innerText = TotalPrice;
}

function incrase (inputValue){
    const Incrase =  grabValue(inputValue)+1;
    document.getElementById(inputValue).value = Incrase;
}

function discrase (inputValue){
    const Discrase =  grabValue(inputValue)-1;
    document.getElementById(inputValue).value = Discrase;
}

function grabValue(inputName){
    const cartValue = document.getElementById(inputName).value;
    const cartvalueN = parseFloat(cartValue);
    return cartvalueN;
}