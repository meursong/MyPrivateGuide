<template>
  <!-- Portfolio Grid-->
  <section class="page-section bg-white" id="portfolio">
    <div class="container">
      <div class="text-center" style="margin-top: 50px; margin-bottom: 50px">
        <h2 style="padding: 30px; font-size: 60px">MPG team</h2>
        <h3 class="section-subheading text-muted">
          파트너 가이드를 소개합니다.
        </h3>
      </div>
      <div class="row">
        <div
          v-for="acc in accs"
          v-bind:key="acc.id"
          class="col-lg-4 col-sm-6 mb-4"
        >
          <!-- Portfolio item 1-->
          <div class="portfolio-item">
            <a
              class="portfolio-link"
              data-bs-toggle="modal"
              v-bind:href="`#${acc.id}`"
            >
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img
                class="img-fluid"
                v-bind:src="'http://localhost:3002/' + acc.profile"
                alt="..."
              />
            </a>
            <div class="portfolio-caption">
              <div>{{ acc.name }}</div>
              <div class="text-muted">{{ acc.gender }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br />
  </section>

  <div
    v-for="acc in accs"
    v-bind:key="acc.id"
    class="portfolio-modal modal fade"
    v-bind:id="acc.id"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
  >
    <!-- Portfolio item 1 modal popup-->
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="close-modal" data-bs-dismiss="modal">
          <img
            class="modalImage"
            v-bind:src="'http://localhost:3002/' + acc.profile"
          />
        </div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="modal-body">
                <!-- Project details-->
                <h2 class="text-uppercase ModalPopUpName">{{ acc.name }}</h2>
                <p class="item-intro text-muted">{{ acc.id }}</p>

                <table>
                  <tr>
                    <th class="th">언어 :</th>
                    <td>&nbsp;{{ acc.lgg }}</td>
                  </tr>
                  <tr>
                    <th class="th">주소 :</th>
                    <td>&nbsp;{{ acc.addr1 }}</td>
                  </tr>
                  <tr>
                    <th class="th">나이 :</th>
                    <td>&nbsp;{{ acc.bday }}</td>
                  </tr>
                  <tr>
                    <th class="th">전화번호 :</th>
                    <td>&nbsp;{{ acc.pnum }}</td>
                  </tr>
                  <tr>
                    <th class="th">notice :</th>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                  </tr>
                </table>

                <div class="btnContainer">
                  <button
                    class="btn btn-primary btn-xl text-uppercase"
                    data-bs-dismiss="modal"
                    type="button"
                  >
                    <i class="fas fa-times me-1"></i>
                    닫기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Partner",
  data() {
    return {
      accs: [],
    };
  },
  created() {
    fetch("http://localhost:3002/userinfo", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok");
      })
      .then((data) => {
        this.accs = data.res;
        // console.log(this.accs.profile);
        // this.profiles = this.accs.profile;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style scoped>
.modalImage {
  width: 450px;
  height: 450px;
}
.col-lg-4 {
  padding-bottom: 60px;
}
.close-modal {
  text-align: center;
}
.ModalPopUpName {
  font-size: 45px;
  margin-bottom: 20px;
}
.th {
  text-align: right;
}
.btnContainer {
  text-align: center;
}
</style>
