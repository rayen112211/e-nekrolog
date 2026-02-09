@echo off
echo ========================================
echo   E-Nekrolog Prototype - Quick Start
echo ========================================
echo.
echo Starting the development server...
echo.
cd /d "%~dp0frontend"
echo Current directory: %CD%
echo.
echo Installing dependencies (this may take a minute)...
call npm install --legacy-peer-deps
echo.
echo Starting server...
echo The app will open in your browser at http://localhost:3000
echo.
call npm start
pause
