<template>
  <div id="auth">
		<h1>Auth Component</h1>
  </div>
</template>

<script>
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
	},
	methods: {
	}
}
</script>

<style lang="scss">


</style>
