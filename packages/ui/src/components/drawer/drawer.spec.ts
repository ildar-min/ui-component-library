import type { AcvDrawerProps } from './drawer';
import { mount } from '@vue/test-utils';
import { describe, expect, it } from 'vitest';
import AcvCard from '../card/card.vue';
import Drawer from './drawer.vue';

describe('test Drawer component', () => {
  it('default props', () => {
    const wrapper = mount(Drawer);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "anchor": "left",
        "border": undefined,
        "modelValue": false,
        "persistent": false,
        "shadow": undefined,
        "withPadding": false,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Drawer, {
      props: {
        border: 'secondary',
        shadow: 'regular',
        withPadding: true,
      } as AcvDrawerProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "anchor": "left",
        "border": "secondary",
        "modelValue": false,
        "persistent": false,
        "shadow": "regular",
        "withPadding": true,
      }
    `);
  });

  it('renders closed', () => {
    const wrapper = mount(Drawer);

    expect(wrapper.html()).toMatchInlineSnapshot(`"<!--v-if-->"`);
  });

  it('renders opened', async () => {
    const wrapper = mount(Drawer);

    await wrapper.setProps({ modelValue: true });

    const drawer = wrapper.getComponent(AcvCard);

    expect(drawer.html()).toMatchInlineSnapshot(`
      "<div data-v-e3acac2e="" data-v-dd14fadb="" class="acv-card acv-drawer acv-drawer-left" modelvalue="true" persistent="false" anchor="left">
        <div data-v-e3acac2e="" class="content"></div>
      </div>"
    `);
  });
});
