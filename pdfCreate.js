var qpdf = require('node-qpdf');

async function pdfCreat(){
    var options = {
        keyLength: 128,
        password: '123',
        restrictions: {
            print: 'full',
            useAes: 'y'
        }
    }
    
    var doc = await qpdf.encrypt('./alo.pdf', options, './alo-p.pdf');

    doc.stdout.pipe(res);

    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'inline; filename=order.pdf'
    });
}

pdfCreat();


