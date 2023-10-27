// password hide/show start

let password_btn =document.querySelector('.password_box .btn');
let password_input =document.querySelector('.password_box .password');

password_btn.addEventListener('click',()=>{
    if(password_input.type=='password'){
        password_input.type ='text';
    }
    else {password_input.type ='password';}
})

// Password hide/show end


// INCrement decrement start
let increment = document.querySelector("#increment");
let decrement = document.querySelector("#decrement");
let cart = document.querySelector("#cart");

//Increment js//
increment.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    cart.value = ++cartValue;
});

//Decrement js//
decrement.addEventListener("click", () => {
    let cartValue = Number(cart.value);
    if(cartValue > 1){
        cart.value = --cartValue;
    }
});
// Increment decrement end

// Range Section Starts 

let range = document.querySelector('#range_cart');

range.addEventListener('change', ()=>{
    document.querySelector('p').innerHTML = range.value;
})

// Range Section Ends 



