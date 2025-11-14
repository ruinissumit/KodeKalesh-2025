🌍 Global Forest Fire Monitor

A lightweight, front-end-only web application that visualizes 100 manually-entered forest locations on an interactive world map and displays their static temperature values without using any external APIs. Built to run smoothly on any local Live Server setup.

🔥 Overview

The Global Forest Fire Monitor helps visualize potential fire-risk zones by plotting forests worldwide and highlighting those with temperatures above 50°C.
Forests exceeding this threshold appear in warning colors, making it easy to identify high-risk regions at a glance.

This project uses:

HTML, CSS, JavaScript

Leaflet.js for map visualization

Static dataset (100 forests manually added)

No APIs → fully offline & Live-Server ready

✨ Features

🌐 Worldwide interactive map with zoom and pan

🌲 100 manually-curated forest locations

🌡️ Static temperature values assigned to each forest

🔴 Fire-risk detection (temperatures > 50°C highlighted)

🖥️ Runs completely offline

🎨 Clean UI with soft animations

🏷️ “Developed by Z CODERS” branding

🧩 Perfect for demonstrations, college projects, and environmental simulations

📂 Project Structure
/project-folder
│── index.html
│── style.css
│── script.js
│── assets/
│    └── icons, images (optional)

🚀 How to Run Locally

Download or clone this repository:

git clone https://github.com/your-username/your-repo-name.git


Open the project folder in VS Code.

Install Live Server extension (if not already installed).

Right-click index.html → Open with Live Server.

The map loads instantly in your browser.

📊 Dataset – 100 Forest Entries

Manually curated dataset

Contains:

Forest name

Latitude & longitude

Temperature (static value)

Temperatures >50°C trigger alert styling

📸 Screenshot

(Add this after uploading to GitHub)

![Global Forest Fire Monitor Screenshot](screenshot.png)

🧠 How It Works

A static JavaScript array stores all 100 forest entries.

Each entry is plotted as a Leaflet marker.

Colors are assigned based on temperature:

🟢 Safe: below 50°C

🟠 Warning: equal to or above 50°C

Soft animations enhance user experience.

👨‍💻 Developed By

Z CODERS
A team of:

Data Collector

Programmer

Debugger
