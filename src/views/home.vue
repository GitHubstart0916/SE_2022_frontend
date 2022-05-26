<template>
  <v-app>
    <v-app-bar app color="blue-grey darken-2" dark>
      <v-container>
        <v-row type="flex" align="center">
          <v-col cols="1">
            <v-img
                alt="Logo"
                class="shrink mr-2"
                contain
                src="@/assets/logo.jpg"
                transition="scale-transition"
                min-width="70"
                width="70"
                style="cursor:pointer"
                @click="toHome"
            >
            </v-img>
          </v-col>
          <v-col cols="2">
            <v-img
                alt="Name"
                class="shrink mt-1"
                contain
                min-width="100"
                src="@/assets/name.png"
                width="200"
                style="cursor:pointer"
                @click="toHome"
            />
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="1">
            <v-btn x-large app collapse-on-scroll @click="mapBtnClicked"> 地图 </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn x-large app collapse-on-scroll @click="serviceBtnClicked"> 服务 </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn x-large app collapse-on-scroll @click="settingsBtnClicked"> 设置 </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn x-large app collapse-on-scroll to="/login"> 登陆 </v-btn>
          </v-col>
          <v-col cols="1">
            <v-btn x-large app collapse-on-scroll @click="myLogout" to="/login"> 注销 </v-btn>
          </v-col>
          <v-col cols="2">
            <v-card color="#385F73" style="cursor:pointer">
              <v-card-subtitle>
                <v-icon>mdi-account</v-icon>
                {{ $store.getters.TokenStored ? '已经登录' : '您尚未登陆' }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { logout } from "@/api/user.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home",

  data () {
    return {
      Nickname: '',
    }
  },

  methods: {
    toHome() {
      this.$router.push("/main").catch((error) => {
        console.log('已在主页')
      });
    },

    async myLogout() {
      const Token = this.$store.getters.TokenStored;
      if ( Token ) {
        await logout();
        this.$store.commit('logout')
        alert('注销成功！')
      } else {
        alert('您尚未登陆')
      }
    },

    async mapBtnClicked() {
      const Token = this.$store.getters.TokenStored;
      if (Token) {
        await this.$router.push({path:'/map_home'})
      } else {
        alert('请先登录')
      }
    },

    async serviceBtnClicked() {
      const Token = this.$store.getters.TokenStored;
      if (Token) {
        await this.$router.push({path:'/service_home'})
      } else {
        alert('请先登录')
      }
    },

    async settingsBtnClicked() {
      const Token = this.$store.getters.TokenStored;
      if (Token) {
        await this.$router.push({path:'/settings_home'})
      } else {
        alert('请先登录')
      }
    }
  },
};
</script>

<style scoped>
.bar{
  margin:5px 5px 5px 5px;
}
</style>
