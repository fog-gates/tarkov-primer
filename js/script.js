var flag = true;
$('option').click( function() {
    if(flag){
        $('.form').animate({'marginTop':"-=25%"});
    }
    flag = false;
    return false;
});
$('#customs').click( function() {
    $('img').fadeOut();
    $('#customsMap').fadeIn();
    return false;
});
$('#shoreline').click( function() {
    $('img').fadeOut();
    $('#shorelineMap').fadeIn();
    return false;
});
$('#interchange').click( function() {
    $('img').fadeOut();
    $('#interchangeMap').fadeIn();
    return false;
});
$('#factory').click( function() {
    $('img').fadeOut();
    $('#factoryMap').fadeIn();
    return false;
});
$('#labs').click( function() {
    $('img').fadeOut();
    $('#labsMap').fadeIn();
    return false;
});
$('#reserve').click( function() {
    $('img').fadeOut();
    $('#reserveMap').fadeIn();
    return false;
});
$('#ammo').click( function() {
    $('img').fadeOut();
    $('#ammoMap').fadeIn();
    return false;
});