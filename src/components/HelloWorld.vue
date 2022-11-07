<template>
  <div class="hello container p-3 my-5">
    <h3 class="text-center border border-black">Leave Management System</h3><br><br><br>
    <table class="table-responsive">
      <thead>
          <tr>
              <th class="col-md-3">#</th>
              <th class="col-md-3">FirstName</th>
              <th class="col-md-3">lastName</th>
              <th class="col-md-3">email</th>
          </tr>
      </thead>
    <tbody>
      <tr  v-for="employee in employees" :key="employee.employee_id">
        <th scope="row">{{employee.employee_id}}</th>
        <td>{{employee.firstName}}</td>
        <td>{{employee.lastName}}</td>
        <td>{{employee.email}}</td>
      </tr>
    </tbody>
  </table>
  </div>
  <div class="">
    <router-link to="/registerNewEmployee">
    <button class="d-flex flex-start">
    RegisterNewEmployee
    </button>
  </router-link>
      </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: '',
  components: {
    HelloWorld
  },
    data() {
    return {
      search:'',
    }
    },
       employee() {
      return this.$store.state.employees?.filter(employee =>{
          let isMatch = true;
          if (!users.firstName.toLowerCase().includes(this.search.toLowerCase())) {
              isMatch = false;
          }
          return isMatch
          })
        },
   computed:{
        employees(){
        return this.$store.state.employees;
        },
        employee(){
        return this.$store.state.employee;
        }
    },
  mounted() {
    this.$store.dispatch('getEmployees');
  },
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
