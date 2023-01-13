import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheNavigation from '../TheNavigation.vue'

describe('TheNavigation', () => {
  it('renders properly', () => {
    const wrapper = mount(TheNavigation, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
