<template>
  <div id="app1" class="hero">
    <h3 class="vue-title"><i class="fa fa-institution" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div class="container mt-3 mt-sm-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <course-form :course="course" courseBtnTitle="Release Course" @course-is-created-updated="submitCourse"></course-form>
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
      course: {type: 'P', name: '', size: 1, room: ''},
      messagetitle: ' Release Course '
    }
  },
  components: {
    'course-form': CourseForm,
    'dfooter': Footer
  },
  methods: {
    submitCourse: function (course) {
      CourseService.postCourse(course)
        .then(response => {
          console.log(response)
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
