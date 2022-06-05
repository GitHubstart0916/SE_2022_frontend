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
            :items="map_list"
            label="选择所在地图"
            dense
            v-model="selected_map"
            v-on:change="map_change"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center" style="height: 10px">
      <v-col
          class="d-flex"
          cols="12"
          sm="6">
        <v-select
            :items="navi_list"
            label="选择地图航点"
            dense
            v-model="selected_navi"
            v-on:change="map_change"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center" style="height: 10px">
      <v-col
          class="d-flex"
          cols="12"
          sm="6">
        <v-select
            :items="item_list"
            label="选择物品"
            dense
            v-model="selected_item"
            v-on:change="map_change"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center" class="row_of_btn">
      <v-card-actions>
        <v-btn @click="startService">
          开始服务
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import {get_map_navi_item} from "@/api/user";

export default {
  name: "service_home",

  data() {
    return {
      map_list: [],
      navi_list: [],
      item_list: [],
      selected_map: null,
      selected_navi: null,
      selected_item: null,
    }
  },

  methods: {
    async startService() {
      if (this.selected_map == null) {
        alert("请选择地图！")
      } else if (this.selected_navi == null) {
        alert("请选择航点！")
      } else if (this.selected_item == null) {
        alert("请选择物品！")
      } else {
        //TODO: 向后端发送开始服务指令
      }
    },

    async map_change() {
      let res = await get_map_navi_item({
        //TODO: 向后端传地图的主键
      })
      this.navi_list = res.data.navi_list
      this.item_list = res.data.item_list
    }
  },

  created: async function () {
    // TODO: 获取地图列表
  }
}
</script>

<style scoped>

</style>