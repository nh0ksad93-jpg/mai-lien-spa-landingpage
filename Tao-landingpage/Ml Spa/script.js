document.addEventListener('DOMContentLoaded', () => {
    // Header background change on scroll
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.padding = '15px 0';
            header.style.background = 'rgba(255, 255, 255, 0.9)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission to Backend
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            const originalText = btn.innerText;

            btn.innerText = 'Đang gửi...';
            btn.disabled = true;

            const customerName = document.getElementById('customer-name').value;
            const customerPhone = document.getElementById('customer-phone').value;
            const customerService = document.getElementById('customer-service').value;

            // Link Google Apps Script Web App (Thay thế bằng link thực tế sau khi Deploy)
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzTWBiiHz-Np8uNaesvyeSW0RyoGxLFk96addXM9lB2esCwzHJm3gBuK06MI1OcpHYm/exec';

            const formData = new FormData();
            formData.append('name', customerName);
            formData.append('phone', customerPhone);
            formData.append('service', customerService);

            try {
                // Với Google Apps Script, phải dùng mode: 'no-cors' để tránh lỗi, hoặc gửi dạng FormData
                const response = await fetch(GOOGLE_SCRIPT_URL, {
                    method: 'POST',
                    body: formData
                });

                // Vì Google Apps Script trả về CORS mập mờ khi dùng fetch thông thường từ client
                // Thường chúng ta sẽ mặc định là thành công nếu fetch không ném ra lỗi mạng
                alert('Cảm ơn bạn đã đăng ký! Đội ngũ SeoulSpa.Vn sẽ liên hệ với bạn sớm nhất.');
                form.reset();

            } catch (error) {
                console.error('Error submitting form:', error);
                alert('Không thể kết nối đến máy chủ. Vui lòng thử lại sau.');
            } finally {
                btn.innerText = originalText;
                btn.disabled = false;
            }
        });
    }

    // Animation on scroll (Simple Reveal)
    const revealElements = document.querySelectorAll('.service-card, .section-title, .intro-text, .intro-image');

    const reveal = () => {
        revealElements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
    });

    window.addEventListener('scroll', reveal);
    reveal(); // Run once on load

    // Social Proof Popup Logic
    const bookingData = [
        { name: "Chị Lan", service: "Phun môi Collagen", time: "2 phút trước" },
        { name: "Anh Hoàng", service: "Điêu khắc chân mày 8D", time: "5 phút trước" },
        { name: "Chị Thảo", service: "Phun mày Ombre", time: "10 phút trước" },
        { name: "Chị Ngọc", service: "Phun mí mở tròng", time: "15 phút trước" },
        { name: "Chị Mai", service: "Dệt môi Collagen Cát Ái", time: "3 phút trước" }
    ];

    const notifPopup = document.getElementById('notification-popup');
    const notifName = notifPopup.querySelector('.customer-name');
    const notifService = notifPopup.querySelector('.service-name');
    const notifTime = notifPopup.querySelector('.time-ago');

    function showNotification() {
        const randomBooking = bookingData[Math.floor(Math.random() * bookingData.length)];

        notifName.innerText = randomBooking.name;
        notifService.innerText = randomBooking.service;
        notifTime.innerText = randomBooking.time;

        notifPopup.classList.add('active');

        setTimeout(() => {
            notifPopup.classList.remove('active');
        }, 5000); // Hide after 5 seconds
    }

    // Initial delay then repeat every 12 seconds
    setTimeout(() => {
        showNotification();
        setInterval(showNotification, 12000);
    }, 3000);

    // Image Lightbox Logic
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Select images that should be zoomable
    const zoomableImages = document.querySelectorAll('.service-img-slider img, .intro-image img, .aftercare-img img');

    zoomableImages.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            if (lightbox) {
                lightbox.classList.add('show');
                lightboxImg.src = this.src;
            }
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('show');
        });
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                lightbox.classList.remove('show');
            }
        });
    }
});
