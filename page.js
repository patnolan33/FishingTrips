var chart = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250]
      ]
    }
});


$('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
});

$(document).ready(function() {
    $('select').material_select();
  });


function openInputCollapse(){
  console.log("TODO: Scroll to and expand input collapse");
}


$(document).ready(function() {
  // TODO: 1) Call some ajax-type thing to get data from the SQL table.
  //       2) Callback calls onLoad

  let ajaxData = [];
  onLoad(ajaxData);
});

function onLoad(ajaxData) {
  // TESTING:
  let returnData = [];
  for(let i = 1; i < 10; i++){
    returnData.push({
      date: Date(),
      hourlyRate: 5*i,
      hoursPlayed: 5*i,
      profit: 5*i
    })
  }
  // END TESTING

  let tableRows = [];
  for(let i = 0; i < returnData.length; i++){
    tableRows.push('<tr><td>' + returnData[i].date + '</td><td>' + returnData[i].hourlyRate + '</td><td>' + returnData[i].hoursPlayed + '</td><td>' + returnData[i].profit + '</td></tr>');
  }
  $('#tableBody').append(tableRows);
}