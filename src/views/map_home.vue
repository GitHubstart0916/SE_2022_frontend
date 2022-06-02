<template>
  <v-app>
    <v-row justify="center" style="height: 10px">
      <h1>
        地图管理
      </h1>
    </v-row>

    <v-row justify="center" style="height: 10px">
      <v-col
          class="d-flex"
          cols="12"
          sm="6">
        <v-select
            :items="items"
            label="选择地图"
            dense
            v-model="selected_item"
        ></v-select>
      </v-col>
    </v-row>

    <v-row justify="center" class="row_of_btn">
      <v-card-actions>
        <v-btn to="/create_map">
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
    </v-row>
  </v-app>
</template>

<script>
export default {
  name: "map_home",

  data() {
    return {
      items: null,
      selected_item: "",
    }
  },

  methods: {
    async newMap() {

    },

    async openMap() {
      if (this.selected_item == "") {
        alert("请选择一张地图！")
      } else {

      }
    },

    async delMap() {
      if (this.selected_item == "") {
        alert("请选择一张地图！")
      } else {

      }
    },
  },

  created: async function () {
    // TODO: 获取地图列表
  }
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