$(document).ready(function(){

     console.log('jquery running');
     var check1 = null;
     var check2 = null;
     var check3 = null;

     function validate(){
          if(!check1){
               $('#premium').empty()
               $('#premium').html("<h1>Not Premium Printer</h1>")
               return null
          }
          else {
               console.log('check1 did pass')
          }
          if(!check2){
               console.log('check2 didnt pass')
               $('#premium').empty()
               $('#premium').html("<h1>Not Premium Printer</h1>")
               return null
          }
          else{
               console.log('check2 did pass')
          }
          if(!check3){
               console.log('check3 didt pass')
               $('#premium').empty()
               $('#premium').html("<h1>Not Premium Printer</h1>")
               return null
          }
          else(
               // $('#premium').empty()
               $('#premium').html("<h1>Premium Printer</h1>")
          )
     }

     // checks ink counter b %
     $("#target").submit(function(event) {
          var counter = $('input').val();
          if ( counter == '' ){
               alert('Must enter a value')
          }
          else if( $('input').val() <= 49 ) {
               $('#target').addClass('good');
               check1 = true;
               validate();
          }
          else if( $('input').val() > 49 ) {
               $('#target').removeClass('good');
               $('#target').addClass('danger');
               check1 = false;
               validate();
          }
          event.preventDefault();
     })

     // this is the age of the pump
     $("#pump_age").submit(function(event) {
          if( $('#age option:selected').val() === '1' ) {
               $('#pump_age').addClass('good');
               check2 = true;
               validate();
          }
          if( $('#age option:selected').val() === '2' ) {
               $('#pump_age').removeClass('good');
               $('#pump_age').addClass('danger');
               check2 = false;
               validate();
          }
          event.preventDefault();
     })

     // this is for the amount of capital parts
     $("#targetTwo").submit(function(event) {
          var cap = $('#targetTwo input').val();
          if ( cap == '' ){
               alert('Must enter a value')
          }
          else if( cap <= 3 ) {
               console.log('less than 3')
               $('#targetTwo').addClass('good');
               check3 = true;
               validate();
          }
          if( cap > 4 ) {
               console.log('greater than 4')
               $('#targetTwo').removeClass('good');
               $('#targetTwo').addClass('danger');
               check3 = false;
               validate();
          }
          event.preventDefault();
     })
});
