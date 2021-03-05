import TextField from '../components/Form/TextField.vue'

export class FormDirector {
  constructor(builder) {
    this.builder = builder
  }

  makeLoginForm() {
    return this.builder
      .setButton({
        type: 'danger',
        title: 'Send'
      })
      .setField({
        component: TextField,
        name: 'username',
        options: {
          attrs: {
            name: 'Username',
            placeholder: 'Почта',
            type: 'email'
          }
        }
      })
      .build();
  }

  makeUserForm() {
    return this.builder
      .setField({
        component: TextField,
        name: 'username',
        options: {
          attrs: {
            name: 'Username',
            placeholder: 'Логин',
            type: 'text'
          }
        }
      })
      .setField({
        component: TextField,
        name: 'password',
        options: {
          attrs: {
            name: 'Password',
            placeholder: 'Пароль',
            type: 'password'
          }
        }
      })
      .build();
  }
}
