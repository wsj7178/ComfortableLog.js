<template>
  <section class="wait-for-connection-page">
    <article class="con-article">
      <div class="log-img">
        <img src="../assets/log.png" alt="log drawing image">
      </div>
      <h1>Wait for Connection</h1>
      <div >
        <span>ip:port</span>
        <input type="text">
      </div>
    </article>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class WaitForConnection extends Vue {
  data () {
    return {
      ip: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.wait-for-connection-page {
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;

  .con-article {
    .log-img  {
      width: 50vw;
      img {
        width: 100%;
      }
    }
  }
}
</style>
