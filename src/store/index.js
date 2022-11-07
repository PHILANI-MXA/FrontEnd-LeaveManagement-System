import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import router from '@/router';

const appSystem = "https://leave-management-syste.herokuapp.com/"

export default createStore({
  state: {
    employees: null,
    LeaveRequests: null,
    employee: null,
    LeaveRequest: null
  },
  getters: {
  },
  mutations: {
    setEmployees (state, values) {
      state.employees = values;
    },
    setEmployee (state, value) {
      state.employee  = value;
    },
    setLeaveRequests (state, values) {
      state.LeaveRequests = values;
    },
    setLeaveRequest (state, value) {
      state.LeaveRequest = value;
    }
  },
  actions: {
    getEmployees: async (context) => {
      fetch(appSystem + "employees")
        .then((response) => response.json())
        .then((employees) => context.commit("setEmployees", employees));
    },
    getEmployee: async (context, id) => {
      fetch(appSystem  + id)
        .then((response) => response.json())
        .then((employees) => context.commit("setEmployees", employees));
    },
    getLeaveRequests: async (context) => {
      fetch(appSystem + "LeaveRequests")
        .then((response) => response.json())
        .then((LeaveRequests) => context.commit("setLeaveRequests", LeaveRequests));
    },
    getLeaveRequest: async (context, id) => {
      fetch(appSystem + id)
        .then((response) => response.json())
        .then((LeaveRequest) => context.commit("setLeaveRequest", LeaveRequest));
    },
    

    register: async (context, data) => {
      const {
        firstName,
        lastName,
        email,

      } = data;
      fetch(appSystem + "post/employee", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,         
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("setEmployee", json)
        });
      router.push("/");
    },

    ApplyForLeave: async (context, data) => {
      const {
        startDate,
        endDate,
        leaveType,
        Reason,
        leaveTotal,
        employee_id
      } = data;
      fetch(appSystem + ":id/application", {
        method: "POST",
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate,
          leaveType: leaveType,
          Reason: Reason, 
          leaveTotal: leaveTotal,
          employee_id: employee_id      
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          context.commit("LeaveRequest", json)
        });
      router.push("/showLeaves");
    },
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
