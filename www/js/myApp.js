// Init App
var myApp = new Framework7({
    modalTitle: 'My App',
    // Enable Material theme
    material: true,
});

// Expose Internal DOM library
var $$ = Dom7;

// Add main view
var mainView = myApp.addView('.view-main', {
});

// Show/hide preloader for remote ajax loaded pages
// Probably should be removed on a production/local app
$$(document).on('ajaxStart', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.showIndicator();
});
$$(document).on('ajaxComplete', function (e) {
    if (e.detail.xhr.requestUrl.indexOf('autocomplete-languages.json') >= 0) {
        // Don't show preloader for autocomplete demo requests
        return;
    }
    myApp.hideIndicator();
});

myApp.onPageInit('login', function (page) {
});

myApp.onPageInit('load-data', function (page) {
  myApp.showIndicator();
  window.setTimeout(function() {
    myApp.hideIndicator();
    mainView.router.loadPage("views/main-menu.html")
  },1000);
});

myApp.onPageInit('about', function (page) {
});

myApp.onPageInit('clients-list', function (page){
  // Generate array with 10000 demo items:
  var items = [];
  for (var i = 0; i < 20000; i++) {
      items.push({
          title: 'ACOSTAMADIEDO VERGARA JAIME ' + i,
          subtitle: 'NIT: 90065382' + i
      });
  }

  // Create virtual list
  var virtualList = myApp.virtualList($$(page.container).find('.virtual-list'), {
      // Pass array with items
      items: items,
      // Custom search function for searchbar
      searchAll: function (query, items) {
          var found = [];
          for (var i = 0; i < items.length; i++) {
              if (items[i].title.includes(query) || query.trim() === '') found.push(i);
          }
          return found; //return array with mathced indexes
      },
      // List item Template7 template
      template: '<li>' +
                  '<a href="views/client-profile.html" class="item-link item-content">' +
                    // '<div class="item-media">' +
                    //   '<img src="http://lorempixel.com/88/88/fashion/3" width="44">' +
                    // '</div>' +
                    '<div class="item-inner">' +
                      '<div class="item-title-row">' +
                        '<div class="item-title nowrap-list-title">{{title}}</div>' +
                      '</div>' +
                      '<div class="item-subtitle">{{subtitle}}</div>' +
                    '</div>' +
                  '</a>' +
                '</li>',
      // Item height
      height: 73,
  });
});

myApp.onPageInit('products-list', function (page){
  // Generate array with 10000 demo items:
  var items = [];
  for (var i = 0; i < 50000; i++) {
    var cod = Math.floor(Math.random()*90000) + 10000;
      items.push({
          id: i,
          descripcion: "Dolex 100 MG PED MASTI X 350 tabletas",
          codigo: cod.toString(),
          precio: "759.999",
          iva: "15.689",
          stock: "69",
          img: "http://lorempixel.com/360/360/people/"+Math.floor((Math.random() * 10) + 1)
      });
  }

  // Create virtual list
  var virtualList = myApp.virtualList($$(page.container).find('.virtual-list'), {
      // Pass array with items
      items: items,
      // Custom search function for searchbar
      searchAll: function (query, items) {
          myApp.showIndicator();
          var found = [];
          for (var i = 0; i < items.length; i++) {
              if ((items[i].descripcion.toLowerCase().includes(query.toLowerCase()) || items[i].codigo.includes(query)) || query.trim() === '') found.push(i);
          }
          myApp.hideIndicator();
          return found; //return array with mathced indexes
      },
      // List item Template7 template
      template: '<li>' +
                  '<a href="javascript:addProductToCart(1);" class="item-link item-content product-list-min-height add-product-to-cart">' +
                    '<div class="item-inner product-list-img">' +
                      '<div style="background-image: url(&#39;{{img}}&#39;)"></div>' +
                    '</div>' +
                    '<div class="item-inner">' +
                      '<div class="item-title">' +
                        '<div class="item-title nowrap-list-title">{{descripcion}}</div>' +
                      '</div>' +
                      '<div class="item-text">Codigo: {{codigo}}</div>' +
                      '<div class="item-text product-list-price">${{precio}}</div>' +
                      '<div class="item-text product-list-od">' +
                        '<span>IVA: 0</span>' +
                        '<span class="product-list-stock">Stock: {{stock}}</span>' +
                      '</div>' +
                    '</div>' +
                  '</a>' +
                '</li>',
      // Item height
      height: 73,
  });
});

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
