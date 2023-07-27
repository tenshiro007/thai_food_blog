<template>
  <div
    class="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-lg p-3 mx-auto my-auto rounded-xl shadow-lg bg-white z-50"
  >
    <div>
      <div class="text-center p-3 flex-auto justify-center leading-6">
        <h2 class="text-2xl font-bold py-4">Sign in to your account</h2>
      </div>
      <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
              >Username</label
            >
            <div class="mt-2">
              <input
                id="username"
                name="username"
                type="text"
                autocomplete="username"
                required
                v-model="user.username"
                class="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
                >Password</label
              >
              <div class="text-sm">
                <a
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                  >Forgot password?</a
                >
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                v-model="user.password"
                class="block w-full rounded-md px-3 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              @click.prevent="validateInput"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p class="mt-10 text-center text-sm text-gray-500 mb-10">
          Not a member?
          <button
            @click="toRegister"
            class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Click to register
          </button>
        </p>

        <p class="text-center text-sm text-gray-500 mb-5">Or continue with</p>

        <button
          type="submit"
          class="mb-10 flex w-full justify-center rounded-md bg-red-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import swal from 'sweetalert';

export default {
  name: "LoginComponent",
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    toRegister() {
      this.$emit("update-isLogin", false);
    },
    validateInput(){
      if(!this.user.username){
        swal("Unable to Submit", 'Please fill Username', "error");
        return;
      }
      if(!this.user.password){
        swal("Unable to Submit", 'Please fill Password', "error");
        return;
      }
      this.sendLogin();
    },
    sendLogin() {
      axios
        .post(
          process.env.VUE_APP_API_URL + "/auth/login",
          {
            username:this.user.username,
            password:this.user.password
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          // console.log(res);
          const token = res.data.message.access_token;
          const profile = res.data.message.profile.id;
          localStorage.setItem('token_habitica_session_c', token);
          localStorage.setItem('token_habitica_session_p', profile);
          this.$router.push('/dashboard');
        })
        .catch((err) => {
          // console.log(err);
          swal("Oops!", err.response.data.message, "error");
        });
    },
  },
};
// axios.post('https://api.example.com/posts', {
//   title: 'New Post',
//   content: 'Lorem ipsum dolor sit amet.'
// }, {
//   headers: {
//     'Authorization': 'Bearer <your_token>',
//     'Content-Type': 'application/json'
//   }
// })
//   .then(response => {
//     // Handle the response
//   })
//   .catch(error => {
//     // Handle the error
//   });
</script>
