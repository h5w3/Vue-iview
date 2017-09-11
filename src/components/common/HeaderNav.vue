<template>
	<div class="layout-header">
		<nav id="top-nav">
			<Button type="text">设置</Button>
			<Dropdown placement="bottom-end">
				<Button type="text">
					            个人中心
					            <Icon type="arrow-down-b"></Icon>
					        </Button>
				<DropdownMenu slot="list">
					<DropdownItem>修改密码</DropdownItem>
					<DropdownItem>
						<router-link to="/login">安全退出</router-link>
					</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		</nav>
	</div>
</template>

<script>
	export default {

	}
</script>

<style>
	.ivu-col-span-20 {
		margin-left: 16.666%;
		height: 100%;
	}
	
	#top-nav {
		width: 220px;
		height: 60px;
		line-height: 60px;
		float: right;
		margin-right: 120px;
		text-align: right;
	}
	
	.layout-header {
		position: fixed;
		top: 0;
		left: 16.666%;
		width: 83.333%;
		height: 60px;
		background: #fff;
		box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
	}
	
	.ivu-dropdown {
		position: fixed;
		top: 0;
		right: 20px;
	}
</style>