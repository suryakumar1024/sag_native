import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  lgStart:{
    borderRadius: 30,
    elevation: 15,
    shadowColor: '#4A00E0',
  },
  mainContainer: {
    flex: 1,
  },
  upperContainer: {
    height: '60%',
    position: 'relative',
  },
  header: {
    fontSize: 70,
    color: '#fff',
    position: 'absolute',
    left: 50,
    fontFamily: 'Roboto-Bold',
  },
  stay: {
    top: 100,
  },
  fit: {
    top: 170,
  },
  details: {
    color: '#fff',
    position: 'absolute',
    top: 270,
    fontSize: 20,
    left: 50,
    opacity: 0.5,
    fontFamily: 'Roboto-Medium',
  },
  bottomContainer: {
    height: '40%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  startButton: {
    padding: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 65,
  },
  start: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 3,
    marginHorizontal: 20,
  },
});
