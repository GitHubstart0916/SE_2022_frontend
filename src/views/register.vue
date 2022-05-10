<template>
  <v-row align="center" justify="center">
    <v-col md="6">

      <v-card elevation="4" outlined shaped>
        <v-col>
          <v-row align="center" justify="center">
            <v-card-title>
              注册
            </v-card-title>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-text-field name="username"
                            v-model="username"
                            label="用户名"
                            hide-details="auto"
                            :rules="[rules.required,rules.lenRequire]"></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-text-field name="nickname"
                            v-model="nickname"
                            label="昵称"
                            :rules="[rules.required]"
                            hide-details="auto"></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-text-field name="userEmail"
                            v-model="userEmail"
                            label="邮箱"
                            :rules="[rules.required]"
                            hide-details="auto"></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-text-field name="phone"
                            v-model="phone"
                            label="电话号码"
                            :rules="[rules.required]"
                            hide-details="auto"></v-text-field>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-text-field name="password"
                            v-model="password"
                            label="密码"
                            :rules="[rules.required]"
                            hide-details="auto"
                            :type="hidePassword ? 'password' : 'text'"
                            :append-icon="hidePassword ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="hidePassword = !hidePassword"
              ></v-text-field>
              <v-card-title>

              </v-card-title>
              <v-progress-linear v-model="password.length==0?0:password.length<7?30: password.length < 15?60:100">
              </v-progress-linear>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-text-field name="passwordAgain"
                            v-model="passwordAgain"
                            label="确认密码"
                            :rules="[rules.required,rules.compare]"
                            hide-details="auto"
                            :type="hidePasswordAgain ? 'password' : 'text'"
                            :append-icon="hidePasswordAgain ? 'mdi-eye-off' : 'mdi-eye'"
                            @click:append="hidePasswordAgain = !hidePasswordAgain"
              ></v-text-field>
            </v-col>
          </v-row>


          <v-row align="center" justify="center">
            <v-col md="6">
              <template>
                <div>
                  <v-menu
                      ref="menu"
                      v-model="menu"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      min-width="auto"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                          v-model="date"
                          label="Birthday date"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="date"
                        :active-picker.sync="activePicker"
                        :max="(new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)"
                        min="1950-01-01"
                        @change="save"
                    ></v-date-picker>
                  </v-menu>
                </div>
              </template>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="6">
              <v-checkbox
                  v-model="checkbox"
                  :label="`我已阅读并同意用户须知`"
              ></v-checkbox>
            </v-col>
          </v-row>

          <v-row align="center" justify="center">
            <v-col md="3">
              <v-btn
                  outlined
                  rounded
                  text
                  color="deep-purple lighten-2"
                  @click="myRegister"
              >
                注册
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-col>

  </v-row>
</template>

<script>
import {register} from "@/api/user";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "register",

  data() {
    return {
      passwordValue: 10,
      rules: {
        required: value => !!value || 'Required.',
        lenRequire: value => value.length <= 10 || '长度过长',
        compare: value => value === this.password || '两次输入密码不一样',
      },
      checkbox: false,
      activePicker: null,
      date: null,
      menu: false,
      dialog: false,
      hidePasswordAgain: true,
      hidePassword: true,
      username: '',
      nickname: '',
      userEmail: '',
      password: '',
      passwordAgain: '',
      phone: '',
    };
  },

  watch: {
    menu (val) {
      val && setTimeout(() => (this.activePicker = 'YEAR'))
    },
  },

  methods: {
    save (date) {
      this.$refs.menu.save(date)
    },

    async myRegister() {
      let vm = this;
      if (!vm.checkbox) {
        alert("请阅读用户须知");
        return
      }
      if (vm.password !== vm.passwordAgain) {
        alert("两次密码输入不正确");
        return
      }
      let res = await register({
        username: vm.username,
        password: vm.password,
        nickname: vm.nickname,
        email: vm.userEmail,
        phone: vm.phone,
        birthday: vm.date,
      });
      if (res.data.code === 0) {
        alert("success");
        this.$router.push({path: '/login'});
      }
    }
  }
}
</script>

<style scoped>

</style>