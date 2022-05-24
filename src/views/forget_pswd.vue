<template>
  <v-app>
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card elevation="4" outlined shaped>
          <p class="text-center font-italic" style="margin-top: 2rem; font-size: 25px">
            忘记密码
          </p>

          <v-form class="form">
            <v-text-field class="input"
                          append-icon="mdi-account"
                          name="username"
                          v-model="username"
                          label="用户名"
                          hide-details="auto"
                          :rules="[rules.required,rules.lenRequire]"
            >
            </v-text-field>

            <v-row md="10">
              <v-col md="10">
                <v-text-field class="input"
                              name="veri_code"
                              v-model="veri_code"
                              label="邮箱收到的验证码"
                              :rules="[rules.required]"
                              hide-details="auto"
                >
                </v-text-field>
              </v-col>
              <v-col md="2">
                <v-btn outlined rounded text color="red"
                       @click="getVerificationCode">
                  发送验证码
                </v-btn>
              </v-col>
            </v-row>

            <v-text-field
                class="input"
                :type="hide_pswd ? 'password' : 'text'"
                :append-icon="hide_pswd ? 'mdi-eye-off' : 'mdi-eye'"
                name="new_pswd"
                v-model="new_pswd"
                label="新密码"
                hide-details="auto"
                @click:append="hide_pswd = !hide_pswd"
                :rules="[rules.required]"
            ></v-text-field>

            <v-text-field
                class="input"
                :type="hide_pswd_confirm? 'password' : 'text'"
                :append-icon="hide_pswd_confirm ? 'mdi-eye-off' : 'mdi-eye'"
                name="new_pswd_confirm"
                v-model="new_pswd_confirm"
                label="确认新密码"
                hide-details="auto"
                @click:append="hide_pswd_confirm = !hide_pswd_confirm"
                :rules="[rules.required,rules.compare]"
            ></v-text-field>

          </v-form>

          <v-row class="row_of_btn">
            <v-btn outlined rounded text color="red"
                   @click="forgetPassword">
              重置密码
            </v-btn>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import {get_verification_code} from "@/api/user";

export default {
  name: "forget_pswd",

  data() {
    return {
      username: '',
      veri_code: '',
      new_pswd: '',
      new_pswd_confirm: '',
      hide_pswd: true,
      hide_pswd_confirm: true,
      rules: {
        required: value => !!value || 'Required.',
        lenRequire: value => value.length <= 10 || '长度过长',
        compare: value => value === this.new_pswd || '两次输入密码不一样',
      }
    };
  },

  methods: {
    async getVerificationCode() {
      if (this.username == '') {
        alert('未输入用户名！')
        return
      }
      // TODO: 向后端发送用户名，请求发送验证码
      let res = get_verification_code({
        UserName: this.username,
      })
      if (res.data.code == 0) {
        alert("success");
        await this.$router.push({path: '/login'});
      }
      alert("你在演我")
    },

    async forgetPassword() {
      let vm = this
      if (vm.username == '') {
        alert("请输入用户名");
        return
      }
      if (vm.new_pswd == '') {
        alert("请输入密码");
        return
      }
      if (vm.new_pswd !== vm.new_pswd_confirm) {
        alert("两次密码输入不正确");
        return
      }
      if (vm.veri_code == '') {
        alert("请输入验证码");
        return
      }
      let res = await reset_password({
        Token: vm.veri_code,
        NewPassword: vm.new_pswd,
      })
      // TODO: 向后端打包所有信息并发送
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