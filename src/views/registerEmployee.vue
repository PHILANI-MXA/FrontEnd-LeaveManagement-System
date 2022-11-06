<template>
    <div class="min-vh-100 p-5 my-5" id="applications">
        <h3 class="text-center border border-black">Register new employee</h3><br><br><br>
        <div class="col-md-6 m-auto">
            <form class="container border border-black h-100" @submit.prevent="register">
                <div class="form-group">
                    <label for="firsName">firstName</label>
                    <input type="text" class="form-control pass m-auto" id="firsName" v-model="firsName">
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
export default {
    name:'',
    components: {

    }
}

</script>

<style scoped>

</style>