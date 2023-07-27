<template>
  <!-- <AuthModal @update-auth="updateIsAuth" :isAuth="isAuth" /> -->
  <div class="flex flex-col h-screen">
    <header class="py-5 bg-gray-700">
      <div class="flex justify-end items-center flex-row">
        <a href="#" class="text-sm font-semibold leading-6 text-white px-5"
          >Search</a
        >
        <a href="/about" class="text-sm font-semibold leading-6 text-white px-5"
          >About</a
        >
        <a href="/diary" class="text-sm font-semibold leading-6 text-white px-5"
          >Login</a
        >
      </div>
    </header>
    <main class="flex-1 overflow-y-auto" style="height: 100vh">
      <div class="grid">
        <div class="relative overflow-hidden">
          <img
            class="object-cover w-full"
            src="../assets/images/thaifood-cover.jpeg"
            style="height: 500px;"
          />

          <div class="absolute bottom-0 text-white left-0 px-6 py-4">
            <h4 class="mb-3 font-semibold leading-tight text-9xl">Let's</h4>
            <h4 class="mb-3 font-semibold tracking-tight text-8xl">Present</h4>
            <h4 class="mb-3 font-semibold tracking-tight text-9xl">
              Thai Food
            </h4>
          </div>
        </div>
        
      </div>
    </main>
    <!-- <footer class="py-5 bg-gray-700 text-center text-white">
      Tailwind is Awesome 😎
    </footer> -->
  </div>
  <div class="bg-white">
    <!-- <Header @update-isAuth="updateIsAuth" /> -->
    <!-- <div class="relative isolate px-6 pt-14 h-screen  bg-slate-500 text-white lg:px-8">
      <h1>Hello world</h1>
    </div> -->
    <!-- <main class="grid h-screen bg-gradient-to-r from-cyan-500 to-blue-500  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div class="text-center">
        <p class="text-base font-semibold text-indigo-600">404</p>
        <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"
            class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Go
            back home</a>
          <a href="#" class="text-sm font-semibold text-gray-900">Contact support <span
              aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </main> -->
  </div>
</template>
<script>
// import Header from "../components/Header.vue";
// import AuthModal from "@/components/AuthModal.vue";

export default {
  name: "HomePage",
  mounted() {},
  data() {
    return {
      isAuth: false,
    };
  },
  // components: { AuthModal, Header },
  methods: {
    toggleAuth() {
      this.isAuth = !this.isAuth;
    },
    updateIsAuth(value) {
      this.isAuth = value;
    },
  },
};
</script>
<style lang=""></style>
