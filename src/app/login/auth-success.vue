<template>
  <div id="auth-success">
		<h1>Auth Success Component</h1>
		<div> 
			<h1>Signup succeeded</h1> 
			<button @click='logOut'>Log out</button> 
			<hr> 
			<img :src="photo" style="height: 120px"> <br> 
			<p>{{name}}</p> 
			<p>{{email}}</p> 
			<p>{{userId}}</p> 
			<hr> 
			<pre>{{user}}</pre> 
		</div>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: 'auth-success',
  data () {
    return {
			showText: false,
			showTextVel: false
    }
	},
	created() {
		console.log('AuthSuccessComponent!!!!!!!');
		this.user = firebase.auth().currentUser;
		console.log('user: ', this.user);
		if (this.user) {
			this.name = this.user.displayName;
			this.email = this.user.email;
			this.photo = this.user.photoURL;
			this.userId = this.user.uid;
		}
	},
	methods: {
		logOut() {
			console.log('on logOut click!!!!');
			firebase.auth().signOut();
		}
	}
}
</script>

<style lang="scss">


</style>
