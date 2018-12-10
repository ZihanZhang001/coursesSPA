<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-institution" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <template v-if="childDataLoaded">
            <course-form :course="course" courseBtnTitle="Update Course"
                           @course-is-created-updated="updateCourse"></course-form>
          </template>
        </div><!-- /col -->
      </div><!-- /row -->
    </div><!-- /container -->
    <dfooter></dfooter>
  </div>
</template>

<script>
import CourseService from '@/services/courseservice'
import CourseForm from '@/components/CourseForm'
import Footer from '@/components/Footer'

export default {
  data () {
    return {
      course: {},
      childDataLoaded: false,
      temp: {},
      messagetitle: ' Update Course '
    }
  },
  components: {
    'course-form': CourseForm,
    'dfooter': Footer
  },
  created () {
    this.getCourse()
  },
  methods: {
    getCourse: function () {
      CourseService.fetchCourse(this.$router.params)
        .then(response => {
          this.temp = response.data
          this.course = this.temp[0]
          this.childDataLoaded = true
          console.log('Getting Course in Edit: ' + JSON.stringify(this.course, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    updateCourse: function (course) {
      console.log('Before PUT ' + JSON.stringify(course, null, 5))
      CourseService.putCourse(this.$router.params, course)
        .then(response => {
          console.log(response)
          console.log('AFTER PUT ' + JSON.stringify(course, null, 5))
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
