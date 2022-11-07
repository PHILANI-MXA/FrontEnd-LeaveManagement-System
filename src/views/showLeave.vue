<template>
    <div class="hello container p-3 my-5">
      <h3 class="text-center border border-black">Leave Management System</h3><br><br><br>
      <table class="table-responsive m-auto">
        <thead>
            <tr>
                <th class="col-md-3">ID</th>
                <th class="col-md-3">end-date</th>
                <th class="col-md-3">start-date</th>
                <th class="col-md-3">Leave type</th>
            </tr>
        </thead>
      <tbody>
        <tr  v-for="leave in employees" :key="leave.employee_id">
          <th scope="row">{{leave.employee_id}}</th>
          <td>{{leave.startDate}}</td>
          <td>{{leave.endDate}}</td>
          <td>{{leave.leaveType}}</td>
        </tr>
      </tbody>
    </table>
    </div>
    <div class="">
      <router-link to="/applyForLeave">
      <button class="d-flex flex-start">
      Leave application form
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
     computed:{
        LeaveRequests(){
          return this.$store.state.LeaveRequests;
          },
          LeaveRequest(){
          return this.$store.state.LeaveRequest;
          }
      },
    mounted() {
      this.$store.dispatch('LeaveRequests');
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
  