<template>
  <div>
    <h3>{{ item }}</h3>
    <Dropdown>
      <a href="javascript:void(0)">
        下拉菜单
        <Icon type="ios-arrow-down"></Icon>
      </a>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Dropdown style="margin-left: 20px">
      <Button type="primary">
        下拉菜单
        <Icon type="ios-arrow-down"></Icon>
      </Button>
      <DropdownMenu slot="list">
        <DropdownItem>驴打滚</DropdownItem>
        <DropdownItem>炸酱面</DropdownItem>
        <DropdownItem disabled>豆汁儿</DropdownItem>
        <DropdownItem>冰糖葫芦</DropdownItem>
        <DropdownItem divided>北京烤鸭</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Form
      ref="formInline"
      :model="formInline"
      :rules="ruleInline"
      inline
    >
      <FormItem prop="user">
        <Input
          type="text"
          v-model="formInline.user"
          placeholder="Username"
        >
          <Icon
            type="ios-person-outline"
            slot="prepend"
          ></Icon>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          v-model="formInline.password"
          placeholder="Password"
        >
          <Icon
            type="ios-lock-outline"
            slot="prepend"
          ></Icon>
        </Input>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          @click="handleSubmit('formInline')"
        >Signin</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
import { Form, FormItem, Input, Button, Icon, Dropdown, DropdownMenu, DropdownItem } from 'iview';
export default {
  components: {
    Form,
    FormItem,
    Input,
    Button,
    Icon,
    Dropdown,
    DropdownMenu,
    DropdownItem,
  },
  data() {
    return {
      formInline: {
        user: '',
        password: '',
      },
      ruleInline: {
        user: [{ required: true, message: 'Please fill in the user name', trigger: 'blur' }],
        password: [
          { required: true, message: 'Please fill in the password.', trigger: 'blur' },
          {
            type: 'string',
            min: 6,
            message: 'The password length cannot be less than 6 bits',
            trigger: 'blur',
          },
        ],
      },
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!');
        } else {
          this.$Message.error('Fail!');
        }
      });
    },
  },
  asyncData({ store, route }) {
    // 触发action后，返回promise
    return store.dispatch('fetchItem', route.params.id);
  },
  computed: {
    // 从 store 的 state 对象中获取item
    item() {
      return this.$store.state.items;
    },
  },
};
</script>
