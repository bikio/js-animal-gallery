// // Add your code here
// $('.filter-button').on('click', function () {
//   $(".mon");
// });

$('.filter-button').on('click', function(){
$("." + this.id).toggle();
$("#" + this.id).toggleClass('active');
})




// $('#monkey').click(function () {
//     $('.gallery div').hide();
//     $('.monkey').show();
// });
// $('#dog').click(function () {
//     $('.gallery div').hide();
//     $('.dog').show();
// });
// $('#cat').click(function () {
//     $('.gallery div').hide();
//     $('.cat').show()
// });