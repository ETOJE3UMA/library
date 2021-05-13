const ptBR = {
  common: {
    or: 'или', //?
    cancel: 'Отмена',
    reset: 'Очистить',
    save: 'Сохранить',
    search: 'Поиск',
    edit: 'Изменить',
    remove: 'Удалить',
    new: 'Добавить',
    export: 'Экспорт в Excel',
    noDataToExport: 'Нет данных для экспорта',
    import: 'Импорт',
    discard: 'Сбросить',
    yes: 'Да',
    no: 'Нет',
    pause: 'Пауза',
    areYouSure: 'Вы уверены?',
    view: 'Просмотр',
    destroy: 'Удалить',
    mustSelectARow: 'Выбрать строку',
    confirm: 'Подтвердить',
  },

  app: {
    title: 'Библиотека',
  },

  entities: {
    loan: {
      name: 'Выдача',
      label: 'Выдачи',
      menu: 'Выдачи',
      exporterFileName: 'Экспортировать выдачу',
      list: {
        menu: 'Выдачи',
        title: 'Выдачи',
      },
      create: {
        success: 'Выдача успешно сохранена',
      },
      update: {
        success: 'Выдача успешно сохранена',
      },
      destroy: {
        success: 'Выдача успешно удалена',
      },
      destroyAll: {
        success: 'Выдача(и) успешно удалена(ы)',
      },
      edit: {
        title: 'Редактировать выдачу',
      },
      fields: {
        id: 'Id',
        'book': 'Книга',
        'member': 'Читатель',
        'issueDateRange': 'Дата выдачи',
        'issueDate': 'Дата выдачи',
        'dueDateRange': 'План возврата',
        'dueDate': 'План возврата',
        'returnDateRange': 'Дата возврата',
        'returnDate': 'Дата возврата',
        'status': 'Статус',
        createdAt: 'Создано в',
        updatedAt: 'Обновлено в',
        createdAtRange: 'Создано в',
      },
      enumerators: {
        'status': {
          'inProgress': 'Выдана',
          'overdue': 'Просрочена',
          'closed': 'Возвращена',
        },
      },
      new: {
        title: 'Новая выдача',
      },
      view: {
        title: 'Просмотреть выдачу',
      },
      importer: {
        title: 'Импортировать выдачу',
        fileName: 'шаблон импорта выдачи',
        hint:
          'Файлы/изображения дожны быть URL-адресами файлов, разделенные пробелом.',
      },
      validation: {
        bookOutOfStock: 'Извините. Этой книги нет в наличии.'
      }
    },

    book: {
      name: 'Книга',
      label: 'Книги',
      menu: 'Книги',
      exporterFileName: 'Экспорт книги',
      list: {
        menu: 'Книги',
        title: 'Книги',
      },
      create: {
        success: 'Книга успешно сохранена',
      },
      update: {
        success: 'Книга успешно сохранена',
      },
      destroy: {
        success: 'Книга успешно удалена',
      },
      destroyAll: {
        success: 'Книга(и) успешно удалена(ы)',
      },
      edit: {
        title: 'Редактировать книгу',
      },
      fields: {
        id: 'Id',
        'isbn': 'ISBN',
        'title': 'Название',
        'author': 'Автор',
        'numberOfCopiesRange': 'Количество экземпляров',
        'numberOfCopies': 'Количество экземпляров',
        'stockRange': 'Осталось',
        'stock': 'Осталось',
        'images': 'Изображение',
        'status': 'Статус',
        createdAt: 'Создано',
        updatedAt: 'Обновлено',
        createdAtRange: 'Создано',
      },
      enumerators: {
        'status': {
          'available': 'Доступна',
          'unavailable': 'Недоступна',
        },
      },
      new: {
        title: 'Новая книга',
      },
      view: {
        title: 'Просмотр книги',
      },
      importer: {
        title: 'Импортировать книги',
        fileName: 'шаблон импорта книги',
        hint:
          'Файлы/изображения должны быть URL-адресами, разделенные пробелом. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Редактировать профиль',
      success: 'Информация изменена',
    },
    createAnAccount: 'Создать учетную запись',
    rememberMe: 'Запомнить меня',
    forgotPassword: 'Забыли пароль',
    signin: 'Войти',
    signup: 'Зарегистрироваться',
    signout: 'Выйти',
    alreadyHaveAnAccount: 'Уже есть учетная запись? Войти.',
    signinWithAnotherAccount: 'Войти с другой учетной записью',
    emailUnverified: {
      message: `Подтвердите свой адрес элекронной почты <strong>{0}</strong> чтобы продолжить.`,
      submit: `Отправить подверждение по электронной почте`,
    },
    emptyPermissions: {
      message: `У вас еще нет доступа. Подождите, пока администратор вам его предоставит.`,
    },
    passwordResetEmail: {
      message: 'Отправить письмо на электронную почту для сброса пароля',
      error: `Электронная почта не распознана`,
    },
    passwordReset: {
      message: 'Сбросить пароль',
    },
    emailAddressVerificationEmail: {
      error: `Электронная почта не распознана`,
    },
    verificationEmailSuccess: `Письмо с подтверждением отправлено успешно`,
    passwordResetEmailSuccess: `Письмо с подтвержением пароля успешно отправлено на электронную почту`,
    passwordResetSuccess: `Пароль успешно изменен`,
    verifyEmail: {
      success: 'Электронная почта успешно подтверждена',
      message:
        'Минутку, ваша электронная почта проверяется...',
    },
  },

  roles: {
    librarian: {
      label: 'Библиотекарь',
      description: 'Доступ для библиотекаря',
    },
    member: {
      label: 'Читатель',
      description: 'Доступ для читателя',
    },
  },

  iam: {
    title: 'Пользователи',
    menu: 'Пользователи',
    disable: 'Отключить',
    disabled: 'Отключено',
    enabled: 'Включено',
    enable: 'Включить',
    doEnableSuccess: 'Пользователь успешно включен',
    doDisableSuccess: 'Пользователь успешно отключен',
    doDisableAllSuccess:
      'Пользователь(и) успешно отключен(ы)',
    doEnableAllSuccess:
      'Пользователь(и) успешно подключен(ы)',
    doAddSuccess: 'Пользователь(и) успешно сохранен(ы)',
    doUpdateSuccess: 'Пользователь успешно сохранен',
    viewBy: 'Просмотр',
    users: {
      name: 'пользователи',
      label: 'Пользователи',
      exporterFileName: 'экспорт пользоватлей',
      doRemoveAllSelectedSuccess:
        'Решения успешно удалены',
    },
    roles: {
      label: 'Роли',
      doRemoveAllSelectedSuccess:
        'Разрешения успешно удалены',
    },
    edit: {
      title: 'Редактировать пользователя',
    },
    new: {
      title: 'Новый(е) пользователь(и)',
      emailsHint:
        'Разделите адреса электронной почты запятой.',
    },
    view: {
      title: 'Просмотр пользователя',
      activity: 'Активность',
    },
    importer: {
      title: 'Импортировать пользователей',
      fileName: 'uшаблон импорта пользователей',
      hint:
        'Файлы/изображения должны быть URL-адресами, разделенные пробелом. Отношения должны быть идентификатором ссылочных записей, разделенные пробелом. Роли должны быть идентификатором ролей, разделенные пробелом.',
    },
    errors: {
      userAlreadyExists: 'Пользователь с этим адресом электронной почты уже существует',
      userNotFound: 'Пользователь не найден',
      disablingHimself: `Вы не можете отключить себя`,
      revokingOwnPermission: `Вы не можете отозвать свое разрешение администратора`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Идентификационный №',
      avatars: 'Аватар',
      email: 'Логин',
      emails: 'Электронная(ые) почта(ы)',
      fullName: 'Имя',
      firstName: 'Имя',
      lastName: 'Фамилия',
      school: 'Школа',
      classSchool: 'Класс',
      status: 'Статус',
      disabled: 'Отключено',
      phoneNumber: 'Номер телефона',
      role: 'Роль',
      createdAt: 'Создано',
      updatedAt: 'Обновлено',
      roleUser: 'Роль/Пользователь',
      roles: 'Роли',
      createdAtRange: 'Создано',
      password: 'Пароль',
      rememberMe: 'Запомнить меня',
    },
    enabled: 'Включено',
    disabled: 'Отключено',
    validations: {
      // eslint-disable-next-line
      email: 'Электронная почта ${value} недействительна',
    },
  },

  auditLog: {
    menu: 'Журнал выдачи',
    title: 'Журналы выдачи',
    exporterFileName: 'экспорт журнала выдачи',
    entityNamesHint:
      'Разделите несколько объектов с помощью запятой',
    fields: {
      id: 'Id',
      timestampRange: 'Период',
      entityName: 'Сущность',
      entityNames: 'Сущности',
      entityId: 'ID объекта',
      action: 'Действие',
      values: 'Значения',
      timestamp: 'Дата',
      createdByEmail: 'Электронная почта пользователя',
    },
  },
  settings: {
    title: 'Настройки',
    menu: 'Настройки',
    save: {
      success:
        'Настройки успешно сохранены. Страница перезагрузится через {0} секунд, чтобы изменения вступили в силу.',
    },
    fields: {
      theme: 'Тема',
      loanPeriodInDays: 'Период выдачи (дни)',
    },
    colors: {
      default: 'По умолчанию',
      cyan: 'Океан',
      'geek-blue': 'Синь',
      gold: 'Золото',
      lime: 'Лайм',
      magenta: 'Роза',
      orange: 'Апельсин',
      'polar-green': 'Лес',
      purple: 'Пурпур',
      red: 'Огонь',
      volcano: 'Вулкан',
      yellow: 'Солнце',
    },
  },
  home: {
    menu: 'Главная',
      },
  errors: {
    backToHome: 'Вернуться на главную',
    403: `Извините, у вас нет доступа к этой странице`,
    404: 'Извините, запрашиваемая вами страница не существует',
    500: 'Извините, ошибка на сервере',
    forbidden: {
      message: 'Запрещено',
    },
    validation: {
      message: 'Произошла ошибка',
    },
    defaultErrorMessage: 'К сожалению, произошла ошибка',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} не действителен',
      required: 'Требуется указать ${path}',
      oneOf:
        '${path} должен быть один из следующих значений: ${values}',
      notOneOf:
        '${path} не может быть один из следующих значений: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} должен быть ${type}`;
      },
    },
    string: {
      length: '${path} должен содержать ровно ${length} символов',
      min:
        '${path} должен содердать не менее ${min} символов',
      max:
        '${path} должен содержать ${max} символов',
      matches:
        '${path} должен соответствовать следующему: "${regex}"',
      email: '${path} должен быть действующим адресом электронной почты',
      url: '${path} должен быть действующим URL',
      trim:
        '${path} должен быть обрезанной строкой',
      lowercase: '${path} должен быть строкой в нижнем регистре',
      uppercase: '${path} должен быть строкой в верхнем регистре',
      selected: '${path} должен быть выбран',
    },
    number: {
      min: '${path} должен быть больше или равен ${min}',
      max: '${path} должен быть меньше или равен ${max}',
      lessThan: '${path} должен быть меньше ${less}',
      moreThan: '${path} должен быть больше ${more}',
      notEqual: '${path} не должен быть равен ${notEqual}',
      positive: '${path} должен быть положительным числом',
      negative: '${path} dдолжен быть отрицательным числом',
      integer: '${path} должен быть целым числом',
      invalid: '${path} должен быть числом',
    },
    date: {
      min: '${path} должен быть позже, чем ${min}',
      max: '${path} должен быть раньше, чем ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} не может имень ключи не указанные в форме объекта',
    },
    array: {
      min: '${path} должен содержать не менее ${min} элементов',
      max: '${path} должен содержать не более ${max} элементов',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Загрузить',
    image: 'Вы должны загрузить изображение',
    size:
      'Файл слишком большой. Максимально допустимый размер: {0}',
    formats: `Неверный формат. Должен быть: '{0}'.`,
  },
  importer: {
    line: 'Строка',
    status: 'Статус',
    pending: 'В ожидании',
    imported: 'Импортировано',
    error: 'Ошибка',
    total: `{0} импортировано, {1} ожидает и {2} с ошибкой`,
    importedMessage: `Обработано {0} из {1}.`,
    noNavigateAwayMessage:
      'Не покидайте страницу, иначе импортирование будет прервано.',
    completed: {
      success:
        'Импорт завершен. Все строки были успешно импортированы.',
      someErrors:
        'Импорт заверешн, но некоторые строки не удалось импортировать.',
      allErrors:
        'Ошибка импорта. Нет допустимых строк',
    },
    form: {
      downloadTemplate: 'Загрузите шаблон',
      hint:
        'Нажмите здесь или перетащите в эту область, чтобы продолжить.',
    },
    list: {
      discardConfirm:
        'Уверены? Неимпортированные данные будут потеряны.',
    },
    errors: {
      invalidFileEmpty: 'Файл пуст',
      invalidFileExcel:
        'Разрешены только файлы Excel (.xlsx)',
      invalidFileUpload:
        'Неверный файл. Убедитесь, что вы используете последнюю версию шаблона.',
      importHashRequired: 'Требуются данные для инпорта',
      importHashExistent: 'Данные уже инпортированы',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },
};

export default ptBR;
