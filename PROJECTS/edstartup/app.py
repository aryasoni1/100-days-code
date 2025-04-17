from flask import Flask, render_template, request, redirect, url_for,session, flash
import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Database connection
def init_db():
    '''create `users` table if it doesn't exist'''
    with sqlite3.connect('users.db') as conn:
        cursor=conn.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                username TEXT NOT NULL,
                password TEXT NOT NULL
            )
        ''')
        conn.commit()

# Initialize the database
init_db()

# Home route
