# 🚀 Sanbercode - Tugas Harian Automation Project

Project Automation Testing menggunakan Cypress yang mencakup:

- ✅ UI Automation (Login)
- ✅ Intercept Automation
- ✅ Page Object Model (POM)
- ✅ API Automation (Reqres)

---

## 🛠 Tech Stack

- Cypress
- Node.js
- JavaScript
- OrangeHRM Demo (https://opensource-demo.orangehrmlive.com/)
- Reqres API (https://reqres.in/)

---

# 📌 1. UI Automation - OrangeHRM

Website:
https://opensource-demo.orangehrmlive.com/

## 🔐 Test Case Login

TC01 - Login Berhasil  
- Input username valid  
- Input password valid  
- Klik Login  
- Verifikasi berhasil masuk Dashboard  

TC02 - Login Gagal (Password Salah)  
- Input username valid  
- Input password salah  
- Klik Login  
- Verifikasi error message muncul  

TC03 - Login Gagal (Username Kosong)  
- Username kosong  
- Password diisi  
- Klik Login  
- Verifikasi required field muncul  

TC04 - Login Gagal (Password Kosong)  
- Username diisi  
- Password kosong  
- Klik Login  
- Verifikasi required field muncul  

---

# 🔎 2. Intercept Automation

Menggunakan `cy.intercept()` untuk:

- Intercept login request  
- Validasi status code  
- Validasi response API login  
- Assertion response body  

🎯 Tujuan:
- Memastikan request & response sesuai expected result  
- Mengurangi ketergantungan penuh pada UI  

---

# 🧩 3. Page Object Model (POM)

Contoh file:
- loginPage.js  

Contoh method:
- inputUsername()  
- inputPassword()  
- clickLogin()  
- verifyRequiredField()  
- verifyLoginSuccess()  
- verifyLoginFailed()  

🎯 Tujuan:
- Memisahkan logic test dan locator  
- Membuat test lebih clean  
- Meningkatkan maintainability  
- Reusable component  

---

# 🌐 4. API Automation - Reqres

Base URL:
https://reqres.in/api  

📊 Total: 10 Test Case

TC01 - GET list users page 2  
TC02 - GET single user  
TC03 - GET user not found  
TC04 - POST create user  
TC05 - PUT update user  
TC06 - PATCH update user  
TC07 - DELETE user  
TC08 - POST register successful  
TC09 - POST login successful  
TC10 - POST login failed  

✅ Validasi meliputi:
- Status code  
- Response body  
- Response schema (optional)  
- Response time (optional)  

---

# ▶ Cara Menjalankan Project

1️⃣ Install dependency

npm install

2️⃣ Run Cypress (Interactive Mode)

npx cypress open

3️⃣ Run Cypress (Headless Mode)

npx cypress run

---

# 📂 Struktur Folder
cypress/  
├── e2e/  
│   ├── basic_login_automation/  
│   ├── basic_intercept_automation/  
│   ├── basic_pom_automation/  
│   └── api_automation/  
│  
├── fixtures/  
├── support/  
└── pageObjects/  

---

# 👤 Author

Nazhan Azka  
Automation Testing Project - Cypress  
Sanbercode