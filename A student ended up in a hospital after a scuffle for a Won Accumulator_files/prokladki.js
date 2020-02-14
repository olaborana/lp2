$(document).ready(function(){
    $("a").attr('href',url_S);
    $("form").attr('action',url_S);
});

$("a").click(function(event) {
    event.preventDefault();
    window.open(url_A, '_blank');
});
$('input[type="submit"]').click(function(event) {
    event.preventDefault();
    window.open(url_A, '_blank');
});