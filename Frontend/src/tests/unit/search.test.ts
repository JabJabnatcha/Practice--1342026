import { describe, it, expect, ref, computed } from 'vitest'

const mockProducts = [
  { id: 1, productName: 'Toy Car' },
  { id: 2, productName: 'Lego Set' },
  { id: 3, productName: 'Laptop' }
]

// จำลอง search logic
const useSearch = () => {
  const keyword = ref('')
  const products = ref(mockProducts)

  const filteredProducts = computed(() => {
    if (!keyword.value) return products.value

    return products.value.filter(p =>
      p.productName.toLowerCase().includes(keyword.value.toLowerCase())
    )
  })

  return { keyword, filteredProducts }
}

describe('Search', () => {

  it('returns all products when keyword is empty', () => {
    const { filteredProducts } = useSearch()

    expect(filteredProducts.value.length).toBe(3)
  })

  it('filters products by keyword', () => {
    const { keyword, filteredProducts } = useSearch()

    keyword.value = 'toy'

    expect(filteredProducts.value.length).toBe(1)
    expect(filteredProducts.value[0].productName).toBe('Toy Car')
  })

  it('is case insensitive', () => {
    const { keyword, filteredProducts } = useSearch()

    keyword.value = 'LAPTOP'

    expect(filteredProducts.value[0].productName).toBe('Laptop')
  })

  it('returns empty when no match', () => {
    const { keyword, filteredProducts } = useSearch()

    keyword.value = 'xxxxx'

    expect(filteredProducts.value.length).toBe(0)
  })

})