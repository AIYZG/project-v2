<!-- el表单登录验证封装 -->
<template>
<div class="login">
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>通用后台管理系统</span>
		</div>
		<el-form label-width="80px" :model="form" ref="form" :rules="rules">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="login('form')">登录</el-button>
			</el-form-item>
		</el-form>
	</el-card>
</div>

</template>
<script>
import { nameRule, passRule } from '../utils/vaildate.js'
import { setToken } from '../utils/setToken.js'
import { login } from '@/api/api.js'
export default {
    data(){
        return { 
			form:{
				username:'',
				password:'',
			},
			rules:{
				username:[{validator:nameRule,trigger:'blur'}],
				password:[{validator:passRule,trigger:'blur'}]
			}
		}
    },
		methods:{
			//登录验证
				login(form) {
					this.$refs[form].validate((valid) => {
						if(valid) {
							//校验通过
							console.log(this.form,"this.form") 
							//登录方法封装成api进行调用
							// this.service.post('/login', this.form)
							// .then(res => {
							// 	console.log(res)
							// 	if (res.data.status === 200) {
							// 		setToken('username',res.data.username)
							// 		setToken('token',res.data.token)
							// 		this.$message({message: res.data.message, type:'success'})
							// 		this.$router.push('/home')
							// 	}
							// })
							login(this.form).then(res => {
								if (res.data.status === 200) {
									setToken('username',res.data.username)
									setToken('token',res.data.token)
									this.$message({message: res.data.message, type:'success'})
									this.$router.push('/home')
								}
							})
						} else {
							console.error(this.form)
						}
					})
				}
		}
}
</script>
<style lang="scss">
.login{
	width:100%;
	height:100%;
	position:absolute;
	background-color: #409EFF;
	background: url('../assets/bg.jpg') center no-repeat;
	// .el-card {
	// 	background: #65768557;
	// }
	.box-card{
		width:450px;
		margin:200px auto; //居中
		background-color: rgba(255,255,255,0.3);
		font-weight: bold;
		.el-card__header {
			font-size: 30px;
			color:#000;
		}
		.el-button{
			width:100%;
		}
	}
}
</style>