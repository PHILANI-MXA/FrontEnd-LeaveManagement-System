<template>
    <div class="hello container-fluid p-5">
      <h3 class="text-center border border-black">Leave Management System</h3><br><br><br>
      <!-- <div>
      <table class="table-stripped">
        <thead>
            <tr>
                <th class="col">ID</th>
                <th class="col">Start-date</th>
                <th class="col">End-date</th>
                <th class="col">Leave type </th>
                <th class="col">Reason </th>
                <th class="col">LeaveTotal </th>
                <th class="col">LeaveReq_no</th>
            </tr>
        </thead>
      <tbody>
        <tr  v-for="leave in LeaveRequests" :key="leave.LeaveReq_no">
          <th scope="row">{{leave.employee_id}}</th>
          <td>{{leave.startDate}}</td>
          <td>{{leave.endDate}}</td>
          <td>{{leave.leaveType}}</td>
          <td>{{leave.Reason}}</td>
          <td>{{leave.leaveTotal}}</td>
          <td>{{leave.LeaveReq_no}}</td>
        </tr>
      </tbody>
    </table>
  </div> -->
  <div  class="table-responsive">
    <table class="table  table-striped">
      <thead>
          <tr>
            <th class="col">ID</th>
            <th class="col">Start-date</th>
            <th class="col">End-date</th>
            <th class="col">Leave type </th>
            <th class="col">Reason </th>
            <th class="col">LeaveTotal </th>
            <th class="col">LeaveReq_no</th>
          </tr>
      </thead>
    <tbody>
      <tr  v-for="leave in LeaveRequests" :key="leave.LeaveReq_no">
        <th scope="row">{{leave.employee_id}}</th>
        <td>{{leave.startDate}}</td>
        <td>{{leave.endDate}}</td>
        <td>{{leave.leaveType}}</td>
        <td>{{leave.Reason}}</td>
        <td>{{leave.leaveTotal}}</td>
        <td>{{leave.LeaveReq_no}}</td>
      </tr>
    </tbody>
  </table>
  </div>
    </div>
  
    <div class="">
      <router-link to="/applyForLeave">
      <button class="">
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
      },
    mounted() {
      this.$store.dispatch('getLeaveRequests');
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
  