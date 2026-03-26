const revealItems = document.querySelectorAll(".reveal");
const metrics = document.querySelectorAll(".metric");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.18 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateMetric = (metric) => {
  const target = Number(metric.dataset.target) || 0;
  const suffix = metric.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    metric.textContent = `${value}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  };

  requestAnimationFrame(tick);
};

const metricObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateMetric(entry.target);
      metricObserver.unobserve(entry.target);
    });
  },
  { threshold: 0.5 }
);

metrics.forEach((metric) => metricObserver.observe(metric));

let currentSlide = 0;
let slideTimer;

const showSlide = (index) => {
  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === index);
  });

  dots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === index);
  });

  currentSlide = index;
};

const queueNextSlide = () => {
  clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    const nextSlide = (currentSlide + 1) % slides.length;
    showSlide(nextSlide);
  }, 4500);
};

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showSlide(Number(dot.dataset.slide));
    queueNextSlide();
  });
});

showSlide(0);
queueNextSlide();
