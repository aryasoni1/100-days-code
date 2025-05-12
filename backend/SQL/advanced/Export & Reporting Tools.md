Here are the `.md` notes for **Export & Reporting Tools**:

---

# 📊 Export & Reporting Tools

Generating reports and exporting data are common tasks in web applications that rely on databases. This involves converting data from SQL queries into various formats such as CSV, PDF, or Excel for easy consumption by users or for external processing. In this guide, we will explore generating reports, triggering scheduled reports, and using SQL views to automate data extraction.

---

## 📤 Generating CSV/PDF Reports from SQL Data

### 1. **CSV Reports**

CSV (Comma Separated Values) is one of the most common formats for exporting tabular data from SQL databases. Many reporting systems or tools use CSV for data extraction and import.

* **How it works**:
  You can export SQL data directly into CSV format using a scripting language or database utilities.

  * **MySQL Example (Command Line)**:

    ```bash
    SELECT * INTO OUTFILE '/tmp/report.csv'
    FIELDS TERMINATED BY ','
    ENCLOSED BY '"'
    LINES TERMINATED BY '\n'
    FROM orders;
    ```

  * **Using Node.js with `mysql2`**:

    You can query the database and generate a CSV file programmatically.

    ```javascript
    const mysql = require('mysql2');
    const fs = require('fs');
    const { parse } = require('json2csv');

    const connection = mysql.createConnection({host: 'localhost', user: 'root', database: 'shop'});

    connection.query('SELECT * FROM orders', (err, results) => {
      if (err) throw err;
      const csv = parse(results);  // Convert JSON to CSV format
      fs.writeFileSync('orders_report.csv', csv);
      connection.end();
    });
    ```

* **Using Node.js with `csv-writer`**:

  ```javascript
  const createCsvWriter = require('csv-writer').createObjectCsvWriter;

  const csvWriter = createCsvWriter({
    path: 'orders_report.csv',
    header: [
      {id: 'id', title: 'ID'},
      {id: 'total', title: 'Total'},
      {id: 'status', title: 'Status'}
    ]
  });

  connection.query('SELECT * FROM orders', (err, rows) => {
    if (err) throw err;
    csvWriter.writeRecords(rows)       // returns a promise
      .then(() => console.log('The CSV file was written successfully'));
  });
  ```

---

### 2. **PDF Reports**

PDF is a commonly used format for printing reports or sharing data in a readable format. To generate PDFs, you'll need to use libraries or third-party tools.

* **Using `pdfkit` (Node.js)**:

  Here's an example of how to create a PDF report with Node.js using the `pdfkit` library:

  ```javascript
  const PDFDocument = require('pdfkit');
  const fs = require('fs');

  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream('orders_report.pdf'));

  // Query database and loop through the results
  connection.query('SELECT * FROM orders', (err, rows) => {
    if (err) throw err;
    
    // Add a title
    doc.fontSize(18).text('Orders Report', { align: 'center' });

    // Add table headers
    doc.fontSize(12).text('ID  |  Total  |  Status');

    rows.forEach(order => {
      doc.text(`${order.id}  |  ${order.total}  |  ${order.status}`);
    });

    doc.end();
  });
  ```

* **Using `puppeteer`**:
  You can also generate PDFs using `puppeteer`, a headless browser tool that can render HTML to PDF.

  ```javascript
  const puppeteer = require('puppeteer');

  const generatePdf = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = `<h1>Orders Report</h1><table><tr><th>ID</th><th>Total</th><th>Status</th></tr>`;
    
    const rows = await connection.query('SELECT * FROM orders');
    rows.forEach(order => {
      html += `<tr><td>${order.id}</td><td>${order.total}</td><td>${order.status}</td></tr>`;
    });

    html += `</table>`;
    
    await page.setContent(html);
    await page.pdf({ path: 'orders_report.pdf' });

    await browser.close();
  };

  generatePdf();
  ```

---

## 🕒 Trigger Scheduled Reports with SQL Views + Cron

### 1. **Using SQL Views for Predefined Reports**

SQL Views are virtual tables that represent the result of a query. Views can be used to encapsulate complex queries and generate reusable reports.

* **Example: Creating a Sales Report View**:

  ```sql
  CREATE VIEW sales_report AS
  SELECT 
    p.name AS product_name,
    SUM(o.total) AS total_sales
  FROM orders o
  JOIN products p ON o.product_id = p.id
  GROUP BY p.name;
  ```

  Now, you can query `sales_report` just like a table:

  ```sql
  SELECT * FROM sales_report;
  ```

### 2. **Automating Report Generation with Cron Jobs**

Cron jobs are used to schedule tasks at specific intervals. You can set up a cron job that runs a script to generate reports automatically at predefined times (e.g., daily, weekly, monthly).

* **Cron Example (Linux/Unix)**:

  To schedule a report generation script at midnight every day:

  ```bash
  0 0 * * * /usr/bin/node /path/to/your/report-generation-script.js
  ```

* **Node.js Script for Cron Jobs (using `node-cron`)**:

  First, install the `node-cron` library:

  ```bash
  npm install node-cron
  ```

  Then, schedule the report generation:

  ```javascript
  const cron = require('node-cron');
  const fs = require('fs');
  const mysql = require('mysql2');
  const { parse } = require('json2csv');

  const connection = mysql.createConnection({ host: 'localhost', user: 'root', database: 'shop' });

  cron.schedule('0 0 * * *', () => {
    console.log('Running cron job to generate report...');
    
    connection.query('SELECT * FROM orders', (err, results) => {
      if (err) throw err;
      const csv = parse(results);  // Convert JSON to CSV format
      fs.writeFileSync('/path/to/reports/daily_orders_report.csv', csv);
      console.log('Report generated successfully!');
    });
  });
  ```

  This will run the report generation script every day at midnight.

---

## 📝 Conclusion

Exporting data and scheduling reports are essential tasks in any data-driven application. With the right tools, you can:

* Generate **CSV** and **PDF** reports using SQL data.
* Automate report generation using **SQL Views** and **cron jobs**.
* Use libraries like **`pdfkit`** and **`json2csv`** to create custom, readable formats for reporting.

By implementing these tools and practices, you can effectively manage and share your data with clients, stakeholders, or other services.

---

Let me know if you need more details on any of these topics!
