import { serverBus } from '../../main';
export default {
  name: 'Config',
  props: {
    msg: String
  },
  data() {
    return {
      test: 'test',
      test2: 'test2'
    };
  },
  methods: {
    testFunction() {
      console.log("$emit", this.msg);
      serverBus.$emit('test-has-changed', this.$data);
    }
  }
}
