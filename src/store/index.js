import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

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
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
