<script setup lang="ts">
import {getCurrentInstance, onMounted} from "vue";
import StrUtil from "../plugins/utils/StrUtil";

const instance = getCurrentInstance();
onMounted(() => {
  if (!instance) {
    return;
  }
  console.log(StrUtil.isEmpty(""));
});
</script>

<template>
  <div>
    {{ StrUtil.isEmpty("") }}
    {{ StrUtil.isEmpty("123") }}
  </div>
</template>
