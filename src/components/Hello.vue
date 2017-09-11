<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<h2>SPA Demo</h2>
		<br/>
		<br/>
		<ul>
			<li>
				<router-link to="/login">登录</router-link>
			</li>
			<li>
				<router-link to="/register">注册</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to My Vue.js App'
			}
		}
	}
</script>

<style scoped>
	h1,
	h2 {
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
	
	.hello {
		width: 300px;
		margin: 0 auto;
		padding-top: 10%;
	}
</style>