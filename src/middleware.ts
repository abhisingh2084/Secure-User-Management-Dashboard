// src/middleware.ts
import { useAuthStore } from './store/authStore';

export const protectDashboard = (to: any, from: any, next: any) => {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated) {
    next('/dashboard');
  } else {
    next('/signin'); // Redirect to signin page if not authenticated
  }
};
