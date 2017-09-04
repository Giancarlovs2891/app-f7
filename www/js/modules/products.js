myApp.onPageInit('products-list', function (page){
  function addProductToCart(x) {
    myApp.prompt('Cantidad', function (data) {
        // @data contains input value
        // myApp.confirm('Are you sure that your name is ' + data + '?', function () {
        //   myApp.addNotification({
        //       message: 'Producto agregado Cantidad:' + data
        //   });
        // });
    });
  }
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

myApp.onPageInit('products-shopping-cart', function (page) {
});
