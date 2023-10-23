<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-10 col-12">
        <form class="form">
          <h2 class="generic-title">{{ $t("Book") }}</h2>
          <div class="row">
            <div class="col-12">
              <label class="generic-label">
                {{ $t("DateLabel") }} <span>*</span>
              </label>
              <div class="date-picker">
                <DatePicker
                  v-model="state.form.range"
                  is-range
                  :locale="$i18n.locale"
                >
                  <template #default="{ inputValue, inputEvents }">
                    <div class="row">
                      <div class="col-12 col-lg-6">
                        <input
                          class="generic-input mb-0"
                          :class="
                            v$.form.range.start.$error
                              ? 'generic-input--error'
                              : ''
                          "
                          :value="inputValue.start"
                          v-on="inputEvents.start"
                        />
                      </div>
                      <div class="col-12 col-lg-6">
                        <input
                          class="generic-input mb-0"
                          :class="
                            v$.form.range.end.$error
                              ? 'generic-input--error'
                              : ''
                          "
                          :value="inputValue.end"
                          v-on="inputEvents.end"
                        />
                      </div>
                    </div>
                  </template>
                </DatePicker>
                <div
                  class="generic-error"
                  v-if="v$.form.range.start.$error || v$.form.range.end.$error"
                >
                  {{ $t("DateRequied") }}
                </div>
              </div>
            </div>
            <div class="col-12">
              <label class="generic-label"
                >{{ $t("TripClassLabel") }} <span>*</span></label
              >
              <multiselect
                v-model="state.form.typeClass"
                :options="typeClassOptions"
                track-by="id"
                label="name"
                :searchable="false"
                :show-labels="false"
              >
              </multiselect>
            </div>
            <div class="col-12">
              <label class="generic-label"
                >{{ $t("TripTypeLabel") }} <span>*</span></label
              >
              <div class="d-flex gap-2">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    v-model="state.form.tripType"
                    value="1"
                    id="one"
                  />
                  <label class="form-check-label" for="one">
                    {{ $t("OneWay") }}
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    value="2"
                    v-model="state.form.tripType"
                    id="Round"
                    checked
                  />
                  <label class="form-check-label" for="Round">
                    {{ $t("RoundTrip") }}
                  </label>
                </div>
              </div>
            </div>
            <div class="col-12">
              <label class="generic-label"
                >{{ $t("PassengersLabel") }} <span>*</span></label
              >
              <div class="row m-b-24">
                <div class="col-12 col-md-6">
                  <div class="generic-input-group mb-0">
                    <span class="generic-input-group-text" id="basic-addon1">{{
                      $t("Adults")
                    }}</span>
                    <input
                      type="number"
                      :class="
                        v$.form.adults.$error ? 'generic-input--error' : ''
                      "
                      v-model="state.form.adults"
                      @blur="v$.form.adults.$touch"
                      class="generic-input"
                    />
                  </div>
                  <div class="generic-error" v-if="v$.form.adults.$error">
                    {{ $t("AdultsRequired") }}
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="generic-input-group mb-0">
                    <span class="generic-input-group-text" id="basic-addon1">{{
                      $t("Children")
                    }}</span>
                    <input
                      type="number"
                      :class="
                        v$.form.childern.$error ? 'generic-input--error' : ''
                      "
                      v-model="state.form.childern"
                      @blur="v$.form.childern.$touch"
                      class="generic-input"
                    />
                  </div>
                  <div class="generic-error" v-if="v$.form.childern.$error">
                    {{ $t("ChildrenRequired") }}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="generic-btn" @click.prevent="submit()">
                {{ $t("Book") }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { DatePicker } from "v-calendar";
// import "v-calendar/style.css";
import "v-calendar/style.css";
import Multiselect from "vue-multiselect";
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { reactive } from "vue";
export default {
  components: {
    DatePicker,
    Multiselect,
  },
  data() {
    return {
      typeClassOptions: [
        { id: 0, name: this.$t("Economy") },
        { id: 1, name: this.$t("Business") },
        { id: 2, name: this.$t("First") },
      ],
    };
  },
  created() {
    this.state.form.typeClass = { id: 0, name: this.$t("Economy") };
  },
  methods: {
    submit() {
      this.v$.$validate();
      if (!this.v$.$error) {
      }
    },
  },
  setup() {
    const state = reactive({
      form: {
        typeClass: null,
        tripType: "1",
        range: {
          start: null,
          end: null,
        },
        adults: null,
        childern: null,
      },
    });
    const rules = {
      form: {
        range: { start: { required }, end: { required } },
        adults: { required },
        childern: { required },
      },
    };

    const v$ = useVuelidate(rules, state);

    return { state, v$ };
  },
};
</script>
