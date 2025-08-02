# 🎓 Full Stack Intern Fundraising Portal

A simple intern dashboard built with **React (Frontend)** and **Django REST API (Backend)** for the Full Stack Developer Internship Round 1 Task.

---

## 🌟 Features

![Login page](https://drive.google.com/file/d/1ibtD5-7rWvQEyrqU9aDp-TxDmyyBrZ8K/view)
![Dashboard](https://drive.google.com/file/d/1iej5IzynFZLcnjfzITvgr_g3ugoqzosG/view)



### ✅ Frontend (React)
- 🔐 Dummy Login Page (no authentication)
- 📊 Dashboard displaying:
  - Intern Name
  - Referral Code 
  - Total Donations Raised (from backend)
  - Static Rewards/Unlockables section

### ✅ Backend (Django)
- Simple Django api
- JSON endpoint with name, referral code, and donation amount
- CORS enabled for local frontend-backend connection

---

## 🔧 Tech Stack

- **Frontend**: React (Create React App), CSS
- **Backend**: Django

---


---

## 🛠 Local Setup Instructions

### 1. Clone the Repository
### 2.backend setup


```bash
git clone https://github.com/yourusername/intern-portal.git
cd backend
venv\Scripts\activatepip
cd intern-portal
pip install -r requirements.txt
venv\Scripts\activate
python manage.py runserver

### 3.frontend setup

cd frontend
cd intern-frontend
npm install
npm start
