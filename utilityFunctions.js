var pdf = require('html-pdf'); // Weekly downloads 121,056

const createRow = (item) => `
<tr>
  <td>${item.name}</td>
  <td>${item.email}</td>
  <td>${item.amount}</td>
</tr>
`;

/**
* @description Generates an `html` table with all the table rows
* @param {String} rows
* @returns {String}
*/
const createTable = (rows) => `
<table>
  <tr>
      <th>Name</th>
      <th>email</th>
      <th>amount</th>
  </tr>
  ${rows}
</table>
`;

const pdfConvert =  (html) => {
    var options = {
        format: 'Letter'
    };

    pdf.create(html, options).toFile('../PdfFiles/convert_data.pdf', function(err, res) {
        if (err){
            return err
        }else{
          return res  
        } 
      });
}


/**
 * @description Generate an `html` page with a populated table
 * @param {String} table
 * @returns {String}
 */

const createHtml = (table) => `
  <html>
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
      ${table}
    </body>
  </html>
`;


module.exports ={
    createTable,
    createRow,
    pdfConvert,
    createHtml
}