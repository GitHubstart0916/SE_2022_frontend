<template>
  <v-app>
    <h1>
      CI-Test-Pass
    </h1>
    <v-text-field
        v-model="userid"
        label="用户id"
        readonly
    ></v-text-field>
    <v-btn
        outlined
        rounded
        text
        color="deep-purple lighten-2"
        @click="getUsrId"
    >
      获取当前ID
    </v-btn>
  </v-app>
</template>

<script>
import {getUserInfo} from "@/api/user";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "main",

  data() {
    this.userid = 0
  },

  methods: {
    getUsrId() {
      let res = getUserInfo()
      this.userid = res.data.id
    }
  }
}
</script>

<style scoped>

</style>