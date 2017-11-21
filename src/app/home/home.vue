<template>
  <div id="home">
    <h1 class="">
			<i class="material-icons">keyboard_arrow_right</i>
			Héctor Menduíña Hermelo.
		</h1>
		<h1 class="">
			<i class="material-icons">keyboard_arrow_right</i>
			Front end passionate.
		</h1>
  </div>
</template>

<script>
export default {
	name: 'home',
  data () {
    return {
			msg: 'Home Component'
    }
	},
	created() {
		console.log('Home Component: ', this.msg);
	},
	methods: {
		
	}
}
</script>

<style lang="scss">

</style>
