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
        <v-btn @click="getAllNode">
          确认地图
        </v-btn>


        <v-btn @click="startService">
          开始服务
        </v-btn>

        <v-btn @click="finish">
          结束服务
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-app>
</template>

<script>
import axios from "axios";
import {get_map_list} from "@/api/map";
import {begin_mark, begin_serve, finish_serve, get_all_node, get_it, goto} from "@/api/ros";
import {sleep} from "@/api/user";

export default {
  name: "service_home",

  data() {
    return {
      map_list: [],
      navi_list: [],
      item_list: ['取物', '导航'],
      selected_map: null,
      selected_navi: null,
      selected_item: null,
    }
  },

  created() {
    this.getAllMap()
  },

  methods: {
    async startService() {
      if (this.selected_map == null) {
        alert("请选择地图！")
      } else if (this.selected_navi == null) {
        alert("请选择航点！")
      } else if (this.selected_item == null) {
        alert("请选择服务！")
      } else {
        //TODO: 向后端发送开始服务指令
        if (this.selected_item == "取物") {
            await get_it({
              name: this.selected_navi
            })
        } else if (this.selected_item == "导航") {
            await goto(({
              name: this.selected_navi
            }))
        }
      }
    },

    async finish() {
      await finish_serve()

      await this.$router.push({path: '/main'});
    },

    async map_change() {
      
    },

    async getAllMap() {
      let vm = this
      let res = await get_map_list()
      console.log(res.data)
      this.map_list = res.data.images
    },

    async getAllNode() {
      let res = await get_all_node({
        "mapName": this.selected_map
      })

      this.navi_list = res.data.node_list
      //await sleep(1000)

     // this.$store.commit('setMapName', this.selected_map)

      // await begin_mark({
      //   mapName: this.selected_map,
      // })
      await begin_serve({
        mapName: this.selected_map,
      })
    }
  },

}
</script>

<style scoped>

</style>