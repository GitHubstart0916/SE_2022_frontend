<template>
  <v-app>
    <v-row justify="center" style="height: 10px">
      <h1>
        建图中
      </h1>
    </v-row>
    <v-row justify="center" style="height: 10px">
      请操作机器人建图，建图完成后点击下方“完成建图”按钮。
    </v-row>
    <v-dialog
        v-model="dialog"
        max-width="500px"
        persistent
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            color="primary"
            dark
            v-bind="attrs"
            v-on="on"
        >
          完成建图
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">给地图起个名吧</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                    label="地图名"
                    required
                    v-model="map_name"
                    :rules="[rules.mapLenRequire]"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              color="blue darken-1"
              text
              @click="dialog = false"
          >
            取消
          </v-btn>
          <v-btn
              color="blue darken-1"
              text
              @click="finishCreateMap"
          >
            确认
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>

import {save_map, trans} from "@/api/ros";
import {sleep} from "@/api/user";

export default {
  name: "create_map",

  data() {
    return {
      create_success: null,
      dialog: false,
      map_name: "",
      rules: {
        mapLenRequire: value => value.length <= 50 || '地图名长度过长',
      }
    }
  },



  methods: {

    async finishCreateMap() {
      if (this.map_name == "") {
        alert("地图名不能为空！")
      } else if (this.map_name.length > 50) {
        alert("地图名长度过长！")
      } else {
        let res = await save_map({
          name: this.map_name,
        })
        console.log(res.status)
        await sleep(3000);
        res = await trans({
          name: this.map_name,
        })
        console.log(res.status)
        this.dialog = false
        if (res.status === 200) {
          alert("建图成功")
          await this.$router.push({path: '/main'});
        }
      }

    }
  },

  created: async function () {
    let res = await start_create_map()
    if (res.data.status) { // TODO: 后端返回开启建图状态
      this.create_success = true
    } else {
      this.create_success = false
      alert("后端启动建图失败！请返回上页！")
      await this.$router.push({path: '/map_home'});
    }

  }
}
</script>

<style scoped>

</style>