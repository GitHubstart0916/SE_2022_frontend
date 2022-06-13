<template>
  <v-app>
    <v-row justify="center" style="height: 0">
      <v-col md="6">
        <v-text-field
            v-model="username"
            label="用户名"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 10px">
      <v-col md="6">
        <v-text-field
            v-model="id"
            label="编号"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row justify="center" style="height: 10px">
      <v-col md="6">
        <v-text-field
            v-model="mail"
            label="邮箱"
            readonly
        ></v-text-field>
      </v-col>
    </v-row>
<!--    <v-row justify="center" style="height: 10px">-->
<!--      <v-col md="6">-->
<!--        <v-text-field-->
<!--            v-model="phone_number"-->
<!--            label="电话号码"-->
<!--            readonly-->
<!--        ></v-text-field>-->
<!--      </v-col>-->
<!--    </v-row>-->
<!--    <v-row justify="center" style="height: 10px">-->
<!--      <v-col md="6">-->
<!--        <v-text-field-->
<!--            v-model="birthday"-->
<!--            label="生日"-->
<!--            readonly-->
<!--        ></v-text-field>-->
<!--      </v-col>-->
<!--    </v-row>-->
  </v-app>
</template>

<script>
import {getUserInfo, login} from "@/api/user";

export default {
  name: "user_info",

  data() {
    return {
      username: '114',
      id: 514,
      mail: '1919810@buaa.edu.cn',
      phone_number: '',
      birthday: null,
    }
  },

  created() {
    this.get_info()
  },

  methods: {
    async get_info() {
      let res = await getUserInfo()
      console.log(res)
      this.username = res.data.UserName
      this.id = res.data.Id
      this.mail = res.data.Email
      // this.phone_number = user_data.phone
      // this.birthday = user_data.date
    }
  },
}
</script>

<style scoped>

</style>