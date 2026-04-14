import { mount } from '@vue/test-utils'
import Detail from '../../Views/Detail.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '../../router/index' // หรือสร้าง mock route เอง
import { vi } from 'vitest'

// mock API
vi.mock('../../service/Productservice', () => ({
  getProductById: () => Promise.resolve({
    id: 1,
    productName: 'Mock Product',
    productPrice: 100,
    categories: 'Test',
    stock: 1,
    image: '',
    isDelete: false
  })
}))

describe('Detail Page', () => {
  it('renders product', async () => {

    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: '/item/:id',
          component: Detail
        }
      ]
    })

    router.push('/item/1')
    await router.isReady()

    const wrapper = mount(Detail, {
      global: {
        plugins: [router]
      }
    })

    await new Promise(r => setTimeout(r, 0))

    expect(wrapper.text()).toContain('Mock Product')
  })
})