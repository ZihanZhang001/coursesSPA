<template>
  <form @submit.prevent="submit">
    <div class="form-group">
      <label class="form-label">Select Course Type</label>
      <select id="type" name="type" class="form-control" type="text" v-model="type">
        <option value="null" selected disabled hidden>Choose Course Type</option>
        <option value="P">P</option>
        <option value="L">L</option>
      </select>
    </div>
    <div class="form-group" :class="{ 'form-group--error': $v.time.$error }">
      <label class="form-control-label" name="time">Time (Enter a time between 0 and 24)</label>
      <input data-test="time" class="form__input" placeholder="enter time" type="decimal" v-model.trim="time"/>
    </div>
    <div class="error" v-if="!$v.time.required">Time is Required</div>
    <div class="error" v-if="!$v.time.between">Time must be between 0 and 24</div>
    <div class="form-group" :class="{ 'form-group--error': $v.name.$error }">
      <label class="form__label">Name</label>
      <input class="form__input" placeholder="enter name" v-model.trim="$v.name.$model"/>
    </div>
    <div class="error" v-if="!$v.name.required">Name is Required</div>
    <div class="form-group" :class="{ 'form-group--error': $v.size.$error }">
      <label class="form-control-label" name="size">Size (Enter a size between 1 and 1000)</label>
      <input class="form__input" type="number" v-model.trim="size"/>
    </div>
    <div class="error" v-if="!$v.size.between">Size must be between 1 and 1000</div>
    <div class="form-group" :class="{ 'form-group--error': $v.room.$error }">
      <label class="form__label">Room</label>
      <input class="form__input" placeholder="enter room" v-model.trim="$v.room.$model"/>
    </div>
    <div class="error" v-if="!$v.room.required">Room is Required</div>
    <p>
      <button class="btn btn-primary btn1" type="submit" :disabled="submitStatus === 'PENDING'">{{ courseBtnTitle }}</button>
    </p>
    <p>
      <a href="#/courses" class="btn btn-primary btn1" role="button">Manage Courses</a>
    </p>
    <p class="typo__p" v-if="submitStatus === 'OK'">Successfully released!</p>
    <p class="typo__p" v-if="submitStatus === 'ERROR'">Please Fill in the Form Correctly.</p>
    <p class="typo__p" v-if="submitStatus === 'PENDING'">Releasing...</p>
  </form>
</template>

<script>
import Vue from 'vue'
import VueForm from 'vueform'
import Vuelidate from 'vuelidate'
import { required, between } from 'vuelidate/lib/validators'

Vue.use(VueForm, {
  inputClasses: {
    valid: 'form-control-success',
    invalid: 'form-control-danger'
  }
})

Vue.use(Vuelidate)

export default {
  // name: 'FormData',
  props: ['courseBtnTitle', 'course'],
  data () {
    return {
      messagetitle: ' Release ',
      type: this.course.type,
      time: this.course.time,
      name: this.course.name,
      size: this.course.size,
      room: this.course.room,
      submitStatus: null
    }
  },
  validations: {
    name: {
      required
    },
    time: {
      required,
      between: between(0, 24)
    },
    size: {
      required,
      between: between(1, 1000)
    },
    room: {
      required
    }
  },
  methods: {
    submit () {
      console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        // do your submit logic here
        this.submitStatus = 'PENDING'
        setTimeout(() => {
          this.submitStatus = 'OK'
          var course = {
            type: this.type,
            time: this.time,
            name: this.name,
            size: this.size,
            room: this.room
          }
          this.course = course
          console.log('Submitting in CourseForm : ' + JSON.stringify(this.course, null, 5))
          this.$emit('course-is-created-updated', this.course)
        }, 500)
      }
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 95%;
    margin: 0 auto;
  }
  .required-field > label::after {
    content: '*';
    color: red;
    margin-left: 0.25rem;
  }
  .course-form .form-control-label.text-left{
    text-align: left;
  }

  label {
    display: inline-block;
    width: 540px;
    text-align: left;
    font-size: x-large;
  }
  .typo__p {
    width: 540px;
    font-size: x-large;
  }
  .btn1 {
    width: 300px;
    font-size: x-large;
  }
  p {
    margin-top: 20px;
  }

  input {
    border: 1px solid silver;
    border-radius: 4px;
    background: white;
    padding: 5px 10px;
    width: 540px;
  }

  .dirty {
    border-color: #5A5;
    background: #EFE;
  }

  .dirty:focus {
    outline-color: #8E8;
  }

  .error {
    border-color: red;
    background: #157ffb;
    color: whitesmoke;
  }

  .error:focus {
    outline-color: #ffa519;
  }
</style>
