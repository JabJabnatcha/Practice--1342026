import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import { describe, it, expect } from 'vitest'

// mock component logic แบบง่าย
const TestComponent = {
  template: `
    <div>
      <button class="minus" @click="decrease">-</button>
      <span class="qty">{{ quantity }}</span>
      <button class="plus" @click="increase">+</button>
    </div>
  `,
  setup() {
    const quantity = ref(1)
    const stock = 5

    const increase = () => {
      if (quantity.value < stock) quantity.value++
    }

    const decrease = () => {
      if (quantity.value > 1) quantity.value--
    }

    return { quantity, increase, decrease }
  }
}

describe('Quantity', () => {

  it('increase quantity', async () => {
    const wrapper = mount(TestComponent)

    await wrapper.find('.plus').trigger('click')

    expect(wrapper.find('.qty').text()).toBe('2')
  })

  it('decrease quantity', async () => {
    const wrapper = mount(TestComponent)

    await wrapper.find('.plus').trigger('click')
    await wrapper.find('.minus').trigger('click')

    expect(wrapper.find('.qty').text()).toBe('1')
  })

  it('cannot go below 1', async () => {
    const wrapper = mount(TestComponent)

    await wrapper.find('.minus').trigger('click')

    expect(wrapper.find('.qty').text()).toBe('1')
  })

  it('cannot exceed stock', async () => {
    const wrapper = mount(TestComponent)

    for (let i = 0; i < 10; i++) {
      await wrapper.find('.plus').trigger('click')
    }

    expect(wrapper.find('.qty').text()).toBe('5')
  })

})