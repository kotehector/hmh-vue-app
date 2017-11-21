<template>
  <div id="auth">
		<h1>Auth Component</h1>
  </div>
</template>

<script>
import firebase from 'firebase';
import firebaseui from "firebaseui";
import config from "../../helpers/firebase-config";

export default {
  name: 'auth',
  data () {
    return {
			showText: false,
			showTextVel: false
    }
	},
	created() {
		console.log('AuthComponent!!!!!!!');
		var uiConfig = {
			signInSuccessUrl: '/auth-success',
			signInOptions: [
				firebase.auth.GoogleAuthProvider.PROVIDER_ID,
				firebase.auth.EmailAuthProvider.PROVIDER_ID
			]
		};
		var ui = new firebaseui.auth.AuthUI(firebase.auth());
		ui.start('#auth', uiConfig);
	},
	methods: {
	}
}
</script>

<style lang="scss">


</style>
