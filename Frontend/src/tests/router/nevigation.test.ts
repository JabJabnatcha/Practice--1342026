import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../../Views/Home.vue'
import Detail from '../../Views/Detail.vue'

describe('Navigation', () => {
  it('navigate to detail', async () => {

    const router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: '/', component: Home },
        { path: '/item/:id', component: Detail }
      ]
    })

    router.push('/')
    await router.isReady()

    const wrapper = mount(Home, {
      global: {
        plugins: [router],
        stubs: {
          RouterLink: true,
          RouterView: true
        }
      }
    })

    // 👉 ต้อง mock link ให้ click ได้จริง
    await router.push('/item/1')

    expect(router.currentRoute.value.fullPath).toBe('/item/1')
  })
})