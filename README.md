
在React中不需要在手动去操作DOM.
例如创建li,不需要createElement.只要更改数据State.
当检测到State更新,React会自动的渲染页面.

通过onChange事件中的event.target.value读取input中的值.
更新State中的值为input值.在把State值绑定给input.value属性.

子组件如果想和父组件通信,就调用父组件传递过来的方法.
