# 🔐MERN Auth System
ระบบ Authentication ที่สร้างด้วย MERN Stack

## 🌐Demo

## 📦Tech Stack
**Frontend**
- React 19 + Vite
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Axios
- React Router DOM v7
- Sonner (Toast notifications)
- Lucude React (Icons)
- Geist font

**Backend**
- Node.js + Express.js v5
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js
- Nodemailer + Handlebars (Email template)
- Yup (Validation)

## 🚀Features 
- ✅User Registration with validation
- ✅Email Verification 
- ✅Secure Login with Access & Refresh Tokens
- ✅Forgot Password & Reset Functionality
- ✅Change Password securely
- ✅Password Hashing with bcrypt.js
- ✅Authentication Middleware using JWT

## 🏁Getting Started
**1. Clone repository**
```bash
git clone https://github.com/your-username/mern-auth-system.git
cd mern-auth-system
```
**2. ติดตั้ง Backend**
```bash
cd backend
npm install
npm run dev
```
**3. ติดตั้ง Frontend**
```bash
cd frontend
npm install
npm run dev
```

## 👀Environment Variables
สร้างไฟล์ `.env` ใน `/backend`
```
PORT=8000
MONGO_URI=your_mongodb_uri
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_gmail_app_password
SECRET_KEY=your_jwt_secret
```
> ⚠️ ห้าม commit ไฟล์ `.env` ขึ้น GitHub เด็ดขาด

| Variable | คำอธิบาย |
|:----------:|----------|
| `PORT` | Port ที่ backend รัน |
| `MONGO_URI` | Connection string จาก MongoDB Atlas |
| `MAIL_USER` | Gmail ที่ใช้ส่ง OTP |
| `MAIL_PASS` | App Password จาก Gmail (ไม่ใช่รหัส Gmail ปกติ) |
| `SECRET_KEY` | Secret key สำหรับ JWT |

## 📌Planned Features
- 🚧UI หน้าหลัก
- Docker Support
- Google OAuth Login ด้วย Passport.js

## ✏️References
- [MERN Authentication Complete Guide | JWT, Email Verification, OTP, Forgot & Change Password](https://www.youtube.com/watch?v=-L6bcjnRIfU) by [
Webelite Builders]
