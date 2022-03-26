<template>
  <div>
    <div class="bgImg" v-bind:style="cssprops">
      <header class="masthead">
        <div class="container">
          <div id="title1">나만을 위한 특별한 경험</div>
          <div id="title2">My Private Guide</div>
          <a class="btn btn-warning" href="#services" id="serviceBox"
            >서비스 알아보기</a
          >
        </div>
      </header>
    </div>
    <br />
    <br />
    <br />
    <section class="page-section" id="services">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase" style="font-size: 50px">
            unique experience
          </h2>
          <br />
          <h3 class="section-subheading text-muted">제공하는 서비스</h3>
          <br /><br /><br />
        </div>
        <div class="row text-center">
          <div class="col-md-3">
            <div class="icon">
              <img
                src="../../assets/icon/location.png"
                alt="schedule"
                style="width: 200px; height: 200px"
              />
            </div>
            <h4 class="my-3">여행코스 상담</h4>
            <p class="text-muted">
              가이드없이 코스컨설팅만. 일정과 장소를 알려주세요
            </p>
          </div>
          <div class="col-md-3">
            <div class="icon">
              <img
                src="../../assets/icon/certificate2.png"
                alt="partnerGuide"
                style="width: 200px; height: 200px"
              />
            </div>
            <h4 class="my-3">MPG파트너 가이드</h4>
            <p class="text-muted">
              깐깐한 검증을 통해 사이트에 등록된 전문가이드 고용서비스
            </p>
          </div>
          <div class="col-md-3">
            <div class="icon">
              <img
                src="../../assets/icon/friend.png"
                alt="local"
                style="width: 200px; height: 200px"
              />
            </div>
            <h4 class="my-3">현지인 가이드</h4>
            <p class="text-muted">
              가이드도 좋지만 혼자여행하기 심심하거나 여행지를 잘아는 현지인과
              동행. 현지인맛집과 명소 등
            </p>
          </div>
          <div class="col-md-3">
            <div class="icon">
              <img
                src="../../assets/icon/business2.png"
                alt="business"
                style="width: 200px; height: 200px"
              />
            </div>
            <h4 class="my-3">비즈니스＆통역</h4>
            <p class="text-muted">
              비즈니스업무,출장,학술세미나 등 전문적인 통역능력이 필요한경우
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
  <br /><br /><br /><br /><br /><br /><br />
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      cssprops: {
        backgroundImage: `url(${require("@/assets/background/bgTest1.jpg")}`,
        width: "100vw",
        height: "100vh",
        position: "sticky",
      },
      vodalprops: {
        width: 600,
        height: 350,
        show: false,
      },
    };
  },
};
</script>
<style>
#title1 {
  width: 500px;
  height: 150px;
  margin-left: -250px;
  margin-top: -75px;
  position: relative;
  color: white;
  text-shadow: 3px 3px 3px gray;
  left: 50%;
  top: 35vh;
  font-size: 40px;
}

#title2 {
  width: 900px;
  margin-left: -400px;
  position: relative;
  color: white;
  text-shadow: 3px 3px 3px gray;
  left: 50%;
  top: 25vh;
  font-size: 100px;
}

#serviceBox {
  width: 200px;
  height: 55px;
  margin-left: -100px;
  color: white;
  position: relative;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  left: 50%;
  top: 35vh;
  border-style: solid;
  border: 5pt groove;
}

.icon {
  padding-block: 30px;
}
</style>
