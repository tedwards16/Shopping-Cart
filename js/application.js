$(document).ready(function() {

  $(document).on('click','.btn-remove', function(){
    $(this).parent().parent().remove();
  });
  $(document).on('click', '.btn-add', function(){
    var item = $('.newItemName input').val();
    var cost = $('.newItemPrice input').val();
    var html = '<tr><td class="itemName">' + item + '</td><td class="itemPrice">$' + cost + '.00</td><td class="quantity">QTY <input type="number" value="0"></td><td class="itemTotal"></td><td><button class="btn btn-remove">Remove</button></td></tr>';
    if (cost == '' || item == ''){
      alert('Please enter a valid item name and price');
    }
    else {
      $('.items').append(html);
      $('.newItemName input').val('');
      $('.newItemPrice input').val('');
      sum();
    };
  });

  function sum() {
    var total = 0;
    $('.items tr').each(function(){
      var price = Number(($(this).find('.itemPrice').html()).replace(/[^0-9\.]+/g, ""));
      var quantity = $(this).find('.quantity input').val();
      var subtotal = price*quantity;

      //Update item price to value or $0.00
      if (subtotal != 0) {
        $(this).find('.itemTotal').text("$" + subtotal + ".00");
      } else {
        $(this).find('.itemTotal').text("$0.00");
      }

      //Calculate cart total based on subtotals
      total += subtotal;
    })
    $('.cartTotal').text("Cart Total: $" + total + ".00");
  };
  
  sum();
  $(document).on('keyup', '.quantity', function () {
    sum();
  });
  $(document).on('click', '.quantity', function() {
    sum();
  });
});

