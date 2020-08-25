import * as fn from 'polished'
import { Platform } from 'react-native'

import json from '../../package.json'

const v = {
  fn,
  //
  fontSize: 14,
  lineHeight: 20,
  get fontSizeTitle() {
    return 1.8 * v.fontSize
  },
  get lineHeightTitle() {
    return 1.8 * v.lineHeight
  },
  get fontSizeSubTitle() {
    return 1.2 * v.fontSize
  },
  get lineHeightSubTitle() {
    return 1.2 * v.lineHeight
  },
  get fontSizeSmall() {
    return 0.8 * v.fontSize
  },
  get lineHeightSmall() {
    return 0.8 * v.lineHeight
  },
  iconSize: 24,
  fontWeight: 'normal',
  fontFamily:
    Platform.OS === 'web'
      ? "'-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'"
      : undefined,
  //
  borderRadius: 3,
  maxModalWidth: 380,
  //
  bg: 'white',
  revBg: fn.darken(0.9, 'white'),
  color: 'black',
  revColor: 'white',
  hoverBg: fn.darken(0.05, 'white'),
  subColor: fn.darken(0.75, 'white'),
  borderBg: fn.darken(0.15, 'white'),
  layerBg: fn.transparentize(0.2, 'black'),
  //
  boxShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 3, // android
  },
  //
  backdropZindex: {
    zIndex: 999,
    elevation: 999,
  },
}

v.colors = {
  //
  primary: '#77c0b8',
  warning: '#f1af20',
  danger: '#dc0f39',
}
;['primary', 'warning', 'danger'].forEach(k => {
  v.colors[`${k}Fn`] = lv =>
    lv > 0 ? fn.lighten(lv, v.colors[k]) : fn.darken(-lv, v.colors[k])
})

export const currentVersion = json.version

export default v
