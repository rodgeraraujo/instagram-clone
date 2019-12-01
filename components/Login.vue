<template>
  <div class="containe">
    <form v-on:submit.prevent="onSubmit" class="box">
      <div class="instagram-logo" />
      <input type="text" name placeholder="Phone Number, Username, or email" />
      <input type="password" name placeholder="Password" />

      <button value="Log in">Log in</button>
      <h6>
        <span>OR</span>
      </h6>
      <a href="#login-facebook">
        <i class="fab fa-facebook-square"></i> <b>Log in with Facebook</b>
      </a>
      <a href="#forgot-password" class="small">Forgot password?</a>
    </form>

    <section class="box2">
      <p>
        Don't have an account?
        <a href="#sign-up">Sign up</a>
      </p>
    </section>

    <p class="get">Get the app.</p>
    <section class="app" style="display: flex">
      <div class="column">
        <a href="#" target="_blank">
          <div class="app-apple-icon" />
        </a>
      </div>
      <div class="column">
        <a href="#" target="_blank">
          <div class="app-android-icon" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit() {
      console.log('login')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  margin-top: 20px;
}

.box {
  width: 350px;
  height: 380px;
  padding: 40px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
  margin: 0 0 10px;
}
.box h1 {
  color: black;
  text-transform: uppercase;
  font-weight: 500;
}
.box input[type='text'],
.box input[type='password'] {
  border: 0;
  background: #fafafa;
  display: block;
  margin: 7px auto;
  text-align: left;
  border: 1px solid #efefef;
  padding: 10px;
  width: 100%;
  outline: none;
  color: #262626;
  border-radius: 4px;
  transition: 0.25s;
  font-size: 11px;
  box-sizing: border-box;
  cursor: cell;
  font-weight: 400;
  text-shadow: none;
}
.box input[type='text']:focus,
.box input[type='password']:focus {
  color: black;
  border: 2px solid gray;
}
.box button {
  border: 0;
  background: rgba(var(--h5f, 56, 151, 240), 1);
  opacity: 1;
  display: block;
  margin: 20px auto;
  text-align: center;
  border: 2px solid rgba(var(--h5f, 56, 151, 240), 1);
  padding: 10px;
  outline: none;
  color: white;
  transition: 0.25s;
  cursor: progress;
  width: 100%;
  border-radius: 4px;
  font-weight: 600;
  font-size: 11px;
}

.box a {
  text-decoration: none;
  margin: 20px auto;
  display: block;
  font: inherit;
  border: 0;
  padding: 0;
  color: #385185;
  font-weight: 400;
}
.box a.small {
  font-size: 12px;
  text-decoration: none;
  margin: 10px auto;
  display: block;
}

h6 {
  color: gray;
  width: 100%;
  text-align: center;
  border-bottom: 1px solid gray;
  line-height: 0.1em;
  margin: 10px 0 20px;
}
h6 span {
  background: #fff;
  padding: 0 10px;
}

.box2 {
  width: 348px;
  height: 48px;
  padding: 10px;
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  text-align: center;
  border: 1px solid #e6e6e6;
  border-radius: 1px;
}

.box2 p {
  font-size: 14px;
  color: #262626;
  margin: 5px;
}
.box2 a {
  text-decoration: none;
  color: #3897f0;
  font-weight: bold;
}

.app {
  width: 262.5px;
  height: 40px;
  padding: 40px;
  position: absolute;
  top: 78%;
  left: 46%;
  transform: translate(-50%, -50%);
  background: none;
  text-align: center;
}
.instagram-logo {
  background: url(/sprite.png) no-repeat 0 0;
  background-size: 405px 379px;
  width: 175px;
  height: 51px;
  margin: auto;
  margin-bottom: 3px;
}
.app-apple-icon {
  background: url(/sprite.png) no-repeat -131px -134px;
  background-size: 405px 379px;
  width: 128px;
  height: 41px;
}
.app-android-icon {
  background: url(/sprite.png) no-repeat 0 -134px;
  background-size: 405px 379px;
  width: 130px;
  height: 41px;
}
.column {
  flex: 33.33%;
  padding: 5px;
}
.app p {
  white-space: pre-line;
  padding: 20px;
  justify-content: space-between;
}
.get {
  width: 262.5px;
  height: 40px;
  padding: 40px;
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: none;
  text-align: center;
}
</style>
