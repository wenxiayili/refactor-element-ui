<template>
  <div class="hello">
    <cus-tree :data="data" show-checkbox show-radio node-key="id" :props="defaultProps">
      <template slot-scope="{ node, data}">
        <span class="custom-tree-node">
          <span>{{ node.label }}</span>
          <!--checkRadio或checked为true-->
          <el-button class="action-btn" type="text" v-if="node.checkRadio || node.checked" @click="(event) => {
            event.stopPropagation();
            handleClick(data);
          }">详 情</el-button>
        </span>
      </template>
    </cus-tree>
  </div>
</template>

<script>
import CusTree from '@/components/cus-tree/tree.vue';
import ElButton from 'element-ui/lib/button';

// 对于CusTree的使用，您需要知道以下几点：
// 1、CusTree基于el-tree，并在原有Tree的基础上增加了show-radio属性，用于显示单选框（目前单元只可在node.level == 1的节点显示）;
// 2、单元框是否被选中，是属性checkRadio控制（通过node可访问：node.checkRadio），在上面的例子中，我们通过node.checkRadio || node.checked来判断是否显示“详 情”按钮；
// 3、拖拽功能，并未测试show-radio属性的情况，如果您需要使用拖拽功能，请先测试是否有bug；
// 3、其他使用方式与el-tree一致，您可以参考element-ui的官方文档：https://element.eleme.io/#/zh-CN/component/tree

export default {
  name: 'HelloWorld',
  components: {
    CusTree,
    ElButton,
  },
  props: {
    msg: String
  },
  data() {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        parent: 1,
        loading: true,
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        parent: 2,
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        parent: 3,
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    };
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: 'region1' }, { name: 'region2' }]);
      }
      if (node.level > 3) return resolve([]);

      let hasChild;
      if (node.data.name === 'region1') {
        hasChild = true;
      } else if (node.data.name === 'region2') {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        let data;
        if (hasChild) {
          data = [{
            name: 'zone' + this.count++
          }, {
            name: 'zone' + this.count++
          }];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    },

    /**
     * btn的事件
     */
    handleClick(data) {
      console.log('* data', data);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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

.action-btn {
  margin-left: 50px;
}
</style>
