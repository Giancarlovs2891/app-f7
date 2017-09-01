var _DB = openDatabase('ETICOS', '1', 'ETICOS Database', 50 * 1024 * 1024);

function createTableClients(tx) {
  var query = "CREATE TABLE IF NOT EXISTS CLIENTES (";
  query += "DB,";
  query += "nit,";
  query += "nombres,";
  query += "direccion,";
  query += "ciudad,";
  query += "codigo_dane,";
  query += "ciudad_dane,";
  query += "telefono_1,";
  query += "contacto_1,";
  query += "cupo,";
  query += "lista,";
  query += "lista2,";
  query += "bloqueo,";
  query += "nit_real,";
  query += "vendedor,";
  query += "clase_cliente,";
  query += "descuento_fijo,";
  query += "paginaweb,";
  query += "fechaActualizacion";
  query += ")";
  tx.executeSql(query);
}
function createTableDebts(tx) {
  var query = "CREATE TABLE IF NOT EXISTS CARTERA(";
  query += "zona,";
  query += "nit,";
  query += "tipo,";
  query += "numero,";
  query += "fecha,";
  query += "fecha_vcto_documento,";
  query += "dias_vencido,";
  query += "valor_iva,";
  query += "valor_total,";
  query += "valor_aplicado,";
  query += "saldo,";
  query += "valor_base_dcto,";
  query += "de_1_a_30,";
  query += "de_31_a_60,";
  query += "de_61_a_90,";
  query += "de_91_a_120,";
  query += "documento_referencia";
  query += ")";
  tx.executeSql(query);
}
function createTableProducts(tx) {
  var query = "CREATE TABLE IF NOT EXISTS PRODUCTOS (";
  query += "id INTEGER PRIMARY KEY AUTOINCREMENT,"
  query += "DB,";
  query += "codigo,";
  query += "conversion,";
  query += "desc_generico,";
  query += "desc_grupo,";
  query += "descripcion,";
  query += "embalaje,";
  query += "existencia,";
  query += "fecha_actualizacion,";
  query += "generico,";
  query += "grupo,";
  query += "lista,";
  query += "nit,";
  query += "nombres,";
  query += "porcentaje_iva,";
  query += "precioneto";
  query += ")";
  tx.executeSql(query);
}
function createTablePrices(tx) {
  var query = "CREATE TABLE IF NOT EXISTS PRECIOS (";
  query += "DB,";
  query += "codigo,";
  query += "lista,";
  query += "precioneto";
  query += ")";
  tx.executeSql(query);
}
function createTableRequestsHistory(tx) {
  var query = "CREATE TABLE IF NOT EXISTS HISTORIALENVIOS (";
  query += "id INTEGER PRIMARY KEY AUTOINCREMENT,";
  query += "fecha,";
  query += "ruta,";
  query += "jsonPedido,";
  query += "estado,";
  query += "descripcion";
  query += ")";
  tx.executeSql(query);
}
_DB.transaction(createTableClients);
_DB.transaction(createTableDebts);
_DB.transaction(createTableProducts);
_DB.transaction(createTablePrices);
_DB.transaction(createTableRequestsHistory);
