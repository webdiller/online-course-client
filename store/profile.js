import UserService from 'services/UserService'
import create from 'zustand'

import { mountStoreDevtool } from 'simple-zustand-devtools';

export const useProfileStore = create((set, get) => ({

  userLoading: true,
  userId: "",
  userName: "",
  userEmail: "",
  userPhone: "",
  userCurrentPassword: "",
  userNewPassword: "",
  userCart: [],
  userBalance: 0,
  basket: null,

  userLoadingSet: (value) => set(state => ({ userLoading: value })),
  userIdSet: (value) => set(state => ({ userId: value })),
  userNameSet: (value) => set(state => ({ userName: value })),
  userEmailSet: (value) => set(state => ({ userEmail: value })),
  userCurrentPasswordSet: (value) => set(state => ({ userCurrentPassword: value })),
  userNewPasswordSet: (value) => set(state => ({ userNewPassword: value })),
  userPhoneSet: (value) => set(state => ({ userPhone: value })),
  userBalanceSet: (value) => set(state => ({ userBalance: value })),

  getProfile: async (userId) => {
    if (userId) {
      const { data, status } = await UserService.getProfile(userId);
      if (status === 200) {

        const {
          id,
          name,
          email,
          password,
          createdAt,
          updatedAt,
          phone,
          basket,
          balance,
        } = data;

        set({ userName: name })
        set({ userEmail: email })
        set({ userPhone: phone })
        set({ userBalance: balance })

        if (basket) {
          set({ basket })
        }
      }
    }
  },

  updateInfo: async (e, userId) => {
    if (userId) {
      e.preventDefault();
      try {
        const { data, status } = await UserService.updateInfo({
          id: userId,
          name: get().userName,
          phone: get().userPhone,
        });
        if (status === 200) {
          alert('Успешно обновлены данные')
        } else {
          alert('Ошибка при обновлении данных')
        }
      } catch (error) {
        alert('Ошибка при обновлении данных')
      }
    }
  },

  updateBalance: async (e, userId, balance) => {
    e.preventDefault()

    if (balance <= 499) {
      alert('Минимальная сумма пополнения: 500 руб.')
      return
    }

    if (userId) {
      try {
        const { data: { balance: responseBalance }, status } = await UserService.updateBalance(userId, balance);
        alert(`Успешно добавлено ${responseBalance} руб.`)
        set({ userBalance: responseBalance })
      } catch (error) {
        console.log(error);
      }
    }
  },

  resetPassword: async (e, userId) => {
    e.preventDefault();
    if (get().userCurrentPassword && get().userNewPassword) {
      try {
        const { data, status } = await UserService.resetPassword({
          id: userId,
          currentPassword: get().userCurrentPassword,
          newPassword: get().userNewPassword,
        });
        if (status === 200) {
          alert(`Успешно обновлены данные`)
          e.target.reset()
        } else {
          alert('Ошибка при обновлении данных')
        }
      } catch (error) {
        alert('Ошибка при обновлении данных')
      }
    }
  },

}))

if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  mountStoreDevtool('Profile', useProfileStore);
}