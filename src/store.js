import Vue from 'vue';
import Vuex from 'vuex';
import { Toast } from 'mint-ui'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginFlag: false,
    userInfo: {}
  },
  mutations: {
    loginFuc: (state) => {
      console.log(this); //undefined?????
      this.$router.push({ name: 'user' });
    },
    loginSuc: (state, ld) => {
      state.loginFlag = true;
      state.userInfo = ld;
      this.$router.push({ name: 'user' })
    }
  },
  actions: {
    loginFuc: ({ commit }, textData) => {
      if (textData.accesstoken === '') {
        return Toast({
          message: "用户名不能为空",
          position: "middle",
          duration: 1000
        });
      }
      Vue.http.post('https://cnodejs.org/api/v1/accesstoken', { accesstoken: textData.accesstoken.trim()}).then(result => {
        if (result.body.success == true) {
          localStorage.setItem('loginData', JSON.stringify(result.body));
          Toast({
            message: "登录成功",
            position: "middle",
            duration: 1000
          });
          setTimeout(commit('loginFuc'), 2000);
        } else {
          Toast({
            message: "用户名错误",
            position: "middle",
            duration: 1000
          });
        }
      })
    },
    loginSuc: ({ commit }, ld) => {
      commit('loginSuc', ld);
    }
  }
});
