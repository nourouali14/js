
var plusBtns=document.querySelectorAll('#plus-btn')
var total=Number(document.getElementById('total').innerHTML)
var minusBtns=document.querySelectorAll('#minus-btn')
// add product

for(const btn of plusBtns){
    btn.addEventListener("click",function(){
        var qty=Number(btn.previousElementSibling.innerHTML)
        qty++
        console.log(qty)
        btn.previousElementSibling.innerHTML=qty
        var price=Number(btn.parentNode.children[1].children[0].innerHTML)
        total+=price
        document.getElementById('total').innerHTML=total
    })
}

// remove product

for(const btn of minusBtns){
    btn.addEventListener("click",function(){
        var qty=Number(btn.nextElementSibling.innerHTML)
        if(qty>0){
            qty--
        console.log(qty)
        btn.nextElementSibling.innerHTML=qty
        var price=Number(btn.parentNode.children[1].children[0].innerHTML)
        total-=price
        document.getElementById('total').innerHTML=total
        }
    })
}