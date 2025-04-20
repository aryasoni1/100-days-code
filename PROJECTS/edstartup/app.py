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

# Register route
@app.route('/register',methods=['GET','POST'])
def register():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        hashed=generate_password_hash(password)
        try:
            with sqlite3.connect('users.db') as conn:
                cursor = conn.cursor()
                cursor.execute('INSERT INTO users (username,password) VALUES (?,?)', (username,hashed))
                conn.commit()
                flash('Registration successful! Please login.', 'success')
                return redirect(url_for('login'))
        except sqlite3.IntegrityError:
            flash('Username already exists. Please choose a different username.', 'error')
            return redirect(url_for('register'))
    return render_template('register.html')

#Login route
@app.route('/login',methods=['GET','POST'])
def login():
    if request.method=='POST':
        username=request.form['username']
        password=request.form['password']
        with sqlite3.connect('users.db') as conn:
            cursor=conn.cursor()
            cursor.execute('Select password from users where username=?',(username,))
#What went wrong? In Python, (username) is just username in parentheses, not a one‑element tuple. The DB‑API expects a sequence, so always write (username,) for a single parameter 

            row= cursor.fetchone()
        if row and check_password_hash(row[0],password):
            session['username']=username
            flash('Logged in successfully ','success')
            return redirect(url_for('dashboard'))
        else:
            flash('Invalid credentials','error')
            return redirect(url_for('login'))
    return render_template('login.html')
#dashboard route
@app.route('/dashboard')
def dashboard():
    if 'username' in session:
        return render_template('dashboard.html',username=session['username'])
    else:
        flash('You are not logged in','error')
        return redirect(url_for('login'))
    
#logout route
@app.route('/logout')    
def logout():    
    session.pop('username',None)
    flash('You have been logged out','info')
    return redirect(url_for('login'))

            
