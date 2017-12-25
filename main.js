// Team: Mazi & Sima
// Partner Exercise 1
$('h1:nth-child(3)').css('color', 'blue');
$('.red-div').css('color', 'red');
$('#ex1-list li:first-child').css('color', 'green');
$('#ex1-list li:nth-child(2)').css('color', 'pink');
$('#brown-div').css('color', 'brown');

// Partner Exercise 2
$('#btn-ex2').click(function () {
    var userInput = $('#my-input').val();
    alert(userInput);
});

// Partner Exercise 3
$('#btn-ex3').click(function () {
    var userInput = $('#my-input2').val();
    $('.students').append('<li>' + userInput + '</li>');
    $('#my-input2').val("");
});

$(document).on('click', '.students li', function () {
    $(this).remove();
});