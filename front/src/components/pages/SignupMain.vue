<template>
  <div class="maincontainer">
    <div class="topEmpty"></div>
    <span>
      <router-link to="/SignupGuide" class="btn btn-primary"
        >가이드 회원가입</router-link
      >
    </span>
    <span class="midEmpty"></span>
    <span
      ><router-link to="/Signup" class="btn btn-success"
        >일반 회원가입</router-link
      ></span
    >

    <div class="botEmpty"></div>
  </div>
</template>
<script>
export default {
  name: "Signupselect",
};
</script>
<style>
.btn {
  font-size: 45px;
}
.topEmpty {
  height: 30vh;
}
.maincontainer {
  text-align: center;
}
.midEmpty {
  display: inline-block;
  width: 150px;
}
.botEmpty {
  height: 30vh;
}
</style>
