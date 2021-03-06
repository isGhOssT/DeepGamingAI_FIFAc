'use strict';

import React from 'react';
import ReactNative from 'react-native';
import {InputComponent} from '../lib/InputComponent';

let { StyleSheet} = ReactNative;
export class InputField extends React.Component{
  render(){
    return(<InputComponent
      {...this.props}
      labelStyle={formStyles.fieldText}
      inputStyle={[formStyles.input,
          (this.props.multiline)?formStyles.multiline:{},
          (this.props.label)?formStyles.textRight:{},
          this.props.style
        ]}
      containerStyle={[formStyles.fieldContainer,
            formStyles.horizontalContainer,
            this.props.containerStyle,
          ]}
      />
  )
}

}

InputField.propTypes = {
  multiline: React.PropTypes.bool,
  placeholder:React.PropTypes.string,
}


let fieldStyles =StyleSheet.create({
  input:{
    paddingLeft: 10,
    paddingRight: 10,
  },
});

let formStyles = StyleSheet.create({
  form:{

  },
  alignRight:{
    marginTop: 7, position:'absolute', right: 10
  },
  textRight:{
    textAlign: 'right'
  },
  multiline:{
    lineHeight: 32,
    fontSize: 34/2
  },
  separatorContainer:{
    // borderTopColor: '#C8C7CC',
    // borderTopWidth: 1,
    paddingTop: 35,
    borderBottomColor: '#C8C7CC',
    borderBottomWidth: 1,

  },

  fieldsWrapper:{
    // borderTopColor: '#afafaf',
    // borderTopWidth: 1,
  },
  horizontalContainer:{
    flexDirection: 'row',

    justifyContent: 'flex-start'
  },
  fieldContainer:{
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  fieldText:{
    fontSize: 34/2,
    paddingLeft: 10,
    paddingRight: 10,
    justifyContent: 'center',
    lineHeight: 32
  },
  input:{
    paddingLeft: 10,
    paddingRight: 10,

  },
  helpTextContainer:{
    marginTop:9,
    marginBottom: 25,
    paddingLeft: 20,
    paddingRight: 20,

  },
  helpText:{
    color: '#7a7a7a'
  }
});


{/*<View
  onLayout={this.handleLayoutChange.bind(this)}>
  {(this.props.iconLeft)
    ? this.props.iconLeft
    : null
  }
  {(this.props.label)
    ?
    <Text style={formStyles.fieldText}
      onLayout={this.handleLabelLayoutChange.bind(this)}
      onPress={this.handleFieldPress.bind(this)}
      >{this.props.label}</Text>
    : null
  }
  <TextInput
    {...this.props}
    ref='inputBox'
    keyboardType = {this.props.keyboardType}
    style={[formStyles.input,
        (this.props.multiline)?formStyles.multiline:{},
        (this.props.label)?formStyles.textRight:{},
        this.props.style,
        {height: this.state.inputHeight}
      ]}

    onChange={this.handleChange.bind(this)}
    onFocus={this._scrollToInput.bind(this)}
    placeholder={this.props.placeholder}
    value={this.state.value}
    width={this.state.width-this.state.labelWidth
        -((this.props.iconRight)?this.props.iconRight.props.size:0)
        -((this.props.iconLeft)?this.props.iconLeft.props.size:0)
      }

    />
  {(this.props.iconRight)
      ? this.props.iconRight
      : null
    }
</View>*/}
