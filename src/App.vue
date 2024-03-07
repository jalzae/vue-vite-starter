<template>
  <div>
    <router-link v-for="item in routes" :to="item.path">
      {{ item.name }}
    </router-link>
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import router from "./router";
export default defineComponent({
  setup() {},
  mixins: [],
  components: {},
  props: {},
  methods: {},
  data() {
    return {
      routes: [],
    };
  },
  mounted() {},
  computed: {},
  watch: {},
  async created() {
    this.routes = router.options.routes;
  },
});
</script>
