<template>
  <v-app class="all">
    <!--    <i class="fab fa-accessible-icon"></i>-->
    <v-row justify="center" align="center">
      <v-col md = "6">
        <v-card elevation="4" outlined shaped>
          <p class="text-center font-italic" style="margin-top: 2rem; font-size:25px">
            Electric123123
          </p>

          <v-form class="form">
            <v-text-field class="input"
                          append-icon="mdi-account"
                          name="username"
                          v-model="username"
                          label="用户名"
                          hide-details="auto"
            ></v-text-field>

            <v-text-field
                class="input"
                :type="hidePassword ? 'password' : 'text'"
                :append-icon="hidePassword ? 'mdi-eye-off' : 'mdi-eye'"
                name="password"
                v-model="password"
                label="密码"
                @keyup.enter="myLogin"
                id="password"
                hide-details="auto"
                @click:append="hidePassword = !hidePassword"
            ></v-text-field>
          </v-form>


          <v-row class="row_of_btn">
            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
                  color="green darken-2"
                  @click="myLogin"
              >
                登录
              </v-btn>
            </v-card-actions>

            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
                  color="deep-purple lighten-2"
                  to="/forget_pswd"
              >
                忘记密码
              </v-btn>
            </v-card-actions>

            <v-card-actions>
              <v-btn
                  outlined
                  rounded
                  text
                  color="deep-purple lighten-2"
                  to="/register"
              >
                注册
              </v-btn>
            </v-card-actions>
          </v-row>


        </v-card>
      </v-col>

    </v-row>

  </v-app>
</template>

<script>
import { login, getUserInfo } from "@/api/user.js";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "login",

  data() {
    return {
      username: '',
      password: '',
      hidePassword: true,
      error: false,
    };
  },

  methods: {
    async myLogin() {
      let vm = this;
      let res = await login({
        username: vm.username,
        password: vm.password,
      });
      console.log('yes')
      if (res.data.code == 0) {
        alert('success')
      }
      if (res.data.token) {
        this.$store.commit('setToken', res.data.token)
        //TODO: 完善getUserInfo
        // let user = await getUserInfo()
        // this.$store.commit('setUser', user.data)
        await this.$router.push({path: '/main'})
      } else {
        alert(res.data.message)
      }
    },

    async reserve() {
      //TODO:实现修改密码和忘记密码
    },
  },
};
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