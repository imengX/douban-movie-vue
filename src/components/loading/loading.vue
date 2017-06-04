<template>
  <div class="loading">
    <spin fix>
      <h1 class="prompt">豆瓣：我们的精神部落</h1>
      <icon type="load-c" size=80 class="spinIconLoad"></icon>
    </spin>
  </div>
</template>

<script>
import spin from 'iview/src/components/spin'

export default {
  name: 'loading',
  components: {
    spin
  }
}
</script>

<style scoped>
.loading {
  position: relative;
}

.spinIconLoad {
  animation: aniSpin 1s linear infinite;
  color: #00b600;
  position: relative;
  top: 330px;
}

@keyframes aniSpin {
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.prompt {
  font-size: 1.4rem;
  position: fixed;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  color: #00b600;
}
</style>
