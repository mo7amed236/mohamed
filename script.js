document.addEventListener('DOMContentLoaded', function () {
    // تأثير الضغط على الأزرار
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('mousedown', function () {
            this.style.transform = 'scale(0.98)';
        });

        button.addEventListener('mouseup', function () {
            this.style.transform = '';
        });

        button.addEventListener('mouseleave', function () {
            this.style.transform = '';
        });
    });

    // تأثير متابعة المؤشر للصورة الشخصية
    const profilePic = document.querySelector('.profile-pic');
    const container = document.querySelector('.bio-container');

    container.addEventListener('mousemove', function (e) {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const moveX = (x - centerX) / 25;
        const moveY = (y - centerY) / 25;

        profilePic.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });

    container.addEventListener('mouseleave', function () {
        profilePic.style.transform = 'translate(0, 0)';
    });

    // تأثير الضغط على زر الاتصال
    const callButton = document.querySelector('.call-button');
    callButton.addEventListener('mousedown', function () {
        this.style.transform = 'scale(0.9)';
    });

    callButton.addEventListener('mouseup', function () {
        this.style.transform = '';
    });

    callButton.addEventListener('mouseleave', function () {
        this.style.transform = '';
    });
});
