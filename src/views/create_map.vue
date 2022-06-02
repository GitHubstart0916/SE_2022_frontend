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
import {finish_create_map} from "@/api/user";

export default {
  name: "create_map",

  data() {
    return {
      create_success: null,
      dialog: false,
      map_name: "",
    }
  },

  methods: {
    async finishCreateMap() {
      if (this.map_name == "") {
        alert("地图名不能为空！")
      } else {
        let res = await finish_create_map({Name: this.map_name})
        this.dialog = false
        if (res.data.status == 200) {
          alert("建图成功！")
          await this.$router.push({path: '/map_home'});
        } else if(res.data.status == 400) {
          alert("命名重复！请重新命名！")
        } else {
          alert("发生其它错误，本次建图失败，请退出建图页面后重新进入建图。")
          await this.$router.push({path: '/map_home'});
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