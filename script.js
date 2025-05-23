const twoDigits = num => num.toString().padStart(2, '0');
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
                    'July', 'August', 'September', 'October', 'November', 'December'];

    function getGreeting(hour) {
      if (hour >= 5 && hour < 12) return 'Good Morning';
      if (hour >= 12 && hour < 17) return 'Good Afternoon';
      if (hour >= 17 && hour < 21) return 'Good Evening';
      return 'Good Night';
    }

    function updateClock() {
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();

      document.getElementById('time').textContent = `${twoDigits(h)}:${twoDigits(m)}:${twoDigits(s)}`;

      const dateStr = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
      document.getElementById('date').textContent = dateStr;

      const dayStr = daysOfWeek[now.getDay()];
      document.getElementById('day').textContent = dayStr;

      document.getElementById('greeting').textContent = getGreeting(h);
    }

    updateClock();
    setInterval(updateClock, 1000);