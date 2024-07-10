import { directives } from './directives.ts';

// eslint-disable-next-line node/prefer-global/process
const isProd = process.env.NODE_ENV === 'production';

const componentsList = [
  { text: 'Accordion', link: '/components/accordion/accordion.doc.md' },
  { text: 'Alert', link: '/components/alert/alert.doc.md' },
  { text: 'Autocomplete', link: '/components/autocomplete/autocomplete.doc.md' },
  { text: 'Breadcrumbs', link: '/components/breadcrumbs/breadcrumbs.doc.md' },
  { text: 'Button', link: '/components/button/button.doc.md', readyForProduction: true },
  { text: 'ButtonGroup', link: '/components/button-group/buttonGroup.doc.md' },
  { text: 'Card', link: '/components/card/card.doc.md' },
  { text: 'Carousel', link: '/components/carousel/carousel.doc.md' },
  { text: 'Cascader', link: '/components/cascader/cascader.doc.md' },
  { text: 'Checkbox', link: '/components/checkbox/checkbox.doc.md' },
  { text: 'CheckboxButton', link: '/components/checkboxButton/checkboxButton.doc.md' },
  { text: 'CheckboxGroup', link: '/components/checkboxGroup/checkboxGroup.doc.md' },
  { text: 'Chip', link: '/components/chip/chip.doc.md' },
  { text: 'Code', link: '/components/code/code.doc.md' },
  { text: 'Column', link: '/components/column/column.doc.md' },
  { text: 'Combobox', link: '/components/combobox/combobox.doc.md' },
  { text: 'ConfigProvider', link: '/components/configProvider/configProvider.doc.md' },
  { text: 'ConfirmDialog', link: '/components/confirmDialog/confirmDialog.doc.md' },
  { text: 'Container', link: '/components/container/container.doc.md' },
  { text: 'Data Table', link: '/components/table/table.doc.md' },
  { text: 'DatePicker', link: '/components/datePicker/datePicker.doc.md' },
  { text: 'Dialog', link: '/components/dialog/dialog.doc.md' },
  { text: 'Disclosure', link: '/components/disclosure/disclosure.doc.md' },
  { text: 'Divider', link: '/components/divider/divider.doc.md', readyForProduction: true },
  { text: 'Drawer', link: '/components/drawer/drawer.doc.md' },
  { text: 'Dropdown', link: '/components/dropdown/dropdown.doc.md' },
  { text: 'FileBrowser', link: '/components/fileBrowser/fileBrowser.doc.md' },
  { text: 'FilePicker', link: '/components/filePicker/filePicker.doc.md' },
  { text: 'FileUpload', link: '/components/fileUpload/fileUpload.doc.md' },
  { text: 'Filter', link: '/components/filter/filter.doc.md' },
  { text: 'FittedActions', link: '/components/fitted-actions/fittedActions.doc.md' },
  { text: 'FlowChart', link: '/components/flowChart/flowChart.doc.md' },
  { text: 'Footer', link: '/components/footer/footer.doc.md' },
  { text: 'Form', link: '/components/form/form.doc.md' },
  { text: 'FormDialog', link: '/components/formDialog/formDialog.doc.md' },
  { text: 'FormError', link: '/components/formError/formError.doc.md' },
  { text: 'FormItem', link: '/components/formItem/formItem.doc.md' },
  { text: 'Grid', link: '/components/grid/grid.doc.md' },
  { text: 'Header', link: '/components/header/header.doc.md' },
  { text: 'Icon', link: '/components/icon/icon.doc.md' },
  { text: 'IconButton', link: '/components/icon-button/iconButton.doc.md' },
  { text: 'InfiniteScroll', link: '/components/infiniteScroll/infiniteScroll.doc.md' },
  { text: 'Input', link: '/components/input/input.doc.md' },
  { text: 'InputBase', link: '/components/inputBase/inputBase.doc.md' },
  { text: 'InputNumber', link: '/components/inputNumber/inputNumber.doc.md' },
  { text: 'Link', link: '/components/link/link.doc.md', readyForProduction: true },
  { text: 'List', link: '/components/list/list.doc.md' },
  { text: 'Loading', link: '/components/loading/loading.doc.md' },
  { text: 'Main', link: '/components/main/main.doc.md' },
  { text: 'Map', link: '/components/map/map.doc.md' },
  { text: 'Markup Table', link: '/components/markup-table/markupTable.doc.md' },
  { text: 'Menu', link: '/components/menu/menu.doc.md' },
  { text: 'MenuGroup', link: '/components/menuGroup/menuGroup.doc.md' },
  { text: 'MenuItem', link: '/components/menuItem/menuItem.doc.md' },
  { text: 'Modal', link: '/components/modal/modal.doc.md' },
  { text: 'Notification', link: '/components/notification.doc.md' },
  { text: 'NumPicker', link: '/components/numPicker/numPicker.doc.md' },
  { text: 'Option', link: '/components/option/option.doc.md' },
  { text: 'OptionGroup', link: '/components/optionGroup/optionGroup.doc.md' },
  { text: 'Pagination', link: '/components/pagination/pagination.doc.md' },
  { text: 'Password', link: '/components/password/password.doc.md' },
  { text: 'PieChart', link: '/components/pie-chart/pieChart.doc.md' },
  { text: 'Popover', link: '/components/popover/popover.doc.md' },
  { text: 'Popper', link: '/components/popper/popper.doc.md' },
  { text: 'Progress', link: '/components/progress/progress.doc.md' },
  { text: 'Radio', link: '/components/radio/radio.doc.md' },
  { text: 'RadioButton', link: '/components/radioButton/radioButton.doc.md' },
  { text: 'RadioGroup', link: '/components/radioGroup/radioGroup.doc.md' },
  { text: 'Ribbon', link: '/components/ribbon/ribbon.doc.md' },
  { text: 'Row', link: '/components/row/row.doc.md' },
  { text: 'ScriptEditor', link: '/components/scriptEditor/scriptEditor.doc.md' },
  { text: 'Search', link: '/components/search/search.doc.md' },
  { text: 'Select', link: '/components/select/select.doc.md' },
  { text: 'Skeleton', link: '/components/skeleton/skeleton.doc.md' },
  { text: 'Slider', link: '/components/slider/slider.doc.md' },
  { text: 'Spinner', link: '/components/spinner/spinner.doc.md' },
  { text: 'SplitButton', link: '/components/splitButton/splitButton.doc.md' },
  { text: 'Stepper', link: '/components/stepper/stepper.doc.md' },
  { text: 'StepperItem', link: '/components/stepperItem/stepperItem.doc.md' },
  { text: 'Submenu', link: '/components/submenu/submenu.doc.md' },
  { text: 'Switch', link: '/components/switch/switch.doc.md' },
  { text: 'TableColumn', link: '/components/tableColumn/tableColumn.doc.md' },
  { text: 'Tabs', link: '/components/tabs/tabs.doc.md' },
  { text: 'Tag', link: '/components/tag/tag.doc.md' },
  { text: 'TextArea', link: '/components/textarea/textarea.doc.md' },
  { text: 'ThemeProvider', link: '/components/themeProvider/themeProvider.doc.md' },
  { text: 'Tiles', link: '/components/tiles/tiles.doc.md' },
  { text: 'TimePicker', link: '/components/timePicker/timePicker.doc.md' },
  { text: 'Toolbar', link: '/components/toolbar/toolbar.doc.md' },
  { text: 'Tooltip', link: '/components/tooltip/tooltip.doc.md', readyForProduction: true },
  { text: 'Tree', link: '/components/tree/tree.doc.md' },
  { text: 'Typography', link: '/components/typography/typography.doc.md' },
  { text: 'Upload', link: '/components/upload/upload.doc.md' },
  { text: 'Virtual Scroll', link: '/components/virtual-scroll/virtualScroll.doc.md' },
  {
    text: 'Directives',
    items: directives,
    readyForProduction: true
  }
];

export const enComponents = [
  ...componentsList.filter(c => (isProd && c.readyForProduction) || !isProd),
];
