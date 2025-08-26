"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  name?: string;
  email: string;
  image?: string;
}

interface CourseProgress {
  courseId: string;
  courseName: string;
  courseSlug: string;
  courseImage: string;
  instructorNames: string[];
  enrolledDate: string;
  lastAccessedDate?: string;
  progressPercentage: number;
  completedModules: string[];
  totalModules: number;
  totalHours: number;
  currentModule?: string;
  completed: boolean;
  completedDate?: string;
  certificateId?: string;
}

interface PurchaseRecord {
  id: string;
  date: string;
  courseIds: string[];
  amount: number;
  paymentMethod: string;
  status: 'completed' | 'pending' | 'failed';
}

interface CourseReview {
  id: string;
  courseId: string;
  courseName: string;
  rating: number;
  comment: string;
  date: string;
  helpfulVotes: number;
}

interface WishlistItem {
  courseId: string;
  courseName: string;
  courseSlug: string;
  courseImage: string;
  instructorNames: string[];
  price: string;
  addedDate: string;
}

interface AuthContextType {
  user: User | null;
  isLoggedIn: boolean;
  login: (userData: User) => void;
  emailLogin: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  googleLogin: () => Promise<void>;
  
  // Course enrollment and progress
  enrolledCourses: CourseProgress[];
  enrollInCourse: (courseData: {
    courseId: string;
    courseName: string;
    courseSlug: string;
    courseImage: string;
    instructorNames: string[];
    totalModules: number;
    totalHours: number;
  }) => void;
  updateCourseProgress: (courseId: string, updates: Partial<CourseProgress>) => void;
  completeCourse: (courseId: string) => void;
  
  // Purchase history
  purchaseHistory: PurchaseRecord[];
  addPurchaseRecord: (purchase: Omit<PurchaseRecord, 'id'>) => void;
  
  // Reviews
  courseReviews: CourseReview[];
  addCourseReview: (review: Omit<CourseReview, 'id'>) => void;
  updateCourseReview: (reviewId: string, updates: Partial<CourseReview>) => void;
  deleteCourseReview: (reviewId: string) => void;
  
  // Wishlist
  wishlist: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (courseId: string) => void;
  isInWishlist: (courseId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Temporary user storage - in production this would be in a database
const TEMP_USERS = [
  {
    email: "pyee.1104@gmail.com",
    password: "Abc123456#",
    name: "Pei Yee",
    image: undefined,
  },
  {
    email: "jenna.tan@propertylimbrothers.com",
    password: "Abc123456#",
    name: "Jenna Tan",
    image: undefined,
  },
  {
    email: "blurryorr@gmail.com",
    password: "Abc123456#",
    name: "Blurry Orr",
    image: undefined,
  },
];

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enrolledCourses, setEnrolledCourses] = useState<CourseProgress[]>([]);
  const [purchaseHistory, setPurchaseHistory] = useState<PurchaseRecord[]>([]);
  const [courseReviews, setCourseReviews] = useState<CourseReview[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);

  // Load user data and learning data from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedUser = localStorage.getItem('user');
      const savedEnrollments = localStorage.getItem('enrolledCourses');
      const savedPurchases = localStorage.getItem('purchaseHistory');
      const savedReviews = localStorage.getItem('courseReviews');
      const savedWishlist = localStorage.getItem('wishlist');
      
      if (savedUser) {
        const userData = JSON.parse(savedUser);
        setUser(userData);
        setIsLoggedIn(true);
      }
      
      if (savedEnrollments) {
        setEnrolledCourses(JSON.parse(savedEnrollments));
      }
      
      if (savedPurchases) {
        setPurchaseHistory(JSON.parse(savedPurchases));
      }
      
      if (savedReviews) {
        setCourseReviews(JSON.parse(savedReviews));
      }
      
