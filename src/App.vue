<template>
  <div id="app">
			
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
import intro from './components/intro.vue';
import social from './components/social.vue';

export default {
	name: 'app',
	components: { 
		intro,
		social
	},
  data () {
    return {
			msg: 'Welcome to Your Vue.js App'
    }
	},
	created() {
		console.log('ROOT APP: ', this.msg);
	},
	methods: {
		
	}
}
</script>

<style lang="scss">
html,
body {
	// background: #00c1ac;
	font-size: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
