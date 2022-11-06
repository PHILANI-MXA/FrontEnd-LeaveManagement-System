<template>
  
  <div id="leaveform" class="container min-vh-100">
    <leaveform/>
    <h2 class="fw-bold p-2">Apply for Leave</h2>
    <div class="col-md-6 m-auto">
      <form
        class="container border border-black h-100"
        @submit.prevent="register"
      >
        <h4 class="text-decoration-underline fw-bold text-white">Apply for leave</h4>
        <div class="form-group">
          <label for="fullname">Fullname</label>
          <input
            type="text"
            class="form-control pass m-auto"
            id="fullname"
            v-model="user_fullname"
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            class="form-control pass m-auto"
            id="email"
            v-model="email"
          />
        </div>
        <div class="form-group">
          <label for="role">User Role</label>
          <input
            type="text"
            class="form-control pass m-auto"
            id="role"
            v-model="user_role"
          />
        </div>
        <div class="form-group">
          <label for="password">password</label>
          <input
            type="password"
            class="form-control pass m-auto"
            id="password"
            v-model="user_password"
          />
        </div>
        <div class="form-group">
          <label for="number">phone number</label>
          <input
            type="tel"
            class="form-control pass m-auto"
            id="number"
            v-model="phone_number"
          />
        </div>
        <div class="form-group">
          <label for="date">joinDate</label>
          <input
            type="date"
            class="form-control pass m-auto"
            id="date"
            v-model="join_date"
          />
        </div>
        <button class="btn btn-primary my-5" type="submit">Submit</button>
      </form>
    </div>
  </div>
  </template>


<script>

import Leaveform from '../views/Leaveform.vue';
export default {
    name:'leave',
    components: {
        Leaveform
    },
  data() {
    return {
      user_fullname: "",
      email: "",
      user_password: "",
      user_role: "",
      phone_number: null,
      join_date: null,
    };
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        user_fullname: this.user_fullname,
        email: this.email,
        user_password: this.user_password,
        user_role: this.user_role,
        phone_number: this.phone_number,
        join_date: this.join_date,
      });
    },
  },
};
</script>

<style scoped>
.form {
  background-color: #fefefe;
}
.pass {
  background-color: white;
  border: 1px solid black;
  justify-self: center;
  height: 50px;
  width: 300px;
}

.pass::placeholder {
  padding-left: 20px;
  font-size: 15px;
}

.pass {
  background-color: white;
  border: 1px solid black;
  justify-self: center;
  height: 50px;
  width: 300px;
  font-size: 20px;
  transition: 0.5s ease;
}

.pass:hover {
  background-color: black;
  color: white;
}
</style>
