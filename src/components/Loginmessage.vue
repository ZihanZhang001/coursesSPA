<template>
  <div class="hero">
    <h1 class="vue-title">Hello !!</h1>

    <table align="center">
      <tr>
        <td>
          <p class="lead"><b><i>You're Already Logged In,
            Please Choose and Option from the Menu</i></b>
            <!--<p>Out with Boring Prumt - Giving has never been so easy.</p>-->
            <!--<p>Just click <a href ="/donate">here</a> to go to</p>-->
            <!--<p>the Donation page and empty your wallet-->
          </p>
        </td>
      </tr>
    </table>

    <p></p>
    <dfooter></dfooter>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
  name: 'message',
  components: {
    'dfooter': Footer
  }
}
</script>
<style>
  .hero {
    height: 100vh;
    margin-top: 30px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .hero .lead {
    font-weight: 200;
    font-size: 2.5rem;
  }
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    font-size: 70pt;
    margin-bottom: 10px;
  }
</style>
