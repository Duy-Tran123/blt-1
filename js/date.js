$('#datepicker').datepicker({
            showOtherMonths: true
        });
$('#datepicker1').datepicker({
            showOtherMonths: true
        });
$('#datepicker2').datepicker({
            showOtherMonths: true
        });
$('#datepicker3').datepicker({
            showOtherMonths: true
        });
$('#datepicker4').datepicker({
            showOtherMonths: true
        });
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 225,
      max: 800,
      values: [ 225, 800 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
  } );