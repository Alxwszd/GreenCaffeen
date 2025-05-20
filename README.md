# Reusable Cups System

A mobile-friendly web application for managing reusable cups on campus. This system allows users to borrow and return cups at various locations around the university.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Prerequisites](#prerequisites)
4. [Installation Guide](#installation-guide)
5. [Running the Application](#running-the-application)
6. [Accessing on Mobile Devices](#accessing-on-mobile-devices)
7. [Using the Application](#using-the-application)
8. [Troubleshooting](#troubleshooting)
9. [Project Structure](#project-structure)

## Overview

This application provides a user-friendly interface for the university's reusable cups system. It allows students and staff to borrow cups from various locations on campus and return them when they're done. The system is designed to be mobile-friendly, making it easy to use on smartphones.

## Features

- **User Authentication**: Secure login system
- **Borrow Cups**: Select a location, set a return time, and enable return reminders
- **Return Cups**: Return cups at convenient locations around campus
- **Location Map**: View a map of all available cup stations
- **Reminder System**: Get notified before your cup is due for return

## Prerequisites

Before you can run this application, you need to have the following software installed on your computer:

1. **Node.js** (version 14.0 or higher)
   - Node.js is a JavaScript runtime that allows you to run JavaScript on your computer
   - Download from: [https://nodejs.org/](https://nodejs.org/)
   - Choose the "LTS" (Long Term Support) version for the most stable experience

2. **npm** (Node Package Manager)
   - This comes automatically with Node.js
   - You can verify it's installed by opening a command prompt or terminal and typing: `npm -v`

## Installation Guide

Follow these steps to set up the application on your computer:

### Step 1: Download the Project

If you received the project as a ZIP file:
1. Extract the ZIP file to a location on your computer
2. Remember the location where you extracted the files

If you're using Git:
```
git clone [repository-url]
cd reusablecups_system
```

### Step 2: Install Dependencies

1. Open a command prompt (Windows) or terminal (Mac/Linux)
2. Navigate to the project folder:
   ```
   cd path/to/reusablecups_system/reusable-cups-app
   ```
   Replace "path/to" with the actual path where you extracted the files

3. Install the required packages:
   ```
   npm install
   ```
   This might take a few minutes to complete. It will download all the necessary libraries that the application needs to run.

## Running the Application

### Starting the Development Server

1. In the command prompt or terminal, make sure you're in the project directory:
   ```
   cd path/to/reusablecups_system/reusable-cups-app
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. You should see output similar to:
   ```
   VITE v6.x.x ready in xxx ms

   ➜  Local:   http://localhost:5173/
   ```

4. Open your web browser and navigate to:
   ```
   http://localhost:5173/
   ```

5. You should now see the login page of the application.

### Accessing on Mobile Devices

To access the application on your mobile device (while developing):

1. Make sure your computer and mobile device are connected to the same WiFi network

2. In the command prompt or terminal, start the server with the host option:
   ```
   npm run dev:host
   ```

3. You should see output similar to:
   ```
   VITE v6.x.x ready in xxx ms

   ➜  Local:   http://localhost:5173/
   ➜  Network: http://192.168.x.x:5173/
   ```

4. On your mobile device, open a web browser and enter the Network URL shown in the terminal (e.g., `http://192.168.x.x:5173/`)

## Using the Application

### Login

1. Use the following credentials to log in:
   - Username: `jzha0012`
   - Password: `123456`

### Borrowing a Cup

1. From the welcome screen, tap "Borrow a Cup"
2. You can tap "View Nearby Stations" to see a map of available stations
3. Select a borrow location from the dropdown menu
4. Set your return time using the date-time picker
5. Toggle "Enable Return Reminder" if you want to receive a reminder
6. Tap "Confirm Borrowing" to complete the process

### Returning a Cup

1. From the welcome screen, tap "Return a Cup"
2. You can tap "View Nearby Stations" to see a map of available stations
3. Select the return location from the dropdown menu
4. Tap "Continue"
5. Follow the on-screen instructions to place the cup in the return slot
6. Tap "Complete Return" to finish the process

## Troubleshooting

### Application Won't Start

If you see an error when trying to start the application:

1. Make sure you're in the correct directory (`reusable-cups-app`)
2. Try installing the dependencies again: `npm install`
3. Check if Node.js is properly installed: `node -v`

### Can't Access on Mobile

If you can't access the application on your mobile device:

1. Make sure your computer and mobile device are on the same WiFi network
2. Check if your computer's firewall is blocking the connection
3. Try using the IP address shown in the terminal output
4. If all else fails, you can still use the application on your computer's browser

### Login Issues

If you can't log in:
1. Make sure you're using the correct credentials: username `jzha0012` and password `123456`
2. Check if your browser has JavaScript enabled
3. Try clearing your browser cache and cookies

## Project Structure

For those interested in the technical details, here's an overview of the project structure:

- `src/` - Contains all the source code
  - `components/` - Reusable UI components
  - `pages/` - Main application pages
  - `App.jsx` - Main application component
  - `main.jsx` - Entry point of the application

The application is built using:
- React - A JavaScript library for building user interfaces
- Material UI - A popular React UI framework
- React Router - For navigation between pages
- Vite - A modern frontend build tool

---

For any additional questions or issues, please contact the development team.
