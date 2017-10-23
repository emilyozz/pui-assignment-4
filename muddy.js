console.log("i'm here");

  /** New item and add item to cart function */

  var Item = function(name, color, size, count, price) {
    this.name = name
    this.color = color
    this.size = size
    this.count = count
    this.price = price
  };

  var cartThings = JSON.parse(localStorage.getItem("cartArray"));


var chosenHarness = JSON.parse(localStorage.getItem("cartArray")) || [];


$(document).ready(function(){


    $('#cart').on('click', function(ev){
      var color2 = $('#select-color').val();
      var size2 = $('#select-size').val();
      var count2 = $('#select-quantity').val();
      var price2 = $(this).attr("data-price");
      var name2 = $(this).attr("data-name");
      var harness = new Item (name2, color2, size2, count2, price2);
      console.log(harness);
      // addItemToCart (Item);
      // console.log(cart);
      var chosenHarness = JSON.parse(localStorage.getItem("cartArray")) || [];
      chosenHarness.push(harness);
      localStorage.setItem('cartArray', JSON.stringify(chosenHarness));
      location.reload();


    });

      var printHarness = JSON.parse(localStorage.getItem("chosenHarness"));

      console.log(chosenHarness);

      if (chosenHarness == null){
      }  else {
        var cartSize = chosenHarness.length;
        $('#cart-counter').text("Items in Cart:" + " " + cartSize);
      }

      for (i=0; i < cartSize; i++) {
        $(".cart-container").append('<div id=new-harness' + [i] + '></div>');
        $('#new-harness' +[i]).append('<div id= harness-color>' + chosenHarness[i].color + " " + chosenHarness[i].size + " " + chosenHarness[i].name +'</div>');
        $('#new-harness' +[i]).append('<div id= harness-quantity>' + chosenHarness[i].count + '</div>');    
        $('#new-harness' +[i]).append('<div id= harness-price>' + chosenHarness[i].price + '</div>'); 
        $('#new-harness' +[i]).append('<button id=' + [i] +' class=removeit> Remove Item </button>');      
      }

      $(".removeit").click(function() {
        var position = $(this).attr('id');
        chosenHarness.splice(position, 1);
        localStorage.setItem('cartArray', JSON.stringify(chosenHarness));
        location.reload();
      })

      /*clear curent value on cart page and load stringified variables*/

      $("#cartItems").text(printHarness);

      $("#select-color").change(function() {
        if (this.value==='Strawberry'){
          $(".cat-image").attr('src', 'Muddy Images/StrawberryHarness.jpg');
        }
      })

      $("#select-color").change(function() {
        if (this.value==='Blackberry'){
          $(".cat-image").attr('src', 'Muddy Images/BlackberryHarness.jpg');
        }
      })

      $("#select-color").change(function() {
        if (this.value==='Crazyberry'){
          $(".cat-image").attr('src', 'Muddy Images/CrazyberryHarness.jpg');
        }
      })      

      $("#select-color").change(function() {
        if (this.value==='Camoflauge'){
          $(".cat-image").attr('src', 'Muddy Images/CamoHarness.jpg');
        }
      })

      $("#select-color").change(function() {
        if (this.value==='Night Moon'){
          $(".cat-image").attr('src', 'Muddy Images/NightMoonHarness.jpg');
        }
      })

      $("#select-color").change(function() {
        if (this.value==='Fire Orange'){
          $(".cat-image").attr('src', 'Muddy Images/CatHarness.jpg');
        }
      })      


 

  });



