import { defineComponent, type FunctionalComponent } from 'vue';

export const TestFuncComponent: FunctionalComponent<{ count: number }> = (props) => {
  console.log('render');
  return <span>{props.count < 10 ? props.count : 'Many'}</span>;
};

let test = 0;
export function getTest() {
  return test;
}
export function addTest(num = 1) {
  test += num;
  return test;
}

export const TestInvalidComponent = defineComponent<{ count: number }>((props, ctx) => {
  console.log(props, ctx.attrs.count);
  return () => {
    // props.cocunt=undefined
    console.log('render', props.count, ctx.attrs.count);
    const count = ctx.attrs.count as number;
    return <span>{count < 10 ? count : 'Many'}</span>;
  };
});

export const TestComponent = defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
  setup(props, ctx) {
    return () => {
      console.log('render', props.count, ctx.attrs.count);
      return <span>{props.count < 10 ? props.count : 'Many'}</span>;
    };
  },
});
