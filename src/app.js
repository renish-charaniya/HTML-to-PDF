
const fs = require('fs');
var {createRow,createTable,pdfConvert} = require('../utilityFunctions')
let htmlData = ` <html>
<head>
  <style>
    table {
      width: 100%;
    }
    tr {
      text-align: left;
      border: 1px solid black;
    }
    th, td {
      padding: 15px;
    }
    tr:nth-child(odd) {
      background: #CCC
    }
    tr:nth-child(even) {
      background: #FFF
    }
    .no-content {
      background-color: red;
    }
  </style>
</head>
<body>
<p>Hello,</p><p>Here is the allotment status</p><table><thead><tr><th><p>Name </p></th><th><p>Email</p></th><th><p>Amount</p></th></tr><tr><th></th><th></th><th></th></tr></thead></table><p>Signature 1			Signature 2            		       Signature 3</p></body></html>`


// JSON data
// const data = require('./data.json');
const data = [{
        "name": "abc",
        "email": "abc@gmail.com",
        "amount": 10
    },
    {
        "name": "pqr",
        "email": "pqr@gmail.com",
        "amount": 20
    },
    {
        "name": "xyz",
        "email": "xyz@gmail.com",
        "amount": 30
    },
    {
        "name": "mys",
        "email": "mys@gmail.com",
        "amount": 40
    },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }, {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }, {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }, {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }, {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }, {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }, {
    //     "name": "abc",
    //     "email": "abc@gmail.com",
    //     "amount": 10
    // },
    // {
    //     "name": "pqr",
    //     "email": "pqr@gmail.com",
    //     "amount": 20
    // },
    // {
    //     "name": "xyz",
    //     "email": "xyz@gmail.com",
    //     "amount": 30
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // },
    // {
    //     "name": "mys",
    //     "email": "mys@gmail.com",
    //     "amount": 40
    // }
]

try {

    /* generate rows */
    const rows = data.map(createRow).join('');
    /* generate table */
    const table = createTable(rows);

    const regex = /(<table[^>]*>(?:.|\n)*?<\/table>)/;
    const html = htmlData.replace(regex, table)
    pdfConvert(html)
   


    /* generate html */
    // const html = createHtml(table);
    /* write the generated html to file */
    // fs.writeFileSync('htmlfile.html', html);
    // console.log('Succesfully created an HTML table');
} catch (error) {
    console.log('Error generating table', error);
}


// ### To convert doc - edit data - convert to pdf 

// const docxTables = require('docx-tables')
// docxTables({
//     file: 'file.docx'
//   }).then((data) => {
//     // .docx table data
//     console.log(JSON.stringify(data))
//   }).catch((error) => {
//     console.error(error)
//   })

// var mammoth = require("mammoth");

// var mammoth = require("mammoth");

// mammoth.convertToHtml({path: "file.docx"})
//     .then(function(result){
//         var html = result.value; // The generated HTML
//         console.log(html);
//         var messages = result.messages; // Any messages, such as warnings during conversion
//     })
//     .done();
