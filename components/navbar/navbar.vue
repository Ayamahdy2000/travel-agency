<template>
  <div class="layout-navbar">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-6 col-md-6">
          <nuxt-link :to="localePath('/', $i18n.locale)">
            <img src="../../assets/images/logo.png" alt="" srcset="" />
          </nuxt-link>
        </div>

        <div class="col-6 col-md-6 d-flex justify-content-end">
          <multiselect
            v-model="value"
            :options="options"
            :closeOnSelect="false"
            :searchable="false"
            :show-labels="false"
            placeholder="Pick a value"
          >
            <template v-slot:singleLabel="props">
              <img
                v-if="props.option.code == 'ar'"
                class="option__image"
                src="../../assets/images/arFlag.svg"
                :alt="props.option.label"
              />
              <img
                v-else
                class="option__image"
                src="../../assets/images/enFlag.svg"
                :alt="props.option.label"
              /><span class="option__desc"
                ><span class="option__title">{{
                  props.option.label
                }}</span></span
              >
            </template>
            <template v-slot:option="props">
              <!-- <nuxt-link  :to="switchLocalePath( props.option.code  )"> -->
              <img
                v-if="props.option.code == 'ar'"
                class="option__image"
                src="../../assets/images/arFlag.svg"
                :alt="props.option.label"
              />
              <img
                v-else
                class="option__image"
                src="../../assets/images/enFlag.svg"
                :alt="props.option.label"
              />
              <span class="option__desc"
                ><span class="option__title">{{
                  props.option.label
                }}</span></span
              >
              <!-- </nuxt-link
              > -->
            </template>
          </multiselect>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Multiselect from "vue-multiselect";
import { useI18n } from "vue-i18n";
export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      value: null,
      options: [
        { label: "ع", flag: "arFlag", code: "ar" },
        { label: "en", flag: "enFlag", code: "en" },
      ],
    };
  },
  watch: {
    value() {
      if (this.value.code != this.$i18n.locale) {
        this.$i18n.setLocale(this.value.code).then(() => {
          location.reload();
        });
      }
    },
  },
  methods: {},
  mounted() {
    const lang = useI18n();
    this.value =
      lang.locale._value == "ar"
        ? { label: "ع", flag: "arFlag", code: "ar" }
        : { label: "en", flag: "enFlag", code: "en" };
  },
};
</script>
