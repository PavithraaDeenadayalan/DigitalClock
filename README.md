# DigitalClock

A clean and responsive digital clock built using HTML, CSS, and JavaScript. It displays the current time, date, day of the week, and a contextual greeting based on the hour of the day. Perfect for your personal dashboard, productivity apps, or just for fun!

**Live Demo:** [Click here to view it](https://pavithraadeenadayalan.github.io/DigitalClock/)

## Features

- **Live Time** – Updates every second in real-time (HH:MM:SS format)
- **Dynamic Date** – Full date shown with month name
- **Day of the Week** – Automatically detects and displays the current day
- **Greeting Message** – Displays contextual greetings like "Good Morning", "Good Evening", etc.
- **Responsive Design** – Looks great on all screen sizes (desktop, tablet, mobile)
- **Dark Mode UI** – Sleek and modern dark-themed styling

## Preview

[Click here to view the image](https://github.com/PavithraaDeenadayalan/DigitalClock/blob/main/DigitalClock.png)

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML** | Page structure |
| **CSS** | Styling and responsiveness |
| **JavaScript** | Dynamic updates and greeting logic |

## How It Works

- Uses JavaScript's `Date` object to fetch real-time data
- Time is padded to always display two digits (00:00:00)
- Greeting changes dynamically:
  - **Morning** → 5 AM to 11:59 AM
  - **Afternoon** → 12 PM to 4:59 PM
  - **Evening** → 5 PM to 8:59 PM
  - **Night** → 9 PM to 4:59 AM
- `setInterval()` updates the time every second for smooth operation

## Project Structure

```
DigitalClock/
├── index.html   # Main HTML structure
├── style.css    # Styling and responsive layout
└── script.js    # Clock logic and real-time update
```

## Getting Started

You can clone this project and run it locally:

```bash
git clone https://github.com/pavithraadeenadayalan/DigitalClock.git
cd DigitalClock
```

Then open `index.html` in your browser, or just open `index.html` directly in your browser.

## Customization Ideas

Want to level it up? Try these:

- Add AM/PM support or 12-hour format toggle
- Include weather or location-based greetings
- Add sound effects for each second (tick-tock)
- Make it a browser extension or widget

## Contributing

Found a bug or want to suggest an enhancement? Pull requests are welcome! Let's build better, together.

## Author

**Pavithraa Deenadayalan**  
GitHub: [https://github.com/pavithraadeenadayalan](https://github.com/pavithraadeenadayalan)

Follow for more projects and tech experiments!

---

*Made with love ❤️*
