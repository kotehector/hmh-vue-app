<template>
  <div id="auth-success">
		<h1>Auth Success Component</h1>
  </div>
</template>

<script>
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
	},
	methods: {
	}
}
</script>

<style lang="scss">


</style>
