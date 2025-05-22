Here’s a beginner-friendly `.md` formatted note on **Python for Data Science & AI**, focused on **NumPy** and **Pandas**:

---

# 📊 **6. Python for Data Science & AI**

> Leverage Python libraries for **data analysis**, **machine learning**, and **AI development**.

---

## 🧠 **Why Python for Data Science?**

* Simple syntax
* Huge ecosystem (NumPy, Pandas, Scikit-learn, etc.)
* Rich community and tutorials

---

## 📦 **NumPy & Pandas Overview**

| Library    | Purpose                            |
| ---------- | ---------------------------------- |
| **NumPy**  | Efficient arrays & math operations |
| **Pandas** | Tabular data (like Excel/SQL)      |

---

## 🧮 **NumPy Basics**

```python
import numpy as np

arr = np.array([1, 2, 3])
print(arr.mean())        # Average
print(arr.shape)         # Shape of array
```

### 🛠️ Common Operations:

* `np.array()`, `np.zeros()`, `np.ones()`
* Math: `np.sum()`, `np.mean()`, `np.std()`
* Indexing: `arr[0:2]`, `arr[arr > 5]`

---

## 📊 **Pandas Basics**

```python
import pandas as pd

# Create DataFrame
data = pd.DataFrame({
  'name': ['Alice', 'Bob'],
  'age': [25, 30]
})

print(data.head())
```

### 🛠️ Common Operations:

* `data.head()`, `data.info()`, `data.describe()`
* Access: `data['age']`, `data.iloc[0]`, `data.loc[0, 'name']`
* Filter: `data[data['age'] > 25]`
* Aggregation: `data.groupby('age').mean()`

---

## 📥 **Load Data from CSV/Excel/SQL**

```python
df = pd.read_csv('data.csv')
df.to_excel('output.xlsx')
```

---

## 🔁 **Cleaning & Transforming Data**

* Missing values: `df.dropna()`, `df.fillna()`
* Rename: `df.rename(columns={'old': 'new'})`
* Apply functions: `df['col'].apply(lambda x: x*2)`

---

## 🧠 Use Cases in AI/ML

| Task               | Tool                              |
| ------------------ | --------------------------------- |
| Preprocessing data | Pandas                            |
| Numerical features | NumPy                             |
| ML training        | Scikit-learn, PyTorch, TensorFlow |

---

## ✅ Best Practices

* Use Jupyter Notebooks for exploration
* Always inspect data with `.head()`, `.info()`
* Save intermediate results (`.to_csv()`)

---

Let me know if you’d like notes on:

* Data visualization (Matplotlib, Seaborn, Plotly)
* Machine learning (Scikit-learn, XGBoost)
* Deep learning (TensorFlow, PyTorch)
* Real-world datasets (Kaggle, APIs)
