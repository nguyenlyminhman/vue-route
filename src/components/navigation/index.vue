<template>
  <nav id="nav">
    <p class="logo">The Travel App</p>
    <ul class="nav-links">
      <li class="links">
        <router-link to="/">Home</router-link>
      </li>
      <li v-for="destination in destinations" :key="destination.name" class="link">
        <router-link
          :to="{
          name: 'DestinationDetails',
          params: {slug: destination.slug}
        }"
        >{{destination.name}}</router-link>
      </li>
      <li class="links">
        <router-link to="/user">Dashboard</router-link>
      </li>
      <li class="links">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#nav {
  display: flex;
}

#nav a {
  color: chocolate;
  text-decoration: none;
  font-weight: bold;
  padding: 0 10px;
  list-style-type: none;
}

.nav-links {
  display: flex;
  list-style-type: none;
}

.links {
  padding-right: 20px;
  list-style-type: none;
}

.links:hover {
  text-decoration: underline;
}

.logo {
  font-size: 20px;
  color: purple;
  font-weight: bold;
}
</style>>
 
