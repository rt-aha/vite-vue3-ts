<template>
  <div class="ly-base-layout">
    <div class="ly-base-layout__header">
      <ly-header />
    </div>

    <div class="ly-base-layout__body">
      <div class="ly-base-layout__body__sidebar">
        <ly-sidebar />
      </div>
      <div class="ly-base-layout__body__container">
        
        <div class="router-view-wrap">
          <div class="router-view-wrap__view">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import LyHeader from '@/layout/LyHeader.vue'
import LySidebar from '@/layout/LySidebar.vue'


</script>

<style lang="scss" scoped>
.page-title {
  @include font-style($c-main, 24, 500);
}
.ly-base-layout {
  width: 100%;
  height: 100%;
  // min-height: 100%;
  @include flex(flex-start, flex-start, column);

  &__header {
    width: 100%;
    height: auto;
    flex: none;
    position: relative;
    z-index: $zi-header;
  }

  &__body {
    width: 100%;
    height: 100%;
    flex: 1;
    @include flex(flex-start, flex-start);
    overflow: hidden;

    &__sidebar {
      flex: none;
      // width: 220px;
      display: inline-block;
      height: 100%;
      background-color: #ccc;
    }

    &__container {
      flex: 1;
      height: 100%;
      overflow: auto;
      @include padding(25px);
    }
  }

  &__footer {
    position: relative;
    z-index: 10;
    width: 100%;
    height: auto;
    flex: none;
  }
}

.router-view-wrap {
  @include flex(flex-start, flex-start);

  &__view {
    // flex: none;
    // width: ;
    flex: 1;
  }

  &__extra-view {
    flex: none;
    width: 50%;
    @include padding(0 0 0 30px);
  }
}
</style>
