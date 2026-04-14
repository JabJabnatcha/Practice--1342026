import { mount } from '@vue/test-utils'
import ProductCard from '../../components/ProductCard.vue'

describe('ProductCard', () => {

  const mockProduct = {
    id: 1,
    productName: 'Test Product',
    productPrice: 100,
    categories: '',
    stock: 1,
    image: '',
    isDelete: false
  }

  const factory = (props = {}) => {
    return mount(ProductCard, {
      props: {
        product: mockProduct,
        ...props
      },
      global: {
        stubs: {
          RouterLink: true
        }
      }
    })
  }

  it('renders product name', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain('Test Product')
  })

  it('renders product price', () => {
    const wrapper = factory()
    expect(wrapper.text()).toContain('100')
  })

  it('fallback image works', () => {
    const wrapper = factory()
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
  })
})