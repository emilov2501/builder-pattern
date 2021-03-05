<template>
  <div id="app">
    <LoginForm></LoginForm>
    <UserForm></UserForm>
  </div>
</template>

<script>
import { FormDirector } from './builders/FormDirector'
import { FormBuilder } from './builders/FormBuilder'

export default {
  name: 'App',
  components: {
    UserForm: new FormDirector(new FormBuilder()).makeUserForm(),
    LoginForm: new FormDirector(new FormBuilder()).makeLoginForm(),
  },
}
</script>

<style>
html, body {
  background: #C3EAED;
}
</style>