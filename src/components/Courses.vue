<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="courses" :options="options">
        <a slot="sizeup" slot-scope="props" class="fa fa-plus-circle fa-2x" @click="size(props.row._id)"></a>
        <a slot="edit" slot-scope="props" class="fa fa-edit fa-2x" @click="editCourse(props.row._id)"></a>
        <a slot="remove" slot-scope="props" class="fa fa-trash-o fa-2x" @click="deleteCourse(props.row._id)"></a>
      </v-client-table>
      <dfooter></dfooter>
    </div>
  </div>

</template>

<script>
import CourseService from '@/services/courseservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'
import Footer from '@/components/Footer'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})
export default {
  name: 'Courses',
  data () {
    return {
      messagetitle: ' Courses List ',
      courses: [],
      props: ['_id'],
      errors: [],
      columns: ['_id', 'name', 'type', 'room', 'size', 'sizeup', 'time', 'edit', 'remove'],
      options: {
        perPage: 10,
        filterable: ['name', 'room', 'type'],
        sortable: ['size'],
        headings: {
          _id: 'ID'
        }
      }
    }
  },
  components: {
    'dfooter': Footer
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadCourses()
  },
  methods: {
    loadCourses: function () {
      CourseService.fetchCourses()
        .then(response => {
          // JSON responses are automatically parsed.
          this.courses = response.data
          console.log(this.courses)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    size: function (id) {
      CourseService.sizeCourse(id)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    editCourse: function (id) {
      this.$router.params = id
      this.$router.push('edit')
    },
    deleteCourse: function (id) {
      this.$swal({
        title: 'Are you totaly sure?',
        text: 'You can\'t Undo this action',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'OK Delete it',
        cancelButtonText: 'Cancel',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        console.log('SWAL Result : ' + result)
        if (result.value === true) {
          CourseService.deleteCourse(id)
            .then(response => {
              // JSON responses are automatically parsed.
              this.message = response.data
              console.log(this.message)
              this.loadCourses()
              // Vue.nextTick(() => this.$refs.vuetable.refresh())
              this.$swal('Deleted', 'You successfully deleted this Course ' + JSON.stringify(response.data, null, 5), 'success')
            })
            .catch(error => {
              this.$swal('ERROR', 'Something went wrong trying to Delete ' + error, 'error')
              this.errors.push(error)
              console.log(error)
            })
        } else {
          this.$swal('Cancelled', 'Your Course still Counts!', 'info')
        }
      })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 80%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
  .vue-pagination-ad {
    text-align: center;
  }
  .vue-message {
    text-align: left;
    font-size: 17px;
    margin-left: 30px;
  }
</style>
