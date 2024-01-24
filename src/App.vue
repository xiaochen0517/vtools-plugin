<script setup lang="ts">
import {getCurrentInstance, onMounted} from "vue";

const instance = getCurrentInstance();
onMounted(() => {
  if (!instance) {
    return;
  }
  console.log(instance);
  console.log(instance.proxy?.vtools.StrUtil.isEmpty(""));
});
</script>

<template>
  <div>
    {{ vtools.StrUtil.isEmpty("") }}
    {{ vtools.StrUtil.isEmpty("123") }}
  </div>
</template>
