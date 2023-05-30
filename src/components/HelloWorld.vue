<script setup lang="ts">
import { ref, onMounted, nextTick } from "vue";

const count = ref(0);

//类型别名、字符串字面量类型
type eventName = "click" | "scroll";
function test(ele: Element, eventName: eventName): number {
  console.log(ele, eventName, 123);
  return 1;
}

//元组
let tom: [string, number] = ["123", 1];
tom.push(1);
console.log(tom, "元组");

//枚举
enum color {
  red,
  blue,
}
console.log(color[0], "枚举");

class hello {
  public name;
  constructor(name: string) {
    this.name = name;
  }
  say() {
    console.log(this.name);
  }
}
let haha = new hello("haha");
haha.say();

onMounted(() => {
  nextTick(() => {
    let el = document.getElementById("test");
    test(<Element>el, "click");
  });
});
</script>

<template>
  <div id="test">123</div>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
