  <template>
  <div class="myContainer">
    <h1>乐趣生活</h1>
    <form>
      <input type="text" placeholder="用户名" v-model="userInfo.accesstoken">
      <mt-button type="primary" size="large" class="loginBtn" @click="login">登录</mt-button>
    </form>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      userInfo: {
        accesstoken: ""
      }
    };
  },
  mounted() {
    // const ld = JSON.parse(localStorage.getItem('loginData'));
    // if (ld) {
    //   this.$store.dispatch('loginSuc', ld);
    // }
  },
  methods: {
    // login() {
    //   this.$store.dispatch("loginFuc", this.userInfo);
    // }
    login() {
      // console.log(this.userInfo);
      if (this.userInfo.accesstoken.trim().length === 0) {
        return Toast({
          message: "请输入用户名",
          position: "middle",
          duration: 1000
        });
      }
      this.$http
        .post("https://cnodejs.org/api/v1/accesstoken", {
          accesstoken: this.userInfo.accesstoken.trim()
        })
        .then(result => {
          // this.$nextTick(() => {
            if (result.body.success == true) {
              // console.log(result.body);
              localStorage.setItem('loginData', JSON.stringify(result.body));
              Toast({
                message: "登录成功",
                position: "middle",
                duration: 1000
              });
              setTimeout(() => {
                this.$router.push({
                  name: "myself",
                });
              }, 1500);
            } else {
              Toast({
                message: "登录失败",
                position: "middle",
                duration: 1000
              });
            }
          // });
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.myContainer {
  padding: 0 20px;
  h1 {
    font-size: 30px;
    text-align: center;
    margin-top: 140px;
  }
  input {
    margin-top: 50px;
    height: 36px;
    border-radius: 18px;
    font-size: 14px;
    background-color: #f2f2f2;
    border: none;
    outline: none;
  }
  .loginBtn {
    height: 36px;
    font-size: 14px;
    margin: 40px auto;
    border-radius: 18px;
  }
}
</style>

