# Button

| npm package| npm downloads |  github |
| --------------- | ------------------------------ | ------ | ----------------------- |
| [![npm package][npm-badge]][npm-url] | [![npm downloads][npm-downloads]][npm-url] | [![github][git-badge]][git-url] |


[npm-badge]: https://img.shields.io/npm/v/@_nu/react-native-button.svg
[npm-url]: https://www.npmjs.org/package/@_nu/react-native-button
[npm-downloads]: https://img.shields.io/npm/dw/@_nu/react-native-button
[git-url]: https://github.com/nu-system/react-native-button
[git-badge]: https://img.shields.io/github/stars/nu-system/react-native-button.svg?style=social

Button of react native.

![示意图](demo.png)

## Install

```bash
npm i @_nu/react-native-button
```

## Custom

Choosing `@_nu/react-native-button` means you are choosing a whole set of button solutions.

Because different projects have different skins, secondary encapsulation is required in real projects.

The default is `bootstrap` skin.

```JSX
import React from 'react';
import NuButton, {createNuButtonTheme} from '@_nu/react-native-button';

/**
 * creacte default button theme
 */
createNuButtonTheme({
  levelColors: {
      default: '#343a40',
      secondary: '#6c757d',
      primary: '#007bff',
      warning: '#ffc107',
      danger: '#dc3545',
      success: '#22A745',
  }
});

/**
 * creacte test button theme
 */
createNuButtonTheme({
    name:'test',
    levelColors: {
        default: '#000000',
        primary: '#1976d2',
        secondary: 'rgb(220, 0, 78)',
        warning: '#ff9900',
        danger: 'red',
        success: 'green',
    }
});

export default NuButton;
```

## Use

```JSX
import Button from "./components/Button";

const Page=()=>{    
    return (
     <div>
        <Button variant="ghost" size="large">一个大的幽灵按钮</Button>                
        <Button theme="test" variant="ghost" size="large">一个大的幽灵主按钮</Button>
     </div>     
    );
};

export default Page;
```

## Api

### NuButton

| props   | type | default | function |
|:-----|:-----:|:-----:|:-----:|
| theme |  'string' | 'default' | 按钮主题 |
| disabled |  boolean | - | 不可用按钮 |
| loading |  boolean | - | loading按钮 |
| capsule |  boolean | - | 圆角按钮|
| circle |  boolean | - | 正圆按钮 |
| level | 'default', 'primary', 'secondary', 'warning', 'danger', 'success' | `default` | 按钮等级 |
| variant | 'fill', 'ghost', 'link' | `fill` | 按钮变体 |
| size | \['large', 'default', 'middle', 'small' \] or `number` | `default` | 按钮大小 |
| before | 'element','function' | `null` | 放到文字之前 |
| after | 'element','function' | `null` | 放到文字之后 |

*note*: although 'size' can be 'number' interface is provided, this is not recommended. Your use of this method means that the button style you define cannot be reused.

### createNuButtonTheme 

| prop   | type | default | function |
|:-----|:-----:|:-----:|:-----:|
| `name` |  `string` | `default` | 主题名称 |
| `defaultProps` |  `Object`| 见下面 | 默认属性 |
| `levelColors` |  `object` | 见下面 | 按钮主色列表 |
| `Wrap` |  `func node` | 见下面 | 按钮容器对象 |
| `WrapAndroid` |  `func node` | 见下面 | 安卓按钮容器对象 |
| `Content` |  `func node` | 见下面 | 内容器 |
| `Txt` |  `func node` | 见下面 | 文本容器 |
| `Loader` |  `func node` | 见下面 | 加载对象 |
| `wrapStyle` |  `object` | 见下面 | 主容器样式 |
| `contentStyle` |  `object` | 见下面 | 内容器样式 |
| `textStyle` |  `object` | 见下面 | 文本容器样式 |

### `defaultProps`

```JSX
defaultProps: {
    level: 'default',
    variant: 'fill'
}
```

default props on button

### `Wrap, Content, Txt, Loader`

All of them got the same API and use, you have to return a object of `node`.

```JSX
{
    WrapAndroid: function ({children, style, ...otherProps}) {
        return (
            <View style={style}>
                // 不能在 TouchableNativeFeedback 上写样式，so sad
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()} {...otherProps}>
                    {children}
                </TouchableNativeFeedback>
            </View>
        );
    },
    Wrap: function ({children, level, variant, ...otherProps}) {
        return <TouchableOpacity activeOpacity={0.5} {...otherProps}>{children}</TouchableOpacity>;
    },
    Txt: Text,
    Content: View,
    Loader: function ({level, variant, wrapStyle, contentStyle, textStyle}) {
        return (<ActivityIndicator animating={true} color={textStyle.color}/>);
    }
}
```

- level: level of button
- variant: style of button
- wrapStyle: wrap style 
- contentStyle: content style
- textStyle:  text style

#### Stract

```JSX
<Wrap>
    <Content>
        <Txt>Button</Txt>
    </Content>
</Wrap>
```

when loading

```JSX
<Wrap>
    <Content>
        <Loader />
    </Content>
</Wrap>
```

### Api `wrapStyle` ,`contentStyle`, `textStyle`

All of them got the same API and use.

```JSX
{
    wrapStyle: {
        default: {
            position: 'relative',
            overflow: 'hidden',
            height: 40,
        },
        capsule: {
            borderRadius: 100
        },
        circle: {
            borderRadius: 100
        },
        large: {
            height: 48
        },
        middle: {
            height: 32
        },
        small: {
            height: 24
        },
        ghost: {
            borderWidth: 1
        },
        disabled: {
            opacity: 0.4
        }
    },
    textStyle: {
        default: {
            color: "#ffffff",
            fontSize: 16,
            textAlign: 'center',
            marginLeft: 8,
            marginRight: 8
        },
        large: {
            fontSize: 18
        },
        middle: {
            fontSize: 14
        },
        small: {
            fontSize: 12
        },
        customStyle: function ({warning, fill, style}) {
            if (warning && fill) {
                style.color = '#333333';
            }
            return style;
        }
    },
    contentStyle: {
        default: {
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row'
        }
    }
}
```

All bool properties except 'default' are actually rendered by merging with the 'default' style and then rendering through 'customStyle'.

#### customStyle

You must return the style object.

- level: level of button
- variant: style of button
- style: style


Define any bool props

```JSX
{
    wrapStyle:{
        h100:{
            height: 100
        }
    }
}
```

```JSX
<Button h100>高100的按钮</Button>
```

### `levelColors`

```JS
const levelColors= {
    default: '#343a40',
    primary: '#007bff',
    secondary: '#6c757d',
    warning: '#ffc107',
    danger: '#dc3545',
    success: '#22A745',
};
```

## FAQ

### Add Icon

```JSX
<Button before={<ActivityIndicator animating={true} color={'red'}/>}>图标在我左边</Button>
<Button after={<ActivityIndicator animating={true} color={'red'}/>}>图标在我右边</Button>
```

### Multiline text

```JSX
<Button>{({textStyle}) => {
    return (
        <View>
            <Text style={textStyle}>切换主题</Text>
            <Text style={textStyle}>「default</Text>
        </View>
    );
}}</Button>
```


### Gradient background

```JSX
{    
    name:'test',
    Content: function ({children, style, level, variant}) {
        /* 修改 fill danger 按钮为渐变背景  */
        if (level === 'danger' && variant === 'fill') {
            return (
                <LinearGradient
                    colors={["red", "blue"]}
                    style={style}
                >{children}</LinearGradient>
            );
        } else {
            return (
                <View style={style}>{children}</View>
            );
        }
    },
}
```
