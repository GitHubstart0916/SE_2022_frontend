<template>
  <v-app>
    <v-row justify="center" style="height: 150px">
      <v-col md="6">
        <v-text-field
            v-model="username"
            label="用户名"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 150px">
      <v-col md="6">
        <v-text-field
            v-model="nickname"
            label="昵称"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 150px">
      <v-col md="6">
        <v-text-field
            v-model="mail"
            label="邮箱"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 150px">
      <v-col md="6">
        <v-text-field
            v-model="phone_number"
            label="电话号码"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 150px">
      <v-col md="6">
        <v-text-field
            v-model="birthday"
            label="生日"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import {getUserInfo} from "@/api/user";

export default {
  name: "user_info",

  data() {
    return {
      username: '114',
      nickname: '514',
      mail: '1919810@buaa.edu.cn',
      phone_number: '',
      birthday: null,
    }
  },

  // created() {
  //   let user_data = getUserInfo()
  //   this.username = user_data.username
  //   this.nickname = user_data.nickname
  //   this.mail = user_data.userEmail
  //   this.phone_number = user_data.phone
  //   this.birthday = user_data.date
  // }
}
</script>

<style scoped>

</style>