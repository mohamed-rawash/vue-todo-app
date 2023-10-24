<template>
  <nav>
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <ul>
      <li v-for="route in router.options.routes" :key="route.name">
        <RouterLink :to="{ name: route.name }">
          {{ route.meta.title }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<style scoped lang="scss">
nav {
  padding: 8px 0;
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #73c3f9;
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  .logo {
    width: 32px;
    height: 32px;
    img {
      max-width: 100%;
    }
  }
  ul {
    list-style: none;
    display: flex;
    gap: 15px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: black;
      &.router-link-exact-active {
        color: black;
      }
    }
  }
}
</style>
