<template>
  <div class="col-lg-4 col-sm-6 mb-4">
    <!-- Portfolio item 1-->
    <div class="portfolio-item">
      <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fas fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="../../assets/team/Hi1.png" alt="..." />
      </a>
      <div class="portfolio-caption">
        <div>{{ acc.name }}</div>
        <div class="text-muted">acc.</div>
        <div class="text-muted">dummycity</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PartnerGuideComponent",
};
</script>
