<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center">
    <h3 class="card-title m-3 bg-dark text-light p-3 d-flex">
      <span>Title |</span>
      <span>Reported By |</span>
      <span>Status |</span>
      <span>Last Modified</span>
    </h3>
    <div class="card-body">
      Bug list
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
}
</style>
