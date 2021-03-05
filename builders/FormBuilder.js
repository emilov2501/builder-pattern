import FormFactory from '../components/Form/FormFactory.vue'

const defaultButton = {
  type: 'success',
  title: 'Submit'
}

export class FormBuilder {
  constructor () {
    this.props = {
      fields: [],
      btn: defaultButton
    }
  }

  setField(field) {
    this.props.fields.push(field)
    return this
  }

  setButton(button) {
    this.props.btn = button
    return this
  }

  build() {
    const props = this.props
    
    return {
      render(h) {
        return h(FormFactory, { props: { ...props } });
      }
    }
  }
}