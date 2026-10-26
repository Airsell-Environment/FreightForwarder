const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
  const target = Number(counter.dataset.target);
  const suffix = target % 1 === 0 ? '' : '%';
  const duration = 1300;
  const start = performance.now();

  const step = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;

    if (target >= 10) {
      counter.textContent = value >= 10 ? `${value.toFixed(value % 1 === 0 ? 0 : 1)}${suffix}` : `${value.toFixed(1)}${suffix}`;
    } else {
      counter.textContent = `${value.toFixed(1)}${suffix}`;
    }

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      counter.textContent = `${target.toFixed(target % 1 === 0 ? 0 : 1)}${suffix}`;
    }
  };

  requestAnimationFrame(step);
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);

counters.forEach((counter) => observer.observe(counter));

document.getElementById('year').textContent = new Date().getFullYear();
