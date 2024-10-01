import useAuthStore from '@/store/authStore';

export const useAuth = () => {
  const { isAuthenticated, login, logout } = useAuthStore();
};
