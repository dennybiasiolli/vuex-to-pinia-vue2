import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  test('should respect the snapshot', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.element).toMatchSnapshot()
  })
})
