<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: "HomeView",
  components : {
    Navbar,
  }
}

</script>

<template>
  <main>
     <div class="hero_area">
    <div class="bg-box">
      <img src=" src/images/banner2-bg.jpg">
    </div>
  
 <Navbar/>
 <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-7 col-lg-6 ">
                  <div class="detail-box">
                    <h1>
                      High Star Menu, Low Price and Fast Delivery
                    </h1>
                    <p>
                    </p>
                    <div class="btn-box">
                      <a href="" class="btn1">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
   </div>

  </main>
</template>
