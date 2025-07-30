# 🌤️ Sky Cast — Your Personal Weather Companion

**🔗 Live App**: [Sky Cast](https://sky-cast-450.vercel.app)

> “Don’t let the weather surprise you — Sky Cast keeps you one step ahead.”

---

## 📌 Overview

Sky Cast is a modern weather forecast web app built using React. It allows users to get real-time and hourly weather information, including temperature, wind, humidity, sunrise/sunset, and more by entering any location.

---

## ✨ Key Highlights

- 🔍 **Global Location Search** – Get weather details for any city on the planet.
- 🌞 **Dynamic Day/Night UI** – Background adapts to sunrise/sunset.
- 🌡️ **Comprehensive Data** – Temperature (°C/°F), wind, pressure, humidity, visibility, UV index, and more.
- 🌄 **Astronomy Insights** – Sunrise, sunset, moonrise, and moonset times.
- ⏱️ **24-Hour Forecast** – Hourly breakdown with quick glance icons.
- 🌬️ **Animated Clouds** – Engaging cloud motion for an aesthetic edge.

---

## 🖥️ Tech Stack

| Area         | Tools Used                         |
|--------------|-------------------------------------|
| Frontend     | React, JavaScript, CSS             |
| API Service  | [WeatherAPI.com](https://weatherapi.com) |
| Deployment   | [Vercel](https://vercel.com)       |
| Assets       | Custom cloud images, animated via CSS |

---

## 🗂️ Folder Structure

```
sky-cast/
├── public/
│   ├── cloud1.png
│   ├── cloud2.png
│   ├── cloud3.png
│   └── cloud4.png
├── src/
│   ├── App.jsx          # Main UI component
│   ├── App.css          # Styling and animations
│   └── main.jsx         # Entry point
├── .env                 # API key (ignored by Git)
├── package.json         # Project metadata & scripts
└── README.md            # Project guide (you are here)
```

---

## 🔐 Environment Setup

Create a `.env` file in your project root with the following:

```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

📌 **Note**: Never expose your API key in public repositories.

---

## 🚀 Getting Started

1. **Clone the repo**:

```bash
git clone https://github.com/your-username/sky-cast.git
cd sky-cast
```

2. **Install dependencies**:

```bash
npm install
```

3. **Start development server**:

```bash
npm run dev
```

4. **Build for production**:

```bash
npm run build
```

---

## 🌈 Visual Preview

### ☀️ Day Mode

### 🌙 Night Mode

---

## ⚙️ Features Breakdown

| Feature            | Description |
|--------------------|-------------|
| Weather API        | Pulls real-time and forecasted weather data for any city |
| Dynamic Background | Shifts theme and layout based on time of day |
| Animated Clouds    | Cloud assets float using CSS `@keyframes` animation |
| Responsive Design  | Looks good on mobile, tablet, and desktop |
| Hourly Forecast    | Scrollable weather cards for next 24 hours |

---

## 🌐 Deployment

Hosted via Vercel with GitHub integration. For deployment:

```bash
npm run build
```

Upload `dist/` or push to GitHub + link to Vercel.

---

## 👨‍💻 Developer

**Yeswanth Kumar Rallapilla**  
Frontend Developer | Full Stack Java Learner  
📬 rallapillayeswanth450@gmail.com

- 💼 [GitHub](https://github.com/Yeshu450)


---

## 📝 License

This project is licensed under the [MIT License](LICENSE).

> Weather with style. Powered by data. Built with passion.