      if (savedWishlist) {
        setWishlist(JSON.parse(savedWishlist));
      }
    }
  }, []);

  // Save learning data to localStorage whenever it changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoggedIn) {
      localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
    }
  }, [enrolledCourses, isLoggedIn]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isLoggedIn) {
      localStorage.setItem('purchaseHistory', JSON.stringify(purchaseHistory));
    }
  }, [purchaseHistory, isLoggedIn]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isLoggedIn) {
      localStorage.setItem('courseReviews', JSON.stringify(courseReviews));
    }
  }, [courseReviews, isLoggedIn]);

  useEffect(() => {
    if (typeof window !== 'undefined' && isLoggedIn) {
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
    }
  }, [wishlist, isLoggedIn]);

  const login = (userData: User) => {
    setUser(userData);
    setIsLoggedIn(true);
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(userData));
    }
  };

  const logout = () => {
    setUser(null);
    setIsLoggedIn(false);
    if (typeof window !== 'undefined') {
      localStorage.removeItem('user');
      localStorage.removeItem('enrolledCourses');
      localStorage.removeItem('purchaseHistory');
      localStorage.removeItem('courseReviews');
      localStorage.removeItem('wishlist');
    }
    // Clear state
    setEnrolledCourses([]);
    setPurchaseHistory([]);
    setCourseReviews([]);
    setWishlist([]);
  };

  const googleLogin = async () => {
    try {
      // Mock Google login for demo
      const mockUser: User = {
        id: 'google_' + Date.now(),
        name: 'Pei Yee',
        email: 'pyee.1104@gmail.com',
        image: 'https://via.placeholder.com/150',
      };
      login(mockUser);
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    }
  };

  // Course enrollment and progress functions
  const enrollInCourse = (courseData: {
    courseId: string;
    courseName: string;
    courseSlug: string;
    courseImage: string;
    instructorNames: string[];
    totalModules: number;
    totalHours: number;
  }) => {
    // Check if already enrolled
    const existingEnrollment = enrolledCourses.find(
      course => course.courseId === courseData.courseId
    );
    
    if (existingEnrollment) {
      console.log('Already enrolled in this course');
      return;
    }

    const newEnrollment: CourseProgress = {
      courseId: courseData.courseId,
      courseName: courseData.courseName,
      courseSlug: courseData.courseSlug,
      courseImage: courseData.courseImage,
      instructorNames: courseData.instructorNames,
      enrolledDate: new Date().toISOString(),
      progressPercentage: 0,
      completedModules: [],
      totalModules: courseData.totalModules,
      totalHours: courseData.totalHours,
      completed: false,
    };

    setEnrolledCourses(prev => [...prev, newEnrollment]);
  };

  const updateCourseProgress = (courseId: string, updates: Partial<CourseProgress>) => {
    setEnrolledCourses(prev => 
      prev.map(course => 
        course.courseId === courseId 
          ? { 
              ...course, 
              ...updates, 
              lastAccessedDate: new Date().toISOString() 
            }
          : course
      )
    );
  };

  const completeCourse = (courseId: string) => {
    setEnrolledCourses(prev => 
      prev.map(course => 
        course.courseId === courseId 
          ? { 
              ...course, 
              progressPercentage: 100,
              completed: true,
              completedDate: new Date().toISOString(),
              certificateId: `cert_${courseId}_${Date.now()}`
            }
          : course
      )
    );
  };

  // Purchase history functions
  const addPurchaseRecord = (purchase: Omit<PurchaseRecord, 'id'>) => {
    const newPurchase: PurchaseRecord = {
      ...purchase,
      id: `purchase_${Date.now()}`
    };
    setPurchaseHistory(prev => [newPurchase, ...prev]);
  };

  // Review functions
  const addCourseReview = (review: Omit<CourseReview, 'id'>) => {
    const newReview: CourseReview = {
      ...review,
      id: `review_${Date.now()}`,
      helpfulVotes: 0
    };
    setCourseReviews(prev => [newReview, ...prev]);
  };

  const updateCourseReview = (reviewId: string, updates: Partial<CourseReview>) => {
    setCourseReviews(prev => 
      prev.map(review => 
        review.id === reviewId ? { ...review, ...updates } : review
      )
    );
  };

  const deleteCourseReview = (reviewId: string) => {
    setCourseReviews(prev => prev.filter(review => review.id !== reviewId));
  };

  // Wishlist functions
  const addToWishlist = (item: WishlistItem) => {
    const existingItem = wishlist.find(w => w.courseId === item.courseId);
    if (!existingItem) {
      setWishlist(prev => [...prev, { ...item, addedDate: new Date().toISOString() }]);
    }
  };

  const removeFromWishlist = (courseId: string) => {
    setWishlist(prev => prev.filter(item => item.courseId !== courseId));
  };

  const isInWishlist = (courseId: string) => {
    return wishlist.some(item => item.courseId === courseId);
  };

  const value: AuthContextType = {
    user,
    isLoggedIn,
    login,
    logout,
    googleLogin,
    enrolledCourses,
    enrollInCourse,
    updateCourseProgress,
    completeCourse,
    purchaseHistory,
    addPurchaseRecord,
    courseReviews,
    addCourseReview,
    updateCourseReview,
    deleteCourseReview,
    wishlist,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
