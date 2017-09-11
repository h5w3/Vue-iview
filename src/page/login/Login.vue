<template>
	<div id="login">
		<h3>登 录</h3>
		<br/>
		<Form ref="formInline" :model="formInline" :rules="ruleInline">
			<FormItem prop="username">
				<Input type="text" v-model="formInline.username" placeholder="Username">
				<Icon type="ios-person-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem prop="password">
				<Input type="password" v-model="formInline.password" placeholder="Password">
				<Icon type="ios-locked-outline" slot="prepend"></Icon>
				</Input>
			</FormItem>
			<FormItem>
				<Button type="primary" @click="handleSubmit('formInline')">登录</Button>
			</FormItem>
		</Form>
	</div>
</template>
<script>
	import { loginService } from '@/api/service'

	export default {
		data() {
			return {
				formInline: {
					username: '',
					password: ''
				},
				ruleInline: {
					username: [{
						required: true,
						message: '请填写用户名',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请填写密码',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6位',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			async handleSubmit(name) {
				this.$refs[name].validate(async(valid) => {
					if(valid) {
						try {
							const res = await loginService({
								user_name: this.formInline.username,
								password: this.formInline.password
							});
						} catch(e) {
							this.$Message.success('登录成功!');
							setTimeout(() => this.$router.push("/home"), 1000);
						}
						if(res.status == 1) {
							this.$Message.success('登录成功!');
							setTimeout(() => this.$router.push("/home"), 500);
						} else {
							this.$message.error(res.message);
						}
					} else {
						this.$Message.error('表单验证失败!');
						return false;
					}
				})
			}
		}
	}
</script>

<style type="text/css">
	#login {
		width: 250px;
		margin: 0 auto;
		padding-top: 10%;
	}
</style>