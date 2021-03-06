const ptBR = {
  app: {
    title: 'Библиотека',
  },

  auth: {
    userDisabled: 'Ваша учетная запись отключена',
    userNotFound: `Извините, ваша учетная запись не найдена`,
    wrongPassword: `Извините, ваша учетная запись не найдена`,
    weakPassword: 'Этот пароль слишком слабый',
    emailAlreadyInUse: 'Данная электронная почта уже используется',
    invalidEmail: 'Пожалуйста, укажите действующий адрес электронной почты',
    passwordReset: {
      invalidToken:
        'Ссылка для сброса пароля недействительна или ее срое уже истек',
      error: `Электронная почта не найдена`,
    },
    emailAddressVerificationEmail: {
      invalidToken:
        'Ссылка для сброса пароля недействительна или ее срое уже истек',
      error: `Электронная почта не найдена`,
    },
  },

  iam: {
    errors: {
      userAlreadyExists: 'Пользователь с таким адресом электронной почты уже существует',
      userNotFound: 'Пользователь не найден',
      disablingHimself: `Вы не можете отключить себя`,
      revokingOwnPermission: `Вы не можете отозвать собственное разрешение библиотекаря`,
    },
  },

  importer: {
    errors: {
      invalidFileEmpty: 'Файл пуст',
      invalidFileExcel:
        'Разрешены только файлы Excel (.xlsx)',
      invalidFileUpload:
        'Неверный файл. Убедитесь, что вы используете последнюю версию шаблона.',
      importHashRequired: 'Требуются данные для импорта',
      importHashExistent: 'Данные уже инпортированы',
    },
  },

    errors: {
      forbidden: {
        message: 'Запрещено',
      },
      validation: {
        message: 'Произошла ошибка',
      },
    },

  emails: {
    invitation: {
      subject: `Вас пригласили на {0}`,
      body: `
        <p>Здравствуйте,</p>
        <p>Вас пригласили в {0}.</p>
        <p>Перейдите по этой ссылке, чтобы зарегистрироваться.</p>
        <p><a href="{1}">{1}</a></p>
        <p>Спасибо,</p>
        <p>Ваша команда {0}</p>
      `,
    },
    emailAddressVerification: {
      subject: `Подтвердите свой адресс электронной почты {0}`,
      body: `
        <p>Здравствуйте,</p>
        <p>Перейдите по этой ссылке, чтобы подтвердить свой адрес электронной почты.</p>
        <p><a href='{0}'>{0}</a></p>
        <p>Если вы не запрашивали подтверждение адреса электронной почты, игнорируйте это письмо.</p>
        <p>Спасибо,</p>
        <p>Ваша команда {1}</p>
      `,
    },
    passwordReset: {
      subject: `Сбросить пароль для {0}`,
      body: `
        <p>Здравствуйте,</p>
        <p>Перейдите по этой ссылке, чтобы сбросить пароль для аккаунта {0} com sua conta {1}.</p>
        <p><a href='{2}'>{2}</a></p>
        <p>Если вы не запрашивали изменение пароля, игнорируйте это письмо.</p>
        <p>Спасибо,</p>
        <p>Ваша команда {0}</p>
      `,
    },
  },
};

module.exports = ptBR;
