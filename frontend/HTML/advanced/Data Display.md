Here are your notes in `.md` format for **Data Display**:

---

# 📊 Data Display in HTML

Displaying data in a structured format is crucial for dashboards, admin panels, reports, and user interfaces. The `<table>` element is commonly used for tabular data.

---

## 🧱 HTML Table Basics

Use `<table>`, `<tr>`, `<td>`, and `<th>` to create and organize rows and columns of data.

### ✅ Example Table Structure

```html
<table border="1" cellpadding="10" cellspacing="0">
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Alice</td>
      <td>alice@example.com</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Bob</td>
      <td>bob@example.com</td>
    </tr>
  </tbody>
</table>
```

---

## 🎨 Styling Tables

```css
table {
  width: 100%;
  border-collapse: collapse;
}

th {
  background-color: #f4f4f4;
  text-align: left;
}

td, th {
  padding: 10px;
  border: 1px solid #ddd;
}
```

---

## 📚 Responsive Tables

Use horizontal scroll for smaller screens:

```css
.table-container {
  overflow-x: auto;
}
```

```html
<div class="table-container">
  <table>...</table>
</div>
```

---

## 🔄 Pagination UI

Useful when working with large datasets.

### Basic Structure

```html
<div class="pagination">
  <button>&laquo; Prev</button>
  <span>Page 1 of 10</span>
  <button>Next &raquo;</button>
</div>
```

### Styles

```css
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
}
```

---

## 🛠 Tools & Libraries

* **DataTables.js** – jQuery plugin for searchable, sortable tables.
* **React Table**, **TanStack Table** – Headless UI for data grids.
* **Bootstrap Table** – Pre-styled table components.

---
