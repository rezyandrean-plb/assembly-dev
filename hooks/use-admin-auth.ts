import { useAuth } from "@/context/auth-context"

export function useAdminAuth() {
  const { user, isLoggedIn } = useAuth()
  
  // Check if user is admin based on role or email
  const isAdmin = isLoggedIn && user && (
    user.role === 'admin' || 
    user.role === 'administrator' ||
    user.email?.includes('admin') ||
    user.email === 'admin@assembly.com'
  )
  
  return {
    isAdmin,
    isLoggedIn,
    user
  }
} 