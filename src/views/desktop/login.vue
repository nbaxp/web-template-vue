<template>
  <div class="center">
    <div style="width: 320px">
      <app-form
        ref="formRef"
        v-model="model"
        class="text-center"
        @after="after"
      >
        <template #header>
          <header-logo class="m-4" />
        </template>
        <template #footer>
          <el-form-item>
            <div class="between w-full">
              <el-checkbox
                v-model="model.data.rememberMe"
                label="记住密码"
                size="large"
              />
              <router-link to="/forgot-password">
                <el-button
                  type="primary"
                  link
                  >忘记密码</el-button
                >
              </router-link>
            </div>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              class="w-full"
              @click="formRef.submit()"
              >登录</el-button
            >
          </el-form-item>
          <el-form-item>
            <router-link
              to="/register"
              class="w-full text-center"
            >
              <el-button
                type="primary"
                link
                >注册账号</el-button
              >
            </router-link>
          </el-form-item>
        </template>
      </app-form>
    </div>
  </div>
</template>

<script setup>
import AppForm from '~/components/app-form.vue';
import HeaderLogo from '~/layouts/desktop/header-logo.vue';
import { useUserStore } from '~/store';
import request from '~/utils/request';

const model = reactive({
  action: 'user/login',
  data: null,
  schema: {
    title: '登录',
    type: 'object',
    properties: {
      userName: {
        type: 'string',
        default: null,
        placeholder: '用户名',
        prefix: 'user',
        rules: [
          {
            required: true,
            trigger: 'change',
          },
        ],
      },
      password: {
        type: 'string',
        default: null,
        placeholder: '密码',
        prefix: 'lock',
        inputType: 'password',
        showPassword: true,
        rules: [
          {
            required: true,
            trigger: 'change',
          },
        ],
      },
      rememberMe: {
        skip: true,
        default: false,
      },
    },
  },
});

const formRef = ref(null);
const router = useRouter();
const route = useRoute();
const userStore = useUserStore();
const after = async (result) => {
  console.log(result);
  const { token } = result;
  await userStore.login(token);
  const response = await request.post('user/info');
  const data = response.data?.code ? response.data.data : response.data;
  userStore.setUserInfo(data);
  router.push({
    path: route.query.redirect ?? '/',
  });
};
</script>
