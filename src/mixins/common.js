// import Vue from 'vue'

export const commonMixin = {
  data () {
    return {
      info: '',
      error: ''
    }
  },
  methods: {
    hello () {
      console.log('commonMixin hello called')
    },
    handleREST (response) {

    },
    restError (error) {
      this.info = ''
      this.error = ''

      if (error != null) {
        console.log('REST Error encountered: ' + JSON.stringify(error))
        this.error = 'Problem encountered'
      }
    }

  },
  watch: {
  }
}
