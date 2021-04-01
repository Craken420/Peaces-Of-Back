fs = require('fs');
var parser = require('xml2json');

fs.readFile( './Ejemplo_XML_Dotnet3.3 complemento IEDU.xml', function(err, data) {
    var json = JSON.parse( parser.toJson(data) );
    // console.log(json.Comprobante.Folio);
    // console.log(json.Comprobante.Fecha);
    // console.log(json.Comprobante.Folio);
    console.log(json.Comprobante.Conceptos);
    const report = `Reporte XML:\n
    ClaveProdServ:: ${json.Comprobante.Conceptos.Concepto.ClaveProdServ}\n
    NoIdentificacion:: ${json.Comprobante.Conceptos.Concepto.NoIdentificacion}\n
    `
    fs.writeFileSync('report.txt', report, 'latin1')

});
