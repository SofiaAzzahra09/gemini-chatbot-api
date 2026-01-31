# 🌌 Cosmic Buddy - AI Chatbot

Chatbot dengan AI yang responsif, interaktif, dan mendukung dua bahasa (Indonesia & Inggris). Dibangun dengan Google Gemini API untuk percakapan yang natural dan informatif.

## ✨ Fitur Utama

- 🤖 **AI-Powered Chat** - Menggunakan Google Gemini 2.5 Flash
- 🌍 **Bilingual Support** - Otomatis detect bahasa (Indonesia & Inggris)
- 💬 **Natural Conversation** - Tidak hanya koreksi, tapi bisa menjawab & mengobrol santai
- 📱 **Fully Responsive** - Optimal di desktop, tablet, dan mobile (320px - 1920px+)
- ✨ **Beautiful UI** - Theme cosmic dengan animasi yang menarik
- 💾 **Conversation History** - Menyimpan konteks percakapan untuk response yang lebih baik

## 🛠 Tech Stack

**Frontend:**
- HTML5
- CSS3 (dengan animasi & responsive design)
- Vanilla JavaScript

**Backend:**
- Node.js
- Express.js
- dotenv (untuk environment variables)
- CORS

**AI API:**
- Google Generative AI (Gemini 2.5 Flash)

## 📦 Installation

### 1. Clone atau Download Project
```bash
cd gemini-chatbot-api
```

### 2. Install Dependencies
```bash
npm install 
atau 
npm install dotenv @google/genai
```

### 3. Setup Environment Variables

Buat file `.env` di root folder:
```
GEMINI_API_KEY=your_api_key_here
```

**Cara mendapatkan API Key:**
1. Kunjungi [Google AI Studio](https://aistudio.google.com)
2. Login dengan Google account
3. Click "Create API Key"
4. Copy API key ke `.env`

### 4. Jalankan Server
```bash
node index.js
Pastikan muncul:
Server ready on http://localhost:3000
```

Server akan running di `http://localhost:3000`

## 🚀 Usage

1. Buka browser dan akses `http://localhost:3000`
2. Tunggu splash screen loading (4 detik)
3. Mulai chat dengan Cosmic Buddy!
4. Ketik pesan dalam Bahasa Indonesia atau Inggris
5. Chatbot akan otomatis membalas sesuai bahasa yang Anda gunakan

## 📁 Project Structure
```
gemini-chatbot-api/
├── index.js                 # Server & API logic
├── package.json            # Dependencies
├── .env                    # Environment variables (buat sendiri)
├── README.md               # Dokumentasi (file ini)
└── public/
    ├── index.html          # Main HTML
    ├── script.js           # Frontend logic & chat handler
    ├── style.css           # Styling & responsive design
```

### File Penjelasan

| File | Fungsi |
|------|--------|
| `index.js` | Server Express, handle POST `/api/chat`, kirim ke Gemini API |
| `public/index.html` | UI chatbot dengan splash screen |
| `public/script.js` | Handle form submission, manage conversation history |
| `public/style.css` | Styling & media queries untuk responsive |

## ⚙️ Environment Variables
```env
# Google Gemini API Key
GEMINI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxx
```


## 🎨 Responsive Breakpoints

- **Desktop** (1024px+) - Full layout
- **Tablet** (768px - 1024px) - Medium layout
- **Mobile** (480px - 768px) - Compact layout
- **Small Mobile** (320px - 480px) - Ultra compact

## 🔧 Customization

### Ubah Prompt Sistem
Edit `index.js`, bagian `systemInstruction`:
```javascript
systemInstruction: 'Kamu adalah... [custom instruction]'
```

## 🎯 Future Improvements
- [ ] Chat history persistence (localStorage)
- [ ] Dark/Light theme toggle
- [ ] Voice input/output
- [ ] Emoji reactions
- [ ] File upload support
- [ ] Multi-user chat

## 📄 License

MIT License - Free to use & modify

## 👨‍💻 Author
Sofia Azzahra Alamsyah
---

**Happy Chatting! 🚀**
