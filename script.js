// اختر جميع العناصر التي تحتوي على الحركات
const animatedElements = document.querySelectorAll('.animated');

// وظيفة التحقق من ظهور العناصر في نافذة العرض
function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom >= 0;
}

// وظيفة إضافة الحركات للعناصر الظاهرة
function handleScroll() {
    animatedElements.forEach((el) => {
        if (isVisible(el)) {
            el.classList.add('show');
        }
    });
}

// تشغيل الحركات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', handleScroll);

// تشغيل الحركات عند التمرير
window.addEventListener('scroll', handleScroll);
