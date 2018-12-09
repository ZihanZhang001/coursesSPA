import Api from '@/services/api'

export default {
  fetchCourse (id) {
    return Api().get(`/courses/${id}`)
  },
  putCourse (id, course) {
    console.log('REQUESTING ' + course._id + ' ' +
      JSON.stringify(course, null, 5))
    return Api().put(`/courses/${id}`, course,
      { headers: {'Content-type': 'application/json'} })
  },
  fetchCourses () {
    return Api().get('/courses')
  },
  postCourse (course) {
    return Api().post('/courses', course,
      { headers: {'Content-type': 'application/json'} })
  },
  sizeCourse (id) {
    return Api().put(`/courses/${id}/size`)
  },
  deleteCourse (id) {
    return Api().delete(`/courses/${id}`)
  },
  validateUser (user) {
    return Api().post('/users', user,
      { headers: {'Content-type': 'application/json'} })
  }

}
