<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-img
          src="@/assets/node.jpg"
          max-height="400"
          max-width="400"
      ></v-img>
    </v-row>
    <v-row justify="center" align="center">
      <v-dialog
          v-model="dialog"
          persistent
          max-width="290"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-row class="row_of_btn" justify="center" align="center">
            <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                @click="add"
            >
              请移动机器人至标注点后点击
            </v-btn>
          </v-row>
        </template>
        <v-card>
          <v-col md="12" align-self="center">
            <v-row justify="center" align="center">
              <p class="text-center font-italic" style="margin-top: 2rem; font-size:20px">
                为你的航点取个名字吧
              </p>
            </v-row>

            <v-text-field class="input"
                          append-icon="mdi-account"
                          name="username"
                          v-model="node_name"
                          label="航点名字"
                          hide-details="auto"
            ></v-text-field>

            <v-row justify="center" align="center">
              <v-btn
                  color="green darken-1"
                  text
                  @click="doAddNode"
              >
                确认
              </v-btn>
            </v-row>

          </v-col>
        </v-card>
      </v-dialog>
    </v-row>

    <v-row class="row_of_btn" justify="center" align="center">
      <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
          @click="finish"
      >
        结束标注
      </v-btn>
    </v-row>
  </v-app>
</template>

<script>
import {add_node, finish_mark} from "@/api/ros";

export default {
  name: "create_node",

  data() {
    return {
      dialog: false,
      node_name: '',
    };
  },


  methods: {
    async toHome() {
      this.$router.push("/main").catch((error) => {
        console.log('已在主页')
      });
    },

    async add() {
      //TODO:
      if (1) {
        alert("建立航点成功")

      } else {
        location.reload();
      }
    },

    async doAddNode() {
      this.dialog = false
      //TODO:
      //await this.$router.push({path: '/main'});

      const MapName = this.$store.getters.MapName;
      await add_node({
        mapName: MapName,
        nodeName: this.node_name,
      })
    },

    async finish() {
      const MapName = this.$store.getters.MapName;
      await finish_mark({
        mapName: MapName
      })
      this.$store.commit("removeMapName")
      await this.$router.push({path: '/main'});
    }

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