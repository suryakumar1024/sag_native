import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  product: {
    width: '95%',
    height: 130,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    position: 'relative',
    marginTop: 10,
    
  },
  name: {
    fontSize: 35,
    position: 'absolute',
    top:15,
    left: 35,
    fontWeight: '300',
    textShadowColor: '#000',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  prize: {
    position: 'absolute',
    right: 30,
    fontWeight: '900',
    fontSize:35,
    color:'#f73e7c',
    bottom:15
  },
});
