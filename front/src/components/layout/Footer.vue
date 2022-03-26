<template>
  <!-- <div>
     <span>
      <div><h3 style="margin-left: 20vw">MPG</h3></div>
    </span>
    <div class="copyRight">
      Copyright 2022. ankandsong, Co., Ltd. All rights reserved
    </div>
  </div> -->
  <div class="container">
    <div>
      <div class="copyRight" style="font-size: 20px">파트너 가이드 문의</div>
      <div class="copyRight">메일 : mypg@gmail.com</div>
      <div class="copyRight">대표번호 : 02-1111-2222</div>
      <br />
      <div class="copyRight">
        Copyright &copy; since 2022. ankandsong, Co., Ltd. All rights reserved
      </div>

      <div class="logos">
        <a target="_blank" href="https://twitter.com"
          ><img src="../../../src/assets/icon/twitter.png" class="img"
        /></a>
        <a target="_blank" href="https://www.facebook.com"
          ><img src="../../../src/assets/icon/facebook.png" class="img"
        /></a>
        <a target="_blank" href="https://www.instagram.com/"
          ><img src="../../../src/assets/icon/instagram.png" class="img"
        /></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.container {
  margin-bottom: 30px;
}
.copyRight {
  text-align: center;
}
.img {
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 15px 10px 15px 10px;
}
.logos {
  text-align: center;
}
</style>
