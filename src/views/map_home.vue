<template>
  <v-app>
    <v-row justify="center" style="height: 10px">
      <h1>
        地图管理
      </h1>
    </v-row>

    <v-row justify="center" align="center">
      <v-img
          :key="cnt"
          :src="image_url"
          max-height="400"
          max-width="400"
      ></v-img>
    </v-row>

    <v-row justify="center" style="height: 10px">
      <v-col
          class="d-flex"
          cols="12"
          sm="6">
        <v-select
            :items="map_list"
            label="选择地图"
            dense
            v-model="selected_item"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center" class="row_of_btn">
      <v-card-actions>
        <v-btn @click="newMap">
          新建地图
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn @click="openMap">
          打开地图
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn @click="delMap">
          删除地图
        </v-btn>
      </v-card-actions>
      <v-card-actions>
        <v-btn @click="addNode">
          添加标注
        </v-btn>
      </v-card-actions>
    </v-row>
  </v-app>
</template>

<script>
import {get_map_list, get_map_url} from "@/api/map";
import {getUserID} from "@/api/user";
import {begin_mark, creat_map} from "@/api/ros";

export default {
  name: "map_home",

  // created() {
  //   this.getAllMap()
  // },

  data() {
    return {
      map_list: null,
      selected_item: "",
      image_url: "",
      hasImage: false,
      cnt: 0
    }
  },

  created() {
    this.getAllMap()
  },

  methods: {
    async newMap() {
      // TODO: 向后端发送开始建图指令，等待返回值
      if (/* 开启建图失败 */1 == 2) {
        alert("机器人开启建图失败！请检查！")
      } else {
        await this.$router.push({path: '/create_map'});
        await creat_map()
      }
    },

    async openMap() {
      if (this.selected_item == "") {
        alert("请选择一张地图！")
      } else {
        let res = await get_map_url({
          mapName: this.selected_item
        })
        this.image_url = res.data.url
        console.log(this.image_url)
        this.cnt = this.cnt + 1
      }
    },

    async delMap() {
      if (this.selected_item == "") {
        alert("请选择一张地图！")
      } else {
        let res = await delete_map({
          // TODO: 填写删除地图请求格式
        })
        if (res.data.status == 200) {
          alert("删除成功！")
          this.$router.go(0) // 刷新页面
        } else {
          alert("后端删除失败！")
        }
      }
    },

    async addNode() {
      if (this.selected_item == "") {
        alert("请选择一张地图！")
      } else {
        // TODO: 向后端发送进入标注指令
        this.$store.commit('setMapName', this.selected_item)

        await this.$router.push({path: '/create_node'});
        await begin_mark({
          mapName: this.selected_item,
        })
      }
    },

    async getAllMap() {
      let vm = this
      let res = await get_map_list()
      console.log(res.data)
      this.map_list = res.data.images
    }
  },

}
</script>

<style scoped lang="css">

.row_of_btn {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1rem;
  padding-left: 10rem;
  padding-right: 10rem;
}

.all {
  margin-top: 9rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.form {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.input {
  width: 30rem;
  height: 5rem;
}

</style>