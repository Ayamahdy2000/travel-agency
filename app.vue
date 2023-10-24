<template>
  <div :class="$i18n.locale == 'en' ? 'app-en' : 'app-ar'">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const lang = useI18n();
if (lang.locale.value == "en") {
  import("~/assets/styles/main-ltr.scss");
} else {
  import("~/assets/styles/main-rtl.scss");
}

useHead({
  title: "Travel Agency",
  htmlAttrs: {
    lang: lang.locale,
    dir: lang.locale.value == "en" ? "ltr" : "rtl",
  },
  meta: [
    { name: "description", content: "You can book now your trip easily." },
  ],
});
useSeoMeta({
  title: "Travel Agency",
  ogTitle: "Travel Agency",
  description: "You can book now your trip easily",
  ogDescription: "You can book now your trip easily",
  twitterCard: "summary_large_image",
});
</script>
