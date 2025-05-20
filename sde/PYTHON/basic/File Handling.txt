Here’s a beginner-friendly `.md` formatted note on **File Handling in Python**:

---

# 📄 **File Handling in Python**

> Learn how to **read from** and **write to** files using Python — a core skill for working with data, logs, config files, and more.

---

## 📖 **Reading Files**

### 🔓 Using `open()`

```python
file = open("example.txt", "r")  # "r" = read mode
content = file.read()
print(content)
file.close()
```

> ⚠️ Always close the file after you're done.

---

## ✅ **Using `with` (Context Manager)**

Best practice! Automatically closes the file:

```python
with open("example.txt", "r") as file:
    content = file.read()
    print(content)
```

### 🔍 Other read methods

```python
file.readline()  # Reads one line
file.readlines() # Reads all lines into a list
```

---

## ✍️ **Writing to Files**

### 📝 `w` = Write (overwrite)

```python
with open("output.txt", "w") as file:
    file.write("Hello, world!\n")
```

> If the file exists, it will be **overwritten**.

---

### ➕ `a` = Append

```python
with open("output.txt", "a") as file:
    file.write("Another line\n")
```

> Appends content to the end of the file.

---

## 🔄 Modes Overview

| Mode   | Description       |
| ------ | ----------------- |
| `'r'`  | Read (default)    |
| `'w'`  | Write (overwrite) |
| `'a'`  | Append            |
| `'r+'` | Read + Write      |

---

## 📦 Reading Files Line by Line

```python
with open("data.txt") as file:
    for line in file:
        print(line.strip())
```

---

## ✅ Summary

| Task        | Method                              |
| ----------- | ----------------------------------- |
| Read file   | `open("file.txt", "r")`             |
| Write file  | `open("file.txt", "w")`             |
| Append file | `open("file.txt", "a")`             |
| Best way    | Use `with open(...) as file:` block |

---

Let me know if you'd like the next note on **Error Handling**, **Object-Oriented Programming**, or **JSON & CSV parsing**!
