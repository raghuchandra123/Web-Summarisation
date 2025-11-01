# 🧠 Summarise AI - Chrome Extension

## 🚀 Live Demo
🎥 **Watch it in action:** [Working demo of Summarise AI](https://drive.google.com/file/d/1DhezEXf-Rn50oEkolqnpi9ZC8huDGSDO/view?usp=sharing)

This short demo shows how the extension instantly summarizes any webpage using Google Chrome’s built-in on-device AI.  
It extracts clean article text, generates a concise summary, and presents it in an easy-to-read format — all in seconds.

---

## 🧠 Overview

**Summarise AI** is a Chrome extension that helps users quickly understand long web content.  
It uses Mozilla’s [Readability](https://github.com/mozilla/readability) library to extract the main text from any webpage and then applies [Chrome’s experimental Summarization API](https://developer.chrome.com/blog/august2024-summarization-ai), powered by Gemini Nano, to generate an on-device AI summary.  

All processing happens locally — ensuring privacy, speed, and offline availability.

---

## ⚙️ Running this Extension

1. Clone this repository  
2. Run `npm install` to install dependencies  
3. Run `npm run build` to generate the `dist` folder  
4. Open `chrome://extensions` in Chrome  
5. Enable **Developer mode**  
6. Click **Load unpacked** and select the `dist` directory  
7. Open any webpage and click the **Summarise AI** icon — a new tab will display your AI-generated summary  

---

## ✨ Features
- 🧾 Extracts clean article text using Readability  
- 🤖 Summarizes content using Chrome’s on-device AI (Gemini Nano)  
- ⚡ Works offline and preserves privacy  
- 🪶 Simple, lightweight UI for quick understanding  

---

## 🛠️ Built With
- [Chrome Extensions API](https://developer.chrome.com/docs/extensions)  
- [Readability Library](https://github.com/mozilla/readability)  
- [Gemini Nano (on-device AI)](https://developer.chrome.com/blog/august2024-summarization-ai)  
- [Rollup](https://rollupjs.org/) for bundling  

---

> © 2025 Summarise AI — built for the Google Chrome Built-in AI Challenge 2025.
