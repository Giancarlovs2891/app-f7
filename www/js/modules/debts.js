myApp.onPageInit('debts', function (page) {
  var table = $('#example').DataTable( {
      scrollY:        "300px",
      scrollX:        true,
      scrollCollapse: true,
      bSort:          false,
      paging:         false,
      fixedColumns:   {
          leftColumns: 1,
          rightColumns: 0
      }
  });
  console.log($(".table-bg thead td:not(.sortable-active)"));
  $(".table-bg thead td:not(.sortable-active)").css("height", "0px !important");
});
