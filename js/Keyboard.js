import Button from './Button.js'

export default class Keyboard {
  constructor (keyMap, keys, className) {
    this.keyMap = keyMap
    this.keys = keys
    this.class = className
    this.el = this.render()
  }

  render() {
    const board = document.createElement('div')
    board.className = this.class + '__keyboard'
    board.append(...this.keyMap.map(keyRow => {
      const row = document.createElement('div')
      row.className = this.class + '__row'
      row.append(...keyRow.map(key => new Button(this.keys[key]).el))
      return row
    }))
    return board
  }
}