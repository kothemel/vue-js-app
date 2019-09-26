<template>
    <div>
      <!-- Icon 
      <div class="fadeIn first">
          <img src="../assets/user-icon.png" id="icon" alt="User Icon" />
      </div> -->

      <div class="login-wrap">
        <div class="login-html">
          <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Log In</label>
          <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
          <div class="login-form">
            <div class="sign-in-htm">
              <div class="group">
                <label for="user" class="label">Username</label>
                <input id="user" v-model="User.username" type="text" class="input">
              </div>
              <div class="group">
                <label for="pass" class="label">Password</label>
                <input id="pass" v-model="User.password" type="password" class="input" data-type="password">
              </div>
              <div class="group">
                <input id="check" type="checkbox" class="check" checked>
                <label for="check"><span class="icon"></span> Keep me Signed in</label>
              </div>
              <div class="group">
                <input @click="login" type="submit" class="button" value="Log In">
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <a href="#forgot">Forgot Password?</a>
              </div>
            </div>
            <div class="sign-up-htm">
              <div class="group">
                <label for="user" class="label">Name</label>
                <input id="user" v-model="User.name" type="text" class="input">
              </div>
              <div class="group">
                <label for="user" class="label">Userame</label>
                <input id="user" v-model="User.username" type="text" class="input">
              </div>
              <div class="group">
                <label for="pass" class="label">Password</label>
                <input id="pass" v-model="User.password" type="password" class="input" data-type="password">
              </div>
              <div class="group">
                <input @click="submit" type="button" class="button" value="Sign Up"><br>
              </div>
              <div class="hr"></div>
              <div class="foot-lnk">
                <label for="tab-1">Already Member?</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Remind Password -->
      <div id="formFooter">
        <p>Already have an account? <a class="underlineHover" href="#">Log in</a></p>
      </div>
    </div>
</template>


<script>
//import axios from 'axios'
import {createUser, getUserById} from '../httpcalls'
//import router from '../router'

export default {
    name: 'LogInForm',
    props: {
      msg: String
    },
    data() {
        return {
          User: {name:'', username: '', password: ''}
        }
    },
    methods: {
        /*navigate: function() {
          this.$router.push({ path: "/user" });
        },*/
        login: function() {
          var loggedUser = {
            name: "",
            username: this.User.username,
            password: this.User.password
            }
          this.$emit("userLogInfo", this.username, this.password)
          getUserById(loggedUser)
        },
        submit: function() {
            var newUser = {
              name: this.User.name,
              username: this.User.username,
              password: this.User.password
            }
            createUser(newUser)
            
            this.$emit("userLogInfo", this.fullName, this.userName)
            document.getElementById("thankYouLabel").style.color = 'black'
            document.getElementById("thankYouLabel").innerHTML = "Hey " + this.fullName + "! Thank you for registering!"
        },
        clear: function() {
          this.fullName = ''
          this.userName = ''
          this.password = ''
          document.getElementById("thankYouLabel").innerHTML = ''
        }
    }
}
</script>

<style id="loginform">
@import '../../style/login-style.css';
</style>