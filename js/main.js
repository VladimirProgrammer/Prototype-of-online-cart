/**
 * Calculator of the items, costs in the cart.
 * 
 */
$(document).ready(function() {

    /* Set rates */
    var taxRate = 0.2;
    var fadeTime = 300;
 
    /* Assign actions */
    $('.main__quantity input').change(function() {
      updateQuantity(this);
    });
 
    $('.main__removeitem button').click(function() {
      removeItem(this);
    });
 
 
    /* Recalculate cart */
    function recalculateCart() {
      var subtotal = 0;
 
      /* Sum up row totals */
      $('.main__item').each(function() {
        subtotal += parseFloat($(this).children('.main__lineprice').text());
      });
 
      /* Calculate totals */
      var tax = subtotal * taxRate;
      var total = subtotal + tax;
 
      /* Update totals display */
      $('.totals-value').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('.cart-total').html(total.toFixed(2));
        
        if (total == 0) {
          $('.checkout').fadeOut(fadeTime);
        } else {
          $('.checkout').fadeIn(fadeTime);
        }
        $('.totals-value').fadeIn(fadeTime);
      });
    }
  
 
    /* Update quantity */
    function updateQuantity(quantityInput) {
      /* Calculate line price */
      var productRow = $(quantityInput).parent().parent();
      var price = parseFloat(productRow.children('.main__price').text());
      var quantity = $(quantityInput).val();
      var linePrice = price * quantity;
 
      /* Update line price display and recalc cart totals */
      productRow.children('.main__lineprice').each(function() {
        $(this).fadeOut(fadeTime, function() {
          $(this).text(linePrice.toFixed(2));
          recalculateCart();
          $(this).fadeIn(fadeTime);
        });
      });
    }
 
    /* Remove item from cart */
    function removeItem(removeButton) {
      /* Remove row from DOM and recalc cart total */
      var productRow = $(removeButton).parent().parent();
      productRow.slideUp(fadeTime, function() {
        productRow.remove();
        recalculateCart();
      });
    }
 
  });


  /**
 * Delivery adress click.
 * 
 */
   $(document).ready(function(){
    $('#selfservice').click(function(){
      document.getElementById("adress").innerHTML = "Москва Сити. Пресненская набережная, 8 стр 1, Москва, 123112";
      var element = document.getElementById("adress");
      element.classList.add("active");
      
    });
  });
  /**
 * Changing the color of buttons after click.
 * 
 */
   $(document).ready(() => {
    $('.main__input button').on('click', event => {
      $(event.currentTarget).addClass('active-button');
      
      $(event.currentTarget).siblings().removeClass('active-button')
      
      
      
    })
  })

  