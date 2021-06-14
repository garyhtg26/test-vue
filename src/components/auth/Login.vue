<template>
  <div class="row login-container" >
      <div class="col-md-7 mt-5">
      <div class="card-group">
        <div class="card p-4">
          <div class="card-body">
      <h1>Login</h1>
            
            <p class="text-muted">login here</p>
            <form id="login-form" role="form" style="display: block;" @submit.prevent="onSubmit">

        <div class="form-group">
          <input
            type="email"
            name="email"
            id="email"
            class="form-control"
            placeholder="Email Address"
            v-model="email"
            required
          />
        </div>
        <div class="form-group">
          <input
            type="password"
            name="password"
            id="password"
            class="form-control"
            placeholder="Password"
            v-model="password"
            required
          />
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-success" style="width: 100%" :disabled="isLoading">
            <i v-if="isLoading" class="fa fa-spinner fa-spin" />
            Log in
          </button>
        </div>
        
      </form>
          </div>
        </div>
      
      </div>
 
      </div>
      
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      isLoading: false
    }
  },
  
  methods: {
    async onSubmit() {
      const response = await Axios.post('login', {
        email:this.email,
        password:this.password,
      });
      console.log(response)
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
}

.btn-home {
    margin-top: 25px;
    display: flex;
  justify-content: center;
  align-items: center;
  color: grey;
}

</style>

