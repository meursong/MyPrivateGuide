<template>
  <div class="container mt-3 mainContainer" style="width: 600px">
    <h3 class="title titleCenter headTitle">일반 회원가입</h3>
    <form id="form" @submit.prevent>
      <!-- id -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">*아이디</span>
        <input
          type="text"
          class="form-control"
          id="id"
          v-model="acc.id"
          @blur="idValid"
          placeholder="(필수)아이디를 입력해주세요."
        />
      </div>

      <div v-if="!idValidFlag" style="color: red">
        4~12자리의 영문,숫자만 사용 가능합니다.
      </div>

      <!-- password -->
      <div class="input-group mb-2" style="margin-top: 10px">
        <span class="input-group-text title inputWidth">*비밀번호</span>
        <input
          type="text"
          class="form-control"
          id="password1"
          v-model="acc.password"
          @blur="pwValid"
          placeholder="(필수)비밀번호를 입력해주세요."
        />
      </div>

      <div v-if="!pwValidFlag" style="color: red">
        6~12자리로 영문 대·소문자,숫자가 각각 한개이상 포함되어야 합니다.
      </div>

      <!-- password check -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">*비밀번호 확인</span>
        <input
          type="text"
          class="form-control"
          id="password2"
          v-model="passwordCheck"
          @blur="passwordCheckValid"
          placeholder="(필수)비밀번호를 확인해주세요."
        />
      </div>

      <div v-if="!pwCheckFlag" style="color: red">
        입력한 비밀번호와 일치하지 않습니다.
      </div>

      <!-- name -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">이름</span>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="acc.name"
          maxlength="10"
          placeholder="(필수)이름을 입력해주세요."
        />
      </div>

      <!-- birthday -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">생년월일</span>
        <input type="date" class="form-control" id="date" v-model="acc.bday" />
      </div>

      <!-- gender -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">성별</span>
        <select name="" id="" class="form-select" v-model="acc.gender">
          <option value="male">남자</option>
          <option value="female">여자</option>
        </select>
      </div>

      <!-- email -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">이메일</span>
        <input
          type="text"
          class="form-control"
          id="email"
          v-model="acc.email"
          placeholder="이메일을 입력해주세요."
        />
      </div>

      <!-- phonenumber -->
      <div class="input-group mb-2">
        <span class="input-group-text title inputWidth">전화번호</span>
        <input
          type="text"
          class="form-control"
          maxlength="11"
          v-model="acc.pNum"
          placeholder="(필수)휴대폰 번호를 입력해주세요('-'생략)"
        />
      </div>
      <div class="daummap">
        <div class="input-group mb-2">
          <span class="input-group-text title inputWidth">우편번호</span>
          <input class="form-control" v-model="acc.zip" readonly />
          <button @click="showApi">주소 검색</button>
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text title inputWidth">기본주소</span>
          <input class="form-control" v-model="acc.addr1" readonly />
        </div>
        <div class="input-group mb-2">
          <span class="input-group-text title inputWidth">상세주소</span>
          <input
            type="text"
            class="form-control"
            v-model="acc.addr2"
            placeholder="나머지 주소를 입력해주세요"
          />
        </div>
        <div ref="embed"></div>
      </div>

      <div class="d-grid">
        <button
          type="submit"
          class="btn btn-secondary btn-block"
          style="font-size: 20px"
          v-on:click="submitForm"
        >
          회원가입
        </button>
      </div>
    </form>
    <div class="toast show" v-if="show">
      <div class="toast-header">
        <strong class="me-auto">
          {{ result.success ? "회원가입" : "회원가입오류" }}
        </strong>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          v-on:click="show = false"
        ></button>
      </div>
      <div class="toast-body">
        {{ result.message }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Singup",
  data: function () {
    return {
      acc: {
        id: "",
        password: "",
        name: "",
        email: "",
        bday: "",
        gender: "",
        pNum: "",
        zip: "",
        addr1: "",
        addr2: "",
      },

      idValidFlag: true,
      pwValidFlag: true,
      passwordCheck: "",
      pwCheckFlag: true,
      genderList: [
        { value: "M", text: "남성" },
        { value: "F", text: "여성" },
      ],
      show: false,
      result: { success: false, message: "" },
    };
  },

  methods: {
    idValid() {
      if (/^[A-Za-z0-9_-]{4,12}$/.test(this.acc.id)) {
        this.idValidFlag = true;
      } else {
        this.idValidFlag = false;
      }
    },
    pwValid() {
      if (
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$/.test(this.acc.password)
      ) {
        this.pwValidFlag = true;
      } else {
        this.pwValidFlag = false;
      }
    },
    passwordCheckValid() {
      if (this.acc.password === this.passwordCheck) {
        this.pwCheckFlag = true;
      } else {
        this.pwCheckFlag = false;
      }
    },
    showApi() {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullRoadAddr = data.roadAddress;
          let extraRoadAddr = "";
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraRoadAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraRoadAddr +=
              extraRoadAddr !== ""
                ? ", " + data.buildingName
                : data.buildingName;
          }
          if (extraRoadAddr !== "") {
            extraRoadAddr = " (" + extraRoadAddr + ")";
          }
          if (fullRoadAddr !== "") {
            fullRoadAddr += extraRoadAddr;
          }
          this.acc.zip = data.zonecode;
          this.acc.addr1 = fullRoadAddr;
        },
      }).embed(this.$refs.embed);
    },
    submitForm() {
      if (
        this.idValidFlag == false ||
        this.pwValidFlag == false ||
        this.pwCheckFlag == false
      ) {
        alert("빈칸을 채워주세요");
        return false;
      }
      fetch("http://localhost:3002/makeuseracc", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ acc: this.acc }),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok");
        })
        .then((data) => {
          this.show = true;
          if (data.res == 0) {
            this.result.success = false;
            this.result.message = "회원가입에 오류가 발생했습니다.";
          } else {
            this.result.success = true;
            this.result.message = "회원가입을 성공했습니다.";
          }
        })
        .catch((error) => {
          console.log(error);
        });
      console.log(this.acc);
    },
  },
};
</script>
<style>
.inputWidth {
  width: 150px;
}
.titleCenter {
  text-align: center;
}
.mainContainer {
  padding-top: 50px;
  padding-bottom: 40vh;
}

.headTitle {
  padding: 20px;
}
</style>
