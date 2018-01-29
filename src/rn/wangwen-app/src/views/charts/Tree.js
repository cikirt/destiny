import React from 'react'
import {
    View,
    ART
} from 'react-native'

const {Surface, Shape, Path} = ART;

export default class DashLine extends React.Component{

  constructor(props) {
    super(props)

    this.state = {
      cloloo: "#000000"
    }

   
  }

    render(){

        const path = Path()
            .moveTo(1,1)
            .lineTo(300,200);

        return(
            <View style={this.props.style}>
                <Surface width={300} height={600}>
                    <Shape   onPress={ this.setState({ cloloo: "#245678" })}
                      d={path} stroke={this.state.cloloo} strokeWidth={2} strokeDash={[10,5]}/>
                </Surface>
            </View>
        )
    }
}