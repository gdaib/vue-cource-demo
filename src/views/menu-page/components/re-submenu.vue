<template>
  <a-sub-menu>
    <div slot="title">{{listItem.title}}</div>
    <template v-for="(item ,index) in listItem.children">
      <a-menu-item v-if="!item.children || !item.children.length" :key="`sub_menu_item${index}`">
        <span>{{item.title}}</span>
      </a-menu-item>
      <re-submenu v-else :listItem="item" :key="`sub_menu_item${index}`"></re-submenu>
    </template>
  </a-sub-menu>
</template>

<script>
import menuComponents from "_c/menu";
const { AMenuItem, ASubMenu } = menuComponents;
export default {
  name: "ReSubmenu",
  props: {
    listItem: Object
  },
  components: {
    AMenuItem,
    ASubMenu
  }
};
</script>

<style>
</style>
