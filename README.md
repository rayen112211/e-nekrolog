<div align="center">

![e-Nekrolog Banner](/.github/banner.png)

# 🕯️ e-Nekrolog - Digital Memorial Platform

**A modern, elegant platform for creating and sharing digital obituaries and memorial pages**

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.110-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.5-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)

[🚀 Quick Start](#-quick-start) • [✨ Features](#-features) • [🛠️ Tech Stack](#️-tech-stack) • [📖 Documentation](#-documentation)

</div>

---

## 📋 About

**e-Nekrolog** is a comprehensive digital memorial platform that enables families and funeral homes to create beautiful, personalized obituaries and memorial pages. With an intuitive step-by-step creator, multiple elegant themes, and powerful features like RSVP management, virtual candles, and anniversary reminders, e-Nekrolog brings memorial services into the digital age.

### Why e-Nekrolog?

✅ **Simple & Elegant** - 4 beautiful themes to choose from  
✅ **Self-Service** - Families create everything themselves  
✅ **B2B Ready** - Funeral homes can add their branding  
✅ **RSVP Management** - Track attendance for memorial services  
✅ **Modern UX** - Step-by-step form with progress tracking  
✅ **Bilingual** - Full Polish and English support

---

## ✨ Features

### 🎨 **4 Beautiful Themes**

Choose from professionally designed themes that change colors, backgrounds, and overall aesthetics:

1. **🌹 Classic Elegant** - Cream and gold with floral ornaments
2. **⚪ Modern Minimalist** - Clean white with blue accents
3. **🌸 Flower Garden** - Pastel watercolors with delicate flowers
4. **☁️ Peaceful Sky** - Blue sky gradient with dove motif

### 📝 **Intuitive Creator**

4-step guided process with progress tracking:
- **Step 1:** Personal details of the deceased
- **Step 2:** Funeral and reception information (with RSVP toggle)
- **Step 3:** Funeral home branding (optional B2B feature)
- **Step 4:** Theme selection

### 🕯️ **Interactive Memorial Features**

- **Virtual Candles** - Light a candle with live counter
- **Condolences** - Leave messages and memories
- **Photo Gallery** - Share cherished moments
- **Biography** - Tell their life story
- **RSVP System** - Manage attendance for services
- **Calendar Integration** - Add events to personal calendars
- **Anniversary Reminders** - Email notifications for important dates
- **Social Sharing** - Easy link sharing

### 🏢 **B2B Capabilities**

- **Funeral Home Branding** - Upload logos and custom branding
- **White-Label Ready** - Customize for your business
- **Client Management** - Track all created memorials

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **Python** 3.8+ (for backend)
- **MongoDB** (optional for full functionality)

### ⚡ **Fastest Method - Double Click**

1. Find `START_PROTOTYPE.bat` in the root directory
2. Double-click the file
3. Browser will open automatically at `http://localhost:3000`

That's it! 🎉

### 🖥️ **Manual Setup**

#### Frontend (React)

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (use legacy peer deps if needed)
npm install --legacy-peer-deps

# Start development server
npm start

# Browser opens at http://localhost:3000
```

#### Backend (FastAPI) - Optional

```bash
# Navigate to backend directory
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# Linux/Mac:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn server:app --reload

# API runs at http://localhost:8000
```

---

## 🛠️ Tech Stack

### Frontend
- **React 19** - UI framework
- **React Router 7** - Navigation
- **TailwindCSS 3.4** - Styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **React Hook Form + Zod** - Form management and validation
- **Axios** - HTTP client

### Backend
- **FastAPI 0.110** - Python web framework
- **MongoDB** - Database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation
- **PyJWT** - Authentication
- **Bcrypt** - Password hashing

### Development Tools
- **CRACO** - Create React App Configuration Override
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Pytest** - Backend testing

---

## 📁 Project Structure

```
funrual-website-main/
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── context/         # React context providers
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions
│   │   ├── data/            # Static data
│   │   └── translations.js  # Bilingual content
│   ├── public/              # Static assets
│   └── package.json         # Frontend dependencies
│
├── backend/                  # FastAPI application
│   ├── server.py            # Main API server
│   └── requirements.txt     # Python dependencies
│
├── START_PROTOTYPE.bat      # Quick start script
├── JAK_URUCHOMIC.md        # Polish setup guide
└── README.md               # You are here!
```

---

## 📖 Documentation

### Key Routes

- **Home:** `http://localhost:3000/`
- **Create Memorial:** `http://localhost:3000/create-nekrolog`
- **View e-Nekrolog:** `http://localhost:3000/e-nekrolog`
- **Memorial Card:** `http://localhost:3000/karta-pamieci`

### Environment Variables

Create a `.env` file in the frontend directory:

```env
REACT_APP_API_URL=http://localhost:8000
REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_key
```

For backend, create `.env` in backend directory:

```env
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret
```

---

## 🎨 Theme Customization

Each theme dynamically applies:
- Background gradients
- Text colors
- Button styles
- Border colors
- Icons and accents

Themes are configured in `src/data/themes.js` and applied via React context.

---

## 🐛 Troubleshooting

### "npm is not recognized"
- Install Node.js from [nodejs.org](https://nodejs.org/)
- Restart your terminal/CMD

### Port 3000 is already in use
- Close other applications using port 3000
- Or choose a different port when prompted

### Installation errors
```bash
npm install --legacy-peer-deps
```

### Page not loading
1. Check for "Compiled successfully!" in terminal
2. Refresh browser (Ctrl + F5)
3. Clear browser cache

---

## 🚀 Deployment to GitHub

### Step 1: Initialize Git Repository

```bash
# Navigate to project root
cd c:\Users\azizi\Downloads\funrual-website-main

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: e-Nekrolog digital memorial platform"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com/) and sign in
2. Click the **+** icon in top right → **New repository**
3. Name it: `e-nekrolog` (or your preferred name)
4. **Don't** initialize with README (you already have one)
5. Click **Create repository**

### Step 3: Connect and Push

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/e-nekrolog.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Add Banner Image (Optional)

```bash
# Create .github directory
mkdir .github

# Copy your generated banner to .github/banner.png
# Then commit and push:
git add .github/banner.png
git commit -m "Add repository banner"
git push
```

---

## 📄 License

This project is proprietary software. All rights reserved.

---

## 👨‍💻 Author

**Azizi**

- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)

---

## 🙏 Acknowledgments

- Built with modern web technologies
- Designed for dignity and respect
- Created with ❤️ for families and funeral homes

---

<div align="center">

**Made with 🕯️ for honoring memories**

[⬆ Back to Top](#️-e-nekrolog---digital-memorial-platform)

</div>
