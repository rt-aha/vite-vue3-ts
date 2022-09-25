<template>
  <div class="ly-header">
    <div class="ly-header__content">
      <p class="rakuen">Opzo Blog Cms</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>

<style lang="scss" scoped>
@import '@/styles/utils/_rwd.scss';

.ly-header {
  height: 50px;
  background-color: $c-main;
  box-shadow: 0 0px 10px #aaa;

  &__content {
    height: 100%;
    @include flex();
    @include padding(0 10px);
  }
}

.rakuen {
  @include font-style($c-white, 20, 400, 2px);
}
</style>
