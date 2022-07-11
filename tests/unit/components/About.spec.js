import { shallowMount } from '@vue/test-utils';
import About from '@/components/About.vue'

describe('About.vue', () => {
  test('should respect the snapshot', () => {
    const wrapper = shallowMount(About)
    expect(wrapper.element).toMatchSnapshot()
  })
})
