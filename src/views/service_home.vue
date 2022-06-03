<template>
  <v-app>
    <v-row justify="center" style="height: 10px">
      <h1>
        服务
      </h1>
    </v-row>

    <v-row justify="center" style="height: 10px">
      <v-col
          class="d-flex"
          cols="12"
          sm="6">
        <v-select
            :items="maps"
            label="选择所在地图"
            dense
            v-model="selected_map"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center" class="row_of_btn">
      <v-card-actions>
        <v-btn @click>
          开始服务
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "service_home",

  data() {
    return {
      maps : [],
      selected_map: null
    }
  },

  methods: {
    async startService() {
      if (this.selected_map == null) {
        alert("请选择地图！")
      } else {

      }
    }
  }
}
</script>

<style scoped>

</style>