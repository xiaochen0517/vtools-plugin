<script setup lang="ts">

import {getCurrentInstance, onMounted} from "vue";

const instance = getCurrentInstance();
onMounted(() => {
  if (!instance) {
    return;
  }
  console.log(instance);
  console.log(instance.proxy?.$StrUtil.isEmpty(""));
});
</script>

<template>
  <div>
    {{$StrUtil.isEmpty("")}}
    {{$StrUtil.isEmpty("123")}}
  </div>
</template>
