<template>
  <div class="menu-page">
    menu-page
    <!-- <a-menu>
      <a-menu-item>1</a-menu-item>
      <a-menu-item>2</a-menu-item>
      <a-sub-menu>
        <div slot="title">3333</div>
        <a-menu-item>3333-1</a-menu-item>
        <a-sub-menu>
          <div slot="title">3333-2</div>
          <a-menu-item>3333-2-1</a-menu-item>
          <a-menu-item>3333-2-2</a-menu-item>
        </a-sub-menu>
      </a-sub-menu>
    </a-menu>
    -->

    <a-menu>
      <template v-for="(item, index) in list">
        <a-menu-item
          v-if="!item.children || !item.children.length"
          :key="`menu_item_${index}`"
        >{{item.title}}</a-menu-item>
        <re-submenu v-else :listItem="item" :key="`list_item_${index}`"></re-submenu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import menuComponents from "_c/menu";
const { AMenu, AMenuItem, ASubMenu } = menuComponents;
import ReSubmenu from "./components/re-submenu";
export default {
  name: "menu_page",
  components: {
    AMenu,
    AMenuItem,
    ASubMenu,
    ReSubmenu
  },
  data() {
    return {
      list: [
        {
          title: "111"
        },
        {
          title: "222"
        },
        {
          title: "333",
          children: [
            {
              title: "333-1"
            },
            {
              title: "333-2",
              children: [
                {
                  title: "333-2-1"
                },
                {
                  title: "333-2-2"
                }
              ]
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="less">
.menu-page {
  width: 300px;
  height: 400px;
}
</style>