let elemStartTime = document.getElementById('starttime');
let elemTime0800 = document.getElementById('img-time-0800');
let elemTime2000 = document.getElementById('img-time-2000');
let elemTime0800_Notactiv = document.getElementById('img-time-0800-noactiv');
let elemTime2000_Notactiv = document.getElementById('img-time-2000-noactiv');
let elemBtnPlus = document.getElementById('img-order-plus');
let elemBtnMinus = document.getElementById('img-order-minus');
let elemNumOrders = document.getElementById('numorders');
let countNumOrders = 1;

elemStartTime.onclick = () =>
{
    !elemTime0800.classList.contains("hide") ? elemTime0800.classList.add("hide") : elemTime0800.classList.remove("hide");
    !elemTime2000.classList.contains("hide") ? elemTime2000.classList.add("hide") : elemTime2000.classList.remove("hide");
    !elemTime0800_Notactiv.classList.contains("hide") ? elemTime0800_Notactiv.classList.add("hide") : elemTime0800_Notactiv.classList.remove("hide");
    !elemTime2000_Notactiv.classList.contains("hide") ? elemTime2000_Notactiv.classList.add("hide") : elemTime2000_Notactiv.classList.remove("hide");
}

elemBtnPlus.onclick = () =>{
    if (countNumOrders < 15)
    elemNumOrders.value = ++countNumOrders;
}

elemBtnMinus.onclick = () =>{
    if (countNumOrders > 1)
    elemNumOrders.value = --countNumOrders;
}

// elemNumOrders.onclick = function(elemNumOrders){
//     select(elemNumOrders);
// }



elemNumOrders.addEventListener("focus", () =>{
    select(this);
});
