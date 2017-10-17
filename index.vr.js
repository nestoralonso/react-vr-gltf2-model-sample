import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
  PointLight,
} from 'react-vr';

export default class Foo_RVR_Gltf extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>

        <Model
          ref={node => console.log(node)}
          style={{
            transform: [
              {translate: [0, -15, -100]},
              {scale: 1},
            ],
          }}
          source={{
            gltf2: asset('Monster.glb'),
          }}
          lit={true}
        />
        <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}} />

        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 2, -3]}],
          }}>
          hello
        </Text>
      </View>
    );
  }
};

AppRegistry.registerComponent('Foo_RVR_Gltf', () => Foo_RVR_Gltf);
