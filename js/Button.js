export default class Button {
  constructor (keyProps) {
    Object.assign(this, keyProps)
    this.el = this.render()
  }

  render() {
    const btn = document.createElement('button')
    btn.className = `virtual-keyboard__key${this.dark ?
      ' virtual-keyboard__key_dark' : ''}`
    btn.append(...[
      createLabel(this.key, 'label'),
      createLabel(this.supKey, 'supLabel'),
      createLabel(this.shiftKey || this.key, 'shiftLabel'),
      createLabel(this.ruKey || this.key, 'ruLabel'),
      createLabel(this.ruSupKey, 'ruSupLabel'),
      createLabel(this.ruShiftKey || this.shiftKey || this.key, 'ruShiftLabel'),
    ].filter(Boolean))
    return btn
  }
}

function createLabel(text, type) {
  if (!text) return
  const label = document.createElement('b')
  label.className = `virtual-keyboard__key_${type}`
  label.innerText = text
  return label
}