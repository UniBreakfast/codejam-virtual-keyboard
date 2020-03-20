import { keyMap, keys } from './js/keys.js'
import Keyboard from './js/Keyboard.js'

const keyboard = new Keyboard(keyMap, keys, 'virtual-keyboard')
document.body.append(keyboard.el)