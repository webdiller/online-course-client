import create from 'zustand'

import AuthService from 'services/AuthService';
import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useAuthStore = create((set, get) => ({

  isAuth: false,
  authSet: (condition) => set(state => ({ isAuth: condition })),

  isAuthLoading: true,
  authLoadingSet: (condition) => set(state => ({ isAuthLoading: condition })),

  userId: "",
  userIdSet: (value) => set(state => ({ userId: value })),

  basketId: "",
  basketIdSet: (value) => set(state => ({ basketId: value })),

  userEmail: "",
  userEmailSet: (value) => set(state => ({ userEmail: value })),

}))

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  mountStoreDevtool('Auth', useAuthStore);
}