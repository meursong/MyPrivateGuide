<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light"
    style="position: sticky; left: 0; top: 0; right: 0; z-index: 100"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/" style="font-size: 40px"
        ><img src="@/assets/logo/anka.png" id="logImg"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/"
              style="margin-left: 2px"
              >Service</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/Partner"
              style="margin-left: 20px"
              >Partner</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/Private"
              style="margin-left: 20px"
              >Private</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/Board"
              style="margin-left: 20px"
              >Board</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active"
              aria-current="page"
              href="/SignupMain"
              style="margin-left: 20px"
              >Sign Up</a
            >
          </li>
        </ul>

        <!-- login -->

        <form
          id="loginForm"
          style="width: 200px; text-align: right"
          v-on:submit.prevent="loginForm"
          v-if="show"
        >
          <table>
            <tr>
              <th>
                <label for="id" class="form-label" style="font-size: 8px"
                  >ID:</label
                >
              </th>
              <td>
                <input
                  type="text"
                  class="form-control"
                  id="logInid"
                  placeholder="아이디를 입력하세요"
                  name="id"
                  style="font-size: 8px"
                  v-model="logInAcc.id"
                />
              </td>
            </tr>
            <tr>
              <th>
                <label for="password" class="form-label" style="font-size: 8px"
                  >Password:</label
                >
              </th>
              <td>
                <input
                  type="password"
                  class="form-control"
                  id="logInpassword"
                  placeholder="비밀번호를 입력하세요"
                  name="password"
                  style="font-size: 8px"
                  v-model="logInAcc.password"
                />
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <input
                  type="submit"
                  id="login"
                  style="
                    width: 50px;
                    height: 20px;
                    font-size: 5px;
                    font-align: center;
                    margin: 0 auto;
                  "
                  value="로그인"
                />
              </td>
            </tr>
          </table>
        </form>
        <form id="logoutForm" v-if="!show" v-on:submit.prevent="submitForm2">
          <table>
            <tr>
              <td></td>
              <td style="font-size: 18px">{{ logInAcc.id }}님</td>
            </tr>
            <tr>
              <td style="text-align: right">
                <a
                  href="/GuidePage"
                  class="btn btn-outline-dark align-middle"
                  id="mypage"
                  >마이페이지</a
                >
              </td>
              <td style="text-align: right">
                <button
                  type="submit"
                  class="btn btn-outline-dark align-middle"
                  id="logout"
                >
                  로그아웃
                </button>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Header",
  data: function () {
    return {
      logInAcc: {
        id: "",
        password: "",
      },
      show: true,
      loginResult: false,
      // lshow: false,
      // result: { success: false, message: "" },
    };
  },
  mounted() {
    if (sessionStorage.getItem("show") == "false") {
      this.show = false;
      this.logInAcc.id = sessionStorage.getItem("id");
    } else this.show = true;
    console.log(this.show);
  },
  methods: {
    loginForm: function () {
      if (/^[A-Za-z0-9_-]{4,12}$/.test(this.logInAcc.id)) {
        console.log(this.logInAcc);
      } else {
        alert("유효하지않은 아이디입니다.");
      }
      fetch("http://localhost:3002/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ logInAcc: this.logInAcc }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok");
        })
        .then((data) => {
          console.log(data);
          if (data.res.length == 0) {
            alert("아이디나 비밀번호를 확인하세요");
          } else {
            this.show = false;
            //session에 id와 password를 넣고
            sessionStorage.setItem("id", this.logInAcc.id);
            sessionStorage.setItem("show", false);
            this.$router.push("/");
          }
        });
    },
    submitForm2: function () {
      alert("안녕히 가세요.");
      this.show = true;
      this.logInAcc.id = "";
      this.logInAcc.password = "";
      sessionStorage.setItem("show", true);
    },
  },
};
</script>
<style>
#logImg {
  width: 170px;
}
#logout {
  width: 80px;
  height: 35px;
  font-size: 5px;
}
#mypage {
  width: 80px;
  height: 35px;
  font-size: 5px;
  font-display: ;
}
</style>
