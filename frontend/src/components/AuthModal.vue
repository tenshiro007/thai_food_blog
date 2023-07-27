<template>
  <div>
    <transition name="fade">
      <div v-if="isModalVisible">
        <div
          @click="showModalToggle"
          class="absolute bg-black opacity-70 inset-0 z-40"
        ></div>
        <Login v-if="isLogin" @update-isLogin="ShowLoginToggle" />
        <Register v-else @update-isLogin="ShowLoginToggle" />
      </div>
    </transition>
  </div>
</template>
<script>
import Login from "./Login.vue";
import Register from "./Register.vue";

export default {
  name: "AuthModal",
  components: { Login, Register },
  props: ["isAuth"],
  data() {
    return {
      isOpen: false,
      isLogin: true,
    };
  },

  computed: {
    isModalVisible() {
      return this.isOpen;
    },
  },

  methods: {
    showModalToggle() {
      this.isOpen = !this.isOpen;
      this.$emit("update-auth", this.isOpen); // Emit event to update parent prop
    },
    ShowLoginToggle(){
      this.isLogin=!this.isLogin;
    }
  },
  watch: {
    isAuth(newValue) {
      this.isOpen = newValue; // Update internal child prop when parent prop changes
    },
  },
};
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 100ms ease-out;
}
</style>
