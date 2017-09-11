<template>
	<div class="layout">
		<Row type="flex">
			<Col span="4" class="layout-menu-left">
			<main-nav></main-nav>
			</Col>
			<Col span="20">
			<header-nav></header-nav>
			<bread-nav></bread-nav>
			<div class="layout-content">
				<div class="layout-content-main">
					{{msg}}
				</div>
			</div>
			<footer-info></footer-info>
			</Col>
		</Row>
	</div>
</template>

<script>
	import MainNav from '@/components/common/MainNav'
	import HeaderNav from '@/components/common/HeaderNav'
	import FooterInfo from '@/components/common/FooterInfo'
	import BreadNav from '@/components/common/BreadNav'

	export default {
		data() {
			return {
				msg: "Welcome to console!"
			}
		},
		components: {
			MainNav,
			HeaderNav,
			FooterInfo,
			BreadNav
		}
	}
</script>

<style type="text/css">
	.layout-menu-left {
		position: fixed;
		top: 0;
		left: 0;
		background: #464c5b;
		height: 100%;
		text-align: left;
	}
	
	.layout-logo-left {
		width: 90%;
		height: 30px;
		background: #5b6270;
		border-radius: 3px;
		margin: 15px auto;
	}
	
	.layout-content {
		height: 100%;
		margin: 15px;
		overflow: hidden;
		background: #fff;
		border-radius: 4px;
	}
	
	.layout-content-main {
		padding: 10px;
	}
	
	.ivu-row-flex {
		height: 100%;
		width: 100%;
	}
</style>