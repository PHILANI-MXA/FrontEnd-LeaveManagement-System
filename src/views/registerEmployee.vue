<template>
    <div class="min-vh-100 p-5 my-5" id="applications">
        <h3 class="text-center border border-black">Register new employee</h3><br><br><br>
        <router-link to="/">
            <button class="d-flex flex-end">
            View employees
            </button>
          </router-link><br><br>
        <div class="col-md-6 m-auto">
            <form class="container border border-black h-100" @submit.prevent="register">
                <div class="form-group">
                    <label for="firstName">firstName</label>
                    <input type="text" class="form-control pass m-auto" id="firstName" v-model="firstName">
                  </div>
                  <div class="form-group">
                    <label for="lastName">lastName</label>
                    <input type="text" class="form-control pass m-auto" id="lastName" v-model="lastName">
                  </div>
                    <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" class="form-control pass m-auto" id="email" v-model="email">
                  </div>
          <button class="btn btn-primary my-5" type="submit">Submit application</button>
        </form>
        </div>
    </div>
</template>

<script>
import registerNewEmployee  from '@/views/registerEmployee.vue';

export default {
  name: '',
  components: {
    registerNewEmployee
    },

    computed: {
        employee() {
        return this.$store.state.employee;
    }
    },
    data() {
    return {
            firstName: '',
            lastName: '',
            email: ''
        }
  },
    methods: {
        register() {
        this.$store.dispatch('register', {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
      });
    }
  }

}
</script>

<style scoped>

</style>