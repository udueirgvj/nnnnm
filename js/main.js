// مثال: إخفاء وإظهار الرصيد عند النقر على أيقونة العين
document.addEventListener('DOMContentLoaded', function() {
    const eyeIcon = document.querySelector('.balance-header i');
    const balanceAmount = document.querySelector('.balance-amount');

    if (eyeIcon && balanceAmount) {
        eyeIcon.addEventListener('click', function() {
            if (balanceAmount.style.filter === 'blur(5px)') {
                balanceAmount.style.filter = 'none';
                eyeIcon.classList.remove('fa-eye-slash');
                eyeIcon.classList.add('fa-eye');
            } else {
                balanceAmount.style.filter = 'blur(5px)';
                eyeIcon.classList.remove('fa-eye');
                eyeIcon.classList.add('fa-eye-slash');
            }
        });
    }
});

// يمكنك إضافة المزيد من الوظائف لاحقاً مثل:
// - التحقق من صحة النماذج في صفحات أخرى
// - محاكاة تسجيل الدخول (تخزين محلي)
// - عرض رسائل منبثقة
