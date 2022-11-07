<template>
    <div class="min-vh-100 p-5 my-5" id="applications">
        <h3 class="text-center border border-black">Apply for Leave</h3><br><br><br>
        <div class="col-md-6 m-auto">
            <form class="container border border-black h-100" @submit.prevent="applyForLeave">
            <div class="form-group">
            <label for="date">startDate</label>
            <input type="date" class="form-control pass m-auto" id="date" v-model="startDate">
          </div>
           <div class="form-group">
            <label for="role">endDate</label>
            <input type="date" class="form-control pass m-auto" id="date" v-model="endDate">
          </div>
           <div class="form-group">
            <label for="type">leaveType</label>
            <input type="select" class="form-control pass m-auto" id="leaveType" v-model="leaveType">
          </div>
            <div class="form-group">
            <label for="reason">Reason</label>
            <input type="text" class="form-control pass m-auto" id="text" v-model="Reason">
          </div>
          <div class="form-group">
            <label for="leaveTotal">leaveTotal</label>
            <input type="number" class="form-control pass m-auto" id="number" v-model="leaveTotal">
          </div>
           <div class="form-group">
            <label for="id">employee ID</label>
            <input type="number" class="form-control pass m-auto" id="number" v-model="employee_id">
          </div>
          
          <button class="btn btn-primary my-5" type="submit">Submit application</button>
        </form>
        </div>
    </div>
</template>

<script>
import applyLeave  from '@/views/applyLeave.vue';



export default {
  name: '',
  components: {
    applyLeave
    },

    computed: {
        employee() {
        return this.$store.state.LeaveRequests;
    }
    },
    data() {
    return {
            startDate: '',
            endDate: '',
            leaveType:'',
            Reason: '',
            leaveTotal:'',
            employee_id: '',
        }
  },
    methods: {
        register() {
        this.$store.dispatch('applyForLeave', {
            startDate: this.startDate,
            endDate: this.endDate,
            leaveType: this.leaveType,
            Reason: this.Reason,
            leaveTotal: this.leaveTotal,
            employee_id: this.employee_id,
      });
    }
  }

}

</script>

<style scoped>

</style>