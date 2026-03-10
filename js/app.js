import { auth, db } from './firebase-config.js';
import { signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// التحقق من حالة المصادقة في كل صفحة (عدا login)
export function checkAuth() {
  auth.onAuthStateChanged((user) => {
    if (!user) {
      window.location.href = 'login.html';
    }
  });
}

// جلب بيانات المستخدم من Firestore
export async function getUserData(uid) {
  const userRef = doc(db, 'users', uid);
  const userSnap = await getDoc(userRef);
  if (userSnap.exists()) {
    return userSnap.data();
  } else {
    return null;
  }
}

// عرض اسم المستخدم والرصيد في الواجهة (إذا كانت العناصر موجودة)
export function displayUserInfo() {
  const userData = JSON.parse(sessionStorage.getItem('userData'));
  if (userData) {
    const userNameEl = document.querySelector('.user-name');
    if (userNameEl) userNameEl.textContent = userData.fullName || 'مستخدم';
    
    const balanceEl = document.querySelector('.balance-amount');
    if (balanceEl) balanceEl.innerHTML = `${userData.balance.toLocaleString()} <span>د.ع</span>`;
  }
}

// تسجيل الخروج
export async function logout() {
  try {
    await signOut(auth);
    sessionStorage.removeItem('userData');
    window.location.href = 'login.html';
  } catch (error) {
    console.error('خطأ في تسجيل الخروج', error);
  }
}
