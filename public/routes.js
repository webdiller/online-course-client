export const routes = {
  main: () => [
    {
      route: '/',
      pageName: 'Главная'
    }
  ],
  login: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/auth/login',
      pageName: 'Вход'
    }
  ],
  registration: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/auth/registration',
      pageName: 'Регисрация'
    }
  ],
  forgot: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/auth/forgot',
      pageName: 'Восстановление аккаунта'
    }
  ],
  activateAccount: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/auth/activateLinkByEmail',
      pageName: 'Активация'
    }
  ],
  resetPassword: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/auth/resetEmailPassword',
      pageName: 'Сброс пароля'
    }
  ],
  success: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/auth/success',
      pageName: 'Подтверждение аккаунта'
    }
  ],
  catalogPremierePro: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/catalog/premiere-pro',
      pageName: 'Курсы Premiere Pro'
    }
  ],
  catalogAfterEffects: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/catalog/after-effects',
      pageName: 'Курсы After Effects'
    }
  ],
  catalogDavinchi: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/catalog/davinci-resolve',
      pageName: 'Курсы цветокоррекции Davinci Resolve'
    }
  ],
  productPage: (productId, productName) => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: `/product/${productId}`,
      pageName: productName
    }
  ],
  cainetMain: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/cabinet',
      pageName: 'Личный кабинет'
    }
  ],
  cainetWallet: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/wallet',
      pageName: 'Кошелек'
    }
  ],
  cainetCart: () => [
    {
      route: '/',
      pageName: 'Главная'
    },
    {
      route: '/cabinet/cart',
      pageName: 'Мои курсы'
    }
  ],
}
