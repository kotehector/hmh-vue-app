<template>
  <div id="app">
			
		<button v-on:click="showText = !showText">Toggle Animation CSS</button>
    <div>
			<transition name="textAnimation">
				<h1 v-if="showText" class="line-title">
					<i class="material-icons">keyboard_arrow_right</i>
					var name = 'Héctor Menduíña Hermelo';
				</h1>
			</transition>
		</div>
		<div>
			<transition name="descAnimation">
				<h1 v-if="showText" class="line-desc">
					<i class="material-icons">keyboard_arrow_right</i>
						var hobbies = 'Coffe, sleep, code ...  :)';
				</h1>
			</transition>
		</div>

		<button v-on:click="showTextVel = !showTextVel">Toggle Animation Velocity</button>
		<div>
			<transition
				v-on:before-enter="beforeEnter"
				v-on:enter="enter"
				v-on:leave="leave"
				v-bind:css="false">
				<h1 v-if="showTextVel" class="line-desc">
					<i class="material-icons">keyboard_arrow_right</i>
						var hobbies = 'Coffe, sleep, code ...  :)';
				</h1>
			</transition>
		</div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
			msg: 'Welcome to Your Vue.js App',
			showText: false,
			showTextVel: false
    }
	},
	created() {
		// this.showText = true;
	},
	methods: {
		beforeEnter(el) {
			console.log('beforeeeeeeeeEnteeeer: ', el);
			el.style.opacity = 0;
		},
		enter(el, done) {
			console.log('enteeeer: ', el);
			Velocity(el, { opacity: 1, fontSize: '1.5rem' }, { duration: 300 })
			Velocity(el, { color: 'orange', fontSize: '1rem' }, { complete: done })
		},
		leave(el, done) {
			console.log('leeeaveeeeee: ', el);
			Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })
		}
	}
}
</script>

<style lang="scss">

/*** ANIMATIONS *************************/
.line-title,
.line-desc {
	position: relative;
	display: inline-block;
	top: 50%;
	margin: 0;
	font-size: 2rem;
	border-right: 2px solid rgba(255, 255, 255, 0.75);
	text-align: left;
	white-space: nowrap;
	overflow: hidden;
	transform: translateY(-50%);
}

$steps-title : 23;
$steps-desc : 43; 
$width-title: '48.5rem';
$width-desc: '54rem';

@keyframes typewriter-title {
  from {
    width: 0;
  }
  to {
    width: #{ $width-title };
  }
}
@keyframes typewriter-desc {
  from {
    width: 0;
  }
  to {
    width: #{ $width-desc };
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}

.textAnimation-enter-active {
	color: blue;
  animation: typewriter-title 4s steps($steps-title) 1s 1 normal both,
		blinkTextCursor 1s steps($steps-title) 1 normal;
}
.descAnimation-enter-active {
	color: blue;
  animation: typewriter-desc 4s steps($steps-desc) 1s 1 normal both,
		blinkTextCursor 1s steps($steps-desc) 1 normal;
}

/*****************************************************/
html,
body {
	background: #00c1ac;
	font-size: 10px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
