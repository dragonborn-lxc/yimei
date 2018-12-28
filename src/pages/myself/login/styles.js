import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  inputWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 18,
  },

  input: {
    marginTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    width: 240,
    height: 30,
  },

  invalidBtn: {
    marginTop: 28,
    width: 240,
    height: 35,
    backgroundColor: 'gray',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  validBtn: {
    marginTop: 28,
    width: 240,
    height: 35,
    backgroundColor: 'black',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pView: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  pTitle: {
    color: 'rgb(0,0,0)',
    fontSize: 22,
    lineHeight: 33,
    textAlign: 'center',
  },
  pSignal: {
    color: 'rgb(0,0,0)',
    fontSize: 11,
    textAlign: 'right',
  },
  pReturn: {
    height: 20
  },
  pSubTitle: {
    color: 'rgb(0,0,0)',
    fontSize: 18,
    lineHeight: 22,
  },
  pContent: {
    color: 'rgb(0,0,0)',
    fontSize: 13,
    lineHeight: 22,
  },

})
