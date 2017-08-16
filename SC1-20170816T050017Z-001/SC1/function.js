function addtocart(price) {
		//alert("Hello");
       //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
       //var singleProduct = {};
       //Fill the product object with data
       //singleProduct.Name=name;
       //singleProduct.Description=description;
       //singleProduct.Price=price;
       //Add newly created product to our shopping cart 
      // shoppingCart.push(singleProduct);
       //call display function to show on screen
       //displayShoppingCart();
		

	var price_s = parseInt(price);
	alert("Price of the book : " + price_s);
	var t_p = localStorage.getItem('t_p');
	if(t_p == null){
        	t_p = 0;
    	} 
    alert("Your Previous Bill: Rs." + t_p);
    t_p = price_s + parseInt(t_p);
    alert("Your total bill: Rs." + t_p);
    localStorage.setItem("t_p",t_p);
	
	
    }  

	