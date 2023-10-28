

$(document).on('click','.btn-remove', function(){
  $(this).parent().parent().remove();
});
$(document).on('click', '.btn-add', function(){
  var item = $('#newItemName input').val();
  var cost = $('#newItemPrice input').val();
  var html = '<tr><td>' + item + '</td><td>$' + cost + '.00</td><td>QTY <input type="number" value="0"></td><td>$ </td><td><button class="btn btn-remove">Remove</button></td></tr>';
  if (cost == '' || item == ''){
    alert('Please enter a valid item name and price');
  }
  else {
    $('#items').append(html);
    $('#newItemName input').val('');
    $('#newItemPrice input').val('');
  };
});

function subTotal() {
  var subTotal = 0;
  $('tr').each(function(){
    var cost = $(this).children('#itemPrice').text();
    var qty = $(this).children('#quantity').children('input').val();
    var total = qty * cost;
    subTotal += total;
    $(this).children('#itemTotal').text('$' + subTotal);
})
};




