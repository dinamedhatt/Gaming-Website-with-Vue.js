<template>
<div class='col-sm-7 col-md-5 col-lg-3 cont row'>
  <p class='head'>Please add your account details</p>
  <form class="form-outline">
  <label class="form-label" for="txt">Username/Email</label>
    <input type="text" id="txt" class="form-control" placeholder="Type your username here"/>
    <label class="form-label" for="pw">Password</label>
    <input type="text" id="pw" class="form-control" placeholder="Type your password"/>
    <i class="fas fa-eye-slash"></i>
    <p class='seeAll'>Forgot password?</p>
    <button id='btn'>LOGIN</button>
    <p class='seeAll' id='signUp'>Don't have an account? sign up!</p>
  </form>
  </div>
</template>

<script>
export default {
  name:'Form',
}
</script>

<style scoped>
p{
  font-family: Tajawal;
}

#pw,#txt{  color: #444242;
}
.head{
  font-size: 14.4px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.39;
  letter-spacing: normal;
  text-align: left;
}

.cont{
  padding: 28px 15px 32px 15px;
  text-align: left;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.027), 0 6px 20px 0 rgba(0, 0, 0, 0.15);
  margin: auto;
  background-color: white;
  position: absolute;
  top:11%;
  right: 22%;
}

input{
  border:none;
  border-bottom: 1px solid #444242;
  border-radius: 0px;
}

#btn{
  width:100%
}

#signUp{
  float: none;
  text-align: center;
}

i{
  position: absolute;
  right: 10%;
  top: 45%;
}

label{
  margin:0;
  font-size:14px;
  font-family: Roboto;
  font-size: 11px;
}

input{
margin-bottom: 10px;
}
</style>
